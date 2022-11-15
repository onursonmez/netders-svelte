<script>
	import UserHorizontal from '/src/components/user/UserHorizontal.svelte';
	import Modal from '/src/components/Modal.svelte'
	import { getUsers } from '/src/repository/user'
	import { getCities, getCounties } from '/src/repository/location'
	import { getLevels, getSubjects } from '/src/repository/lesson'
	import { teacherSearchParamsStore, teacherItemsStore, teacherTotalStore, teacherGendersStore } from '/src/stores/userStore'
	import { citiesStore, countiesStore } from '/src/stores/locationStore'
	import { subjectsStore, levelsStore, lessonTypesStore } from '/src/stores/lessonStore'
	import { onMount } from "svelte";

	onMount(async () => {
		await getCities()
		await getSubjects()
	})

	let loading = false
	let showMoreLoading = false
	let showSearchModal = false

	let teacherSearchParams = {
		'keyword': '',
		'budget': '',
		'cityObject': undefined,
		'countyObject': undefined,
		'subjectObject': undefined,
		'levelObject': undefined,
		'lessonTypeObject': undefined,
		'genderObject': undefined,
	}

	let showMore = async () => {
		showMoreLoading = true
		$teacherSearchParamsStore.page += 1
		const users = await getUsers()
		$teacherItemsStore = [...$teacherItemsStore, ...users.items]
		showMoreLoading = false
	}

	const onSearch = async () => {
		loading = true
		$teacherSearchParamsStore.page = 1
		$teacherSearchParamsStore = {...$teacherSearchParamsStore, ...teacherSearchParams}
		const users = await getUsers()
		$teacherItemsStore = [...users.items]
		$teacherTotalStore = users.total
		loading = false
		showSearchModal = false

		changeState()
	}

	const updateCounties = async () => {
		if(teacherSearchParams.cityObject?.id){
			const counties = await getCounties({cityId: teacherSearchParams.cityObject.id})
			$countiesStore = counties.items
		} else {
			$teacherSearchParamsStore.countyObject = undefined
			teacherSearchParams.countyObject = undefined
			$countiesStore = []
		}
	}

	const updateLevels = async () => {
		if(teacherSearchParams.subjectObject?.id){
			const levels = await getLevels({subjectId: teacherSearchParams.subjectObject.id})
			$levelsStore = levels.items
		} else {
			$teacherSearchParamsStore.levelObject = undefined
			teacherSearchParams.levelObject = undefined
			$levelsStore = []
		}
	}

	const changeState = () => {
		let finalState = []

		if(teacherSearchParams.cityObject?.slug || teacherSearchParams.countyObject?.slug)
		finalState.push(teacherSearchParams.countyObject?.slug ? teacherSearchParams.countyObject?.slug : teacherSearchParams.cityObject?.slug)

		if(teacherSearchParams.subjectObject?.slug || teacherSearchParams.levelObject?.slug)
		finalState.push(teacherSearchParams.levelObject?.slug ? teacherSearchParams.levelObject?.slug : teacherSearchParams.subjectObject?.slug)

		if(finalState.length > 0){
			window.history.pushState('', '', '/ozel-ders-ilanlari-verenler/' + finalState.join('/'));
		} else {
			window.history.pushState('', '', '/ozel-ders-ilanlari-verenler');
		}
	}

</script>

<svelte:head>
	<title>{$teacherSearchParamsStore.cityObject ? $teacherSearchParamsStore.cityObject?.title + ' ' : ''}{$teacherSearchParamsStore.countyObject ? $teacherSearchParamsStore.countyObject?.title + ' ' : ''}{$teacherSearchParamsStore.subjectObject ? $teacherSearchParamsStore.subjectObject?.title + ' ' : ''}{$teacherSearchParamsStore.levelObject ? $teacherSearchParamsStore.levelObject?.title + ' ' : ''}Özel Ders Veren Öğretmenler</title>
	<meta name="description" content="" />
</svelte:head>

