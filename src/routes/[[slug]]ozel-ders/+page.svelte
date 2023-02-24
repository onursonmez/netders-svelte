<script>
	import Modal from '/src/components/Modal.svelte'
	import { getUsers } from '/src/repository/user'
	import { getCities, getCounties } from '/src/repository/location'
	import { getSubjects, getLevels, getCategories } from '/src/repository/lesson'
	import { gendersStore } from '/src/stores/userStore'
	import { citiesStore, countiesStore } from '/src/stores/locationStore'
	import { subjectsStore, levelsStore, lessonTypesStore, categoriesStore } from '/src/stores/lessonStore'
	import { searchParamsModel } from '/src/models/searchModel'
	import { changeSearchPageStateFunction } from '/src/functions/changeSearchPageStateFunction'
	import { onMount } from 'svelte'
	import { page } from '$app/stores'
	import MediaCardContainer from '/src/components/MediaCardContainer.svelte'
	import { toast } from '/src/functions/toast'

	import Select from 'svelte-select';
	import { itemFilter } from '/src/utils/selectUtil'

	export let data

	let loading = false
	let showMoreLoading = false
	let showSearchModal = false
	let pageData = {...searchParamsModel, ...data.routeResponse}
	let searchData = {...searchParamsModel, ...data.routeResponse}

	onMount(async () => {
		$citiesStore = await getCities()
		$subjectsStore = await getSubjects()
		$categoriesStore = await getCategories()
		if(searchData.city?.id)
		$countiesStore = await getCounties({cityId: searchData.city.id})
		if(searchData.subject?.id)
		$levelsStore = await getLevels({subjectId: searchData.subject.id})
	})

	const onSearch = async () => {
		loading = true
		pageData = {...pageData, ...searchData}
		pageData.page = 1
		const users = await getUsers(pageData)
		data.users.items = users?.items ? [...users.items] : []
		data.users.total = users?.total ?? 0
		data.users.minimumPrice = users?.minimumPrice ?? 0
		loading = false
		showSearchModal = false
		changeSearchPageStateFunction(pageData, $page)
	}

	const updateCounties = async () => {
		searchData.county = null
		if(searchData.city?.id){
			$countiesStore = await getCounties({cityId: searchData.city.id})
		}
	}

	const updateLevels = async () => {
		searchData.level = null
		searchData.category = null
		if(searchData.subject?.id){
			$levelsStore = await getLevels({subjectId: searchData.subject.id})
		}
	}

	let showMore = async () => {
		showMoreLoading = true
		pageData.page += 1
		const users = await getUsers(pageData)
		if(users.items != null){
			data.users.items = [...data.users.items, ...users.items]
		} else {
			toast("Daha fazla öğretmen bulunamadı.", "warning");
		}
		showMoreLoading = false
	}
</script>

<svelte:head>
	<title>{pageData.county?.title ? pageData.county.city.title + ' ' + pageData.county.title + ' ' : (pageData.city?.title ? pageData.city.title + ' ' : '')}{pageData.subject?.title ? pageData.subject.title + ' ' : ''}{pageData.category?.title ? pageData.category.title + ' ' : (pageData.level?.title ? pageData.level.title + ' ' : '')}Özel Ders Veren Öğretmenler - {data.users.total} Öğretmen - Ortalama fiyat {data.users.minimumPrice}₺</title>
	<meta name="description" content="{pageData.county?.title ? pageData.county.city.title + ' ili, ' + pageData.county.title + ' ilçesinde ' : (pageData.city?.title ? pageData.city.title + ' ' : '')}{pageData.subject?.title ? pageData.subject.title + ' konusunda ' : ''}{pageData.category?.title ? pageData.category.title + ' ' : (pageData.level?.title ? pageData.level.title + ' ' : '')}özel ders veren {data.users.total} öğretmen.{pageData.category?.title ? ' ' + pageData.category.title + ' özel ders ortalama ' + data.users.minimumPrice + '₺ fiyatlarla.' : ' Ortalama ' + data.users.minimumPrice + '₺ fiyatlarla.'}" />
</svelte:head>

{#if showSearchModal}
<Modal on:close="{() => showSearchModal = false}">
	<div class="grow bg-white rounded-lg shadow-md">
		<div class="bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold">Gelişmiş Arama</div>
		<div class="p-6">
			<form class="flex flex-col space-y-6" action="#" on:submit|preventDefault={onSearch}>
				<div class="grid gap-3 md:grid-cols-2 text-sm">
					<label>
						<div class="pb-1">Anahtar Kelime</div>
						<input type="text" name="keyword" bind:value={searchData.keyword} class="w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0" />
					</label>
					<label>
						<div class="pb-1">Maksimum Bütçe (₺)</div>
						<input type="text" name="budget" bind:value={searchData.budget} placeholder="200" class="w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0" />
					</label>

					<div>
						<span class="text-sm mb-1 block text-gray-500">Konu</span>
						<Select placeholder="Seç" noOptionsMessage="Sonuç bulunamadı..." items="{$subjectsStore}" bind:value={searchData.subject} optionIdentifier="id" labelIdentifier="title" {itemFilter} on:select={updateLevels} />
					</div>

					<div>
						<span class="text-sm mb-1 block text-gray-500">Ders</span>
						<Select placeholder="Seç" noOptionsMessage="Sonuç bulunamadı..." items="{$levelsStore}" bind:value={searchData.level} optionIdentifier="id" labelIdentifier="title" {itemFilter} />
					</div>

					<div>
						<span class="pb-1 block">Ders Tipi</span>
						<select name="lesson_type" bind:value={searchData.lessonType} class="w-full border border-gray-300 rounded-md">
							<option value="">Lütfen Seç</option>
							{#each $lessonTypesStore as lessonType}
								<option value="{lessonType}">{lessonType.title}</option>
							{/each}
						</select>
					</div>

					<div>
						<span class="pb-1 block">Öğretmen</span>
						<select name="gender" bind:value={searchData.gender} class="w-full border border-gray-300 rounded-md">
							<option value="">Lütfen Seç</option>
							{#each $gendersStore as gender}
								<option value="{gender}">{gender.title}</option>
							{/each}
						</select>
					</div>

				</div>

				<button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2">ARA</button>

			</form>
		</div>
	</div>
</Modal>
{/if}

<section class="dark:bg-gray-900 text-center">
	<div class="mx-auto w-auto py-6 max-w-4xl">
			<h1 class="mb-4 text-3xl font-bold text-blue-700 tracking-tight leading-none xl:text-4xl dark:text-white">{pageData.county?.title ? pageData.county.city.title + ' ' + pageData.county.title + ' ' : (pageData.city?.title ? pageData.city.title + ' ' : '')}{pageData.subject?.title ? pageData.subject.title + ' ' : ''}{pageData.category?.title ? pageData.category.title + ' ' : (pageData.level?.title ? pageData.level.title + ' ' : '')}Özel Ders</h1>
			<h3 class="mb-4 font-light text-gray-800 lg:text-base xl:text-lg dark:text-gray-400">{pageData.county?.title ? pageData.county.city.title + ' ' + pageData.county.title + ' ' : (pageData.city?.title ? pageData.city.title + ' ' : '')}{pageData.subject?.title ? pageData.subject.title + ' ' : ''}{pageData.category?.title ? pageData.category.title + ' ' : (pageData.level?.title ? pageData.level.title + ' ' : '')}Özel Ders Veren {data.users.total} Öğretmen. {pageData.category?.title ? pageData.category.title + ' Özel Ders ' : ''} Ortalama {data.users.minimumPrice}₺ Fiyatlarla.</h3>

			<div class="grid grid-cols-3 gap-4 text-left">
				<div>
					<span class="text-sm mb-1 block text-gray-500">Şehir</span>
					<Select placeholder="Seç" noOptionsMessage="Sonuç bulunamadı..." items="{$citiesStore}" bind:value={searchData.city} optionIdentifier="id" labelIdentifier="title" isClearable="false" {itemFilter} on:select={() => {updateCounties(); onSearch();}} on:clear={updateCounties} />
				</div>

				<div>
					<span class="text-sm mb-1 block text-gray-500">İlçe</span>
					<Select placeholder="Seç" noOptionsMessage="Sonuç bulunamadı..." items="{$countiesStore}" bind:value={searchData.county} optionIdentifier="id" labelIdentifier="title" {itemFilter} on:select={onSearch} on:clear={onSearch} />
				</div>

				<div>
					<span class="text-sm mb-1 block text-gray-500">Ders</span>
					<Select placeholder="Seç" noOptionsMessage="Sonuç bulunamadı..." items="{$categoriesStore}" bind:value={searchData.category} optionIdentifier="id" labelIdentifier="title" {itemFilter} on:select={() => {searchData.subject = null; searchData.level = null; onSearch();}} on:clear={onSearch} />
				</div>
			</div>

			<p class="text-sm text-gray-800 mt-4"><button class="text-blue-700 hover:text-blue-900 font-bold" on:click="{() => showSearchModal = true}">Detaylı Arama</button></p>

			<div class="flex justify-center flex-wrap gap-2">

				{#if pageData.city}
				<div class="bg-white p-2 pl-3 rounded-full text-xs font-bold mt-4">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block text-gray-400">
						<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
						<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
					</svg>
					<span>{pageData.city?.title}</span>
					<button on:click={() => {searchData.city = null; searchData.county = null; $countiesStore = []; onSearch();}}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block text-blue-700">
							<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</button>
				</div>
				{/if}

				{#if pageData.county}
					<div class="bg-white p-2 pl-3 rounded-full text-xs font-bold mt-4">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block text-gray-400">
							<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
							<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
						</svg>
						<span>{pageData.county?.title}</span>
						<button on:click={() => {searchData.county = null; onSearch();}}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block text-blue-700">
								<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</button>
					</div>
				{/if}

				{#if pageData.category}
					<div class="bg-white p-2 pl-3 rounded-full text-xs font-bold mt-4">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block text-gray-400">
							<path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
						</svg>
						<span>{pageData.category?.title}</span>
						<button on:click={() => {searchData.category = null; onSearch();}}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block text-blue-700">
								<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</button>
					</div>
				{:else}

				{#if pageData.subject}
					<div class="bg-white p-2 pl-3 rounded-full text-xs font-bold mt-4">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block text-gray-400">
							<path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
						</svg>
						<span>{pageData.subject?.title}</span>
						<button on:click={() => {searchData.subject = null; searchData.level = null; $levelsStore = []; onSearch();}}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block text-blue-700">
								<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</button>
					</div>
				{/if}

				{#if pageData.level}
					<div class="bg-white p-2 pl-3 rounded-full text-xs font-bold mt-4">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block text-gray-400">
							<path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
						</svg>
						<span>{pageData.level?.title}</span>
						<button on:click={() => {searchData.level = null; onSearch();}}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block text-blue-700">
								<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</button>
					</div>
				{/if}
				{/if}

				{#if pageData.keyword}
					<div class="bg-white p-2 pl-3 rounded-full text-xs font-bold mt-4">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block text-gray-400">
							<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
						</svg>
						<span>{pageData.keyword}</span>
						<button on:click={() => {searchData.keyword = ''; onSearch();}}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block text-blue-700">
								<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</button>
					</div>
				{/if}

				{#if pageData.budget}
					<div class="bg-white p-2 pl-3 rounded-full text-xs font-bold mt-4">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block text-gray-400">
							<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
						</svg>
						<span>{pageData.budget} ₺</span>
						<button on:click={() => {searchData.budget = ''; onSearch();}}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block text-blue-700">
								<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</button>
					</div>
				{/if}

				{#if pageData.lessonType}
					<div class="bg-white p-2 pl-3 rounded-full text-xs font-bold mt-4">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block text-gray-400">
							<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
						</svg>
						<span>{pageData.lessonType?.title}</span>
						<button on:click={() => {searchData.lessonType = null; onSearch();}}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block text-blue-700">
								<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</button>
					</div>
				{/if}

				{#if pageData.gender}
				<div class="bg-white p-2 pl-3 rounded-full text-xs font-bold mt-4">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block text-gray-400">
						<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
					</svg>
					<span>{pageData.gender?.title}</span>
					<button on:click={() => {searchData.gender = null; onSearch();}}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block text-blue-700">
							<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</button>
				</div>
				{/if}

			</div>
		</div>
</section>

{#if (!loading)}
<div class="py-4 text-sm">Arama sonuçlarına uygun <strong>{data.users.total}</strong> eğitmen bulundu.</div>
{/if}

<div class="grid grid-cols-1 gap-4">

	{#if (loading)}
	<div class="bg-white shadow-md rounded-md p-4 w-full mx-auto">
		<div class="animate-pulse flex space-x-4">
			<div class="rounded-full bg-slate-200 h-10 w-10"></div>
			<div class="flex-1 space-y-6 py-1">
				<div class="h-2 bg-slate-200 rounded"></div>
				<div class="space-y-3">
					<div class="grid grid-cols-3 gap-4">
						<div class="h-2 bg-slate-200 rounded col-span-2"></div>
						<div class="h-2 bg-slate-200 rounded col-span-1"></div>
					</div>
					<div class="h-2 bg-slate-200 rounded"></div>
				</div>
			</div>
		</div>
	</div>
	{:else}
	{#if data.users?.items}
	{#each data.users.items as user}
		<div class="lg:flex lg:flex-row gap-6 bg-white p-6 rounded-lg shadow-md mt-4">
			<MediaCardContainer user="{{...user, showApprovedBadge: true, showIsOnlineBadge: true, showRequest: true, truncateAbout: true}}" />
		</div>
	{/each}
	{/if}
	{/if}

</div>

{#if (data.users.total > 0 && !loading)}
{#if (showMoreLoading)}
<div role="status" class="pt-4 flex justify-center">
	<svg aria-hidden="true" class="w-9 h-9 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
		<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
	</svg>
	<span class="sr-only">Yükleniyor...</span>
</div>
{:else}
<div class="pt-4 text-sm text-center">
	<button on:click={showMore} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1 inline-block">
			<path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
		</svg>
		Daha fazla öğretmen
	</button>
</div>
{/if}
{/if}