{#if showSearchModal}
<Modal on:close="{() => showSearchModal = false}">
	<h3 slot="header" class="text-xl font-medium text-gray-900 dark:text-white pb-4">Gelişmiş Arama</h3>
	<form class="flex flex-col space-y-6" action="#" on:submit|preventDefault={onSearch}>
		<div class="grid gap-3 md:grid-cols-2 text-sm">
			<label>
				<div class="pb-1">Anahtar Kelime</div>
				<input type="text" name="keyword" bind:value={teacherSearchParams.keyword} class="w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0" />
			</label>
			<label>
				<div class="pb-1">Maksimum Bütçe (₺)</div>
				<input type="text" name="budget" bind:value={teacherSearchParams.budget} placeholder="200" class="w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0" />
			</label>

			<div>
				<span class="pb-1 block">Şehir</span>
				<select name="city" bind:value={teacherSearchParams.cityObject} on:change={updateCounties} class="w-full border border-gray-300 rounded-md">
					<option value="">Lütfen Seçiniz</option>
					{#each $citiesStore as city}
						<option value="{city}">{city.title}</option>
					{/each}
				</select>
			</div>

			<div>
				<span class="pb-1 block">İlçe</span>
				<select name="county" bind:value={teacherSearchParams.countyObject} class="w-full border border-gray-300 rounded-md">
					{#if ($countiesStore.length > 0)}
						<option value="">Lütfen Seçiniz</option>
						{#each $countiesStore as county}
							<option value="{county}">{county.title}</option>
						{/each}
					{:else}
						<option value="">Önce Şehir Seçiniz</option>
					{/if}
				</select>
			</div>

			<div>
				<span class="pb-1 block">Ders</span>
				<select name="city" bind:value={teacherSearchParams.subjectObject} on:change={updateLevels} class="w-full border border-gray-300 rounded-md">
					<option value="">Lütfen Seçiniz</option>
					{#each $subjectsStore as subject}
						<option value="{subject}">{subject.title}</option>
					{/each}
				</select>
			</div>

			<div>
				<span class="pb-1 block">Konu</span>
				<select name="county" bind:value={teacherSearchParams.levelObject} class="w-full border border-gray-300 rounded-md">
					{#if ($levelsStore.length > 0)}
						<option value="">Lütfen Seçiniz</option>
						{#each $levelsStore as level}
							<option value="{level}">{level.title}</option>
						{/each}
					{:else}
						<option value="">Önce Ders Seçiniz</option>
					{/if}
				</select>
			</div>

			<div>
				<span class="pb-1 block">Ders Tipi</span>
				<select name="county" bind:value={teacherSearchParams.lessonTypeObject} class="w-full border border-gray-300 rounded-md">
					<option value="">Lütfen Seçiniz</option>
					{#each $lessonTypesStore as lessonType}
						<option value="{lessonType}">{lessonType.title}</option>
					{/each}
				</select>
			</div>

			<div>
				<span class="pb-1 block">Öğretmen</span>
				<select name="county" bind:value={teacherSearchParams.genderObject} class="w-full border border-gray-300 rounded-md">
					<option value="">Lütfen Seçiniz</option>
					{#each $teacherGendersStore as gender}
						<option value="{gender}">{gender.title}</option>
					{/each}
				</select>
			</div>

		</div>

		<button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2">ARA</button>

	</form>
</Modal>
{/if}

<section class="dark:bg-gray-900 text-center">
	<div class="flex py-6">
		<div class="mx-auto">
			<h1 class="mb-4 text-3xl font-bold text-blue-700 tracking-tight leading-none xl:text-4xl dark:text-white">{$teacherSearchParamsStore.cityObject ? $teacherSearchParamsStore.cityObject?.title : ''} {$teacherSearchParamsStore.countyObject ? $teacherSearchParamsStore.countyObject?.title : ''} {$teacherSearchParamsStore.subjectObject ? $teacherSearchParamsStore.subjectObject?.title : ''} {$teacherSearchParamsStore.levelObject ? $teacherSearchParamsStore.levelObject?.title : ''} <span class="text-gray-800">Özel Ders Veren Öğretmenler</span></h1>
			<p class="mb-6 font-light text-gray-800 lg:text-base xl:text-lg dark:text-gray-400">{$teacherSearchParamsStore.cityObject ? $teacherSearchParamsStore.cityObject?.title : ''} {$teacherSearchParamsStore.countyObject ? $teacherSearchParamsStore.countyObject?.title : ''} özel ders veren öğretmenler tarafından oluşturulan {$teacherSearchParamsStore.subjectObject ? $teacherSearchParamsStore.subjectObject?.title : ''} {$teacherSearchParamsStore.levelObject ? $teacherSearchParamsStore.levelObject?.title : ''} özel ders ilanları.</p>

			<form on:submit|preventDefault={onSearch} autocomplete="off">
				<label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Arama</label>
				<div class="relative">
					<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
						<svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
					</div>
					<input bind:value={teacherSearchParams.keyword} type="text" id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 shadow-md rounded-lg border-0" placeholder="Aradığınız özel ders nedir?">

					{#if (loading)}
						<div role="status" class="absolute right-2.5 bottom-2.5">
							<svg aria-hidden="true" class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
								<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
							</svg>
							<span class="sr-only">Loading...</span>
						</div>
					{:else}
						<button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2">ARA</button>
					{/if}

				</div>
			</form>

			<p class="mt-4 text-sm text-gray-800">veya daha <a href="" class="text-blue-700 hover:text-blue-900 font-bold" on:click="{() => showSearchModal = true}">Detaylı Arama</a> yapabilirsiniz.</p>

			<div class="flex justify-center flex-wrap gap-2">

				{#if $teacherSearchParamsStore.keyword}
					<div class="bg-white p-2 pl-3 rounded-full text-xs font-bold mt-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block text-gray-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        <span>{$teacherSearchParamsStore.keyword}</span>
						<button on:click={() => {teacherSearchParams.keyword = ''; onSearch();}}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block text-blue-700">
								<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</button>
					</div>
				{/if}

				{#if $teacherSearchParamsStore.budget}
					<div class="bg-white p-2 pl-3 rounded-full text-xs font-bold mt-4">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block text-gray-400">
							<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
						</svg>
						<span>{$teacherSearchParamsStore.budget} ₺</span>
						<button on:click={() => {teacherSearchParams.budget = ''; onSearch();}}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block text-blue-700">
								<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</button>
					</div>
				{/if}

				{#if $teacherSearchParamsStore.cityObject}
				<div class="bg-white p-2 pl-3 rounded-full text-xs font-bold mt-4">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block text-gray-400">
						<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
						<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
					</svg>
					<span>{$teacherSearchParamsStore.cityObject?.title}</span>
					<button on:click={() => {teacherSearchParams.cityObject = undefined; $teacherSearchParamsStore.cityObject = undefined; teacherSearchParams.countyObject = undefined; $teacherSearchParamsStore.countyObject = undefined; $countiesStore = []; onSearch();}}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block text-blue-700">
							<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</button>
				</div>
				{/if}

				{#if $teacherSearchParamsStore.countyObject}
					<div class="bg-white p-2 pl-3 rounded-full text-xs font-bold mt-4">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block text-gray-400">
							<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
							<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
						</svg>
						<span>{$teacherSearchParamsStore.countyObject?.title}</span>
						<button on:click={() => {teacherSearchParams.countyObject = undefined; $teacherSearchParamsStore.countyObject = undefined; onSearch();}}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block text-blue-700">
								<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</button>
					</div>
				{/if}

				{#if $teacherSearchParamsStore.subjectObject}
					<div class="bg-white p-2 pl-3 rounded-full text-xs font-bold mt-4">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block text-gray-400">
							<path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
						</svg>
						<span>{$teacherSearchParamsStore.subjectObject?.title}</span>
						<button on:click={() => {teacherSearchParams.subjectObject = undefined; $teacherSearchParamsStore.subjectObject = undefined; teacherSearchParams.levelObject = undefined; $teacherSearchParamsStore.levelObject = undefined; $levelsStore = []; onSearch();}}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block text-blue-700">
								<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</button>
					</div>
				{/if}

				{#if $teacherSearchParamsStore.levelObject}
					<div class="bg-white p-2 pl-3 rounded-full text-xs font-bold mt-4">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block text-gray-400">
							<path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
						</svg>
						<span>{$teacherSearchParamsStore.levelObject?.title}</span>
						<button on:click={() => {teacherSearchParams.levelObject = undefined; $teacherSearchParamsStore.levelObject = undefined; onSearch();}}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block text-blue-700">
								<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</button>
					</div>
				{/if}

				{#if $teacherSearchParamsStore.lessonTypeObject}
					<div class="bg-white p-2 pl-3 rounded-full text-xs font-bold mt-4">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block text-gray-400">
							<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
						</svg>
						<span>{$teacherSearchParamsStore.lessonTypeObject?.title}</span>
						<button on:click={() => {teacherSearchParams.lessonTypeObject = undefined; onSearch();}}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block text-blue-700">
								<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</button>
					</div>
				{/if}

				{#if $teacherSearchParamsStore.genderObject}
				<div class="bg-white p-2 pl-3 rounded-full text-xs font-bold mt-4">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block text-gray-400">
						<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
					</svg>
					<span>{$teacherSearchParamsStore.genderObject?.title}</span>
					<button on:click={() => {teacherSearchParams.genderObject = undefined; onSearch();}}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block text-blue-700">
							<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</button>
				</div>
				{/if}

			</div>
		</div>
	</div>
</section>

{#if (!loading)}
<div class="py-4 text-sm">Arama sonuçlarına uygun <strong>{$teacherTotalStore}</strong> eğitmen bulundu.</div>
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
	{#each $teacherItemsStore as user}
		<UserHorizontal {...user} />
	{/each}
	{/if}

</div>

{#if ($teacherTotalStore > 0 && !loading)}
{#if (showMoreLoading)}
<div role="status" class="py-4 flex justify-center">
	<svg aria-hidden="true" class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
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
