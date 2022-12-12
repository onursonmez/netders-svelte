<script>
	import Student2 from '$lib/images/student2.png'
	import { searchLesson } from '/src/repository/lesson'
	import { searchLocation } from '/src/repository/location'
	import RangeSlider from 'svelte-range-slider-pips'
	import Toastify from 'toastify-js'
	import { requestModel } from '/src/models/requestModel'

	let lessons = {items: [], total: 0}
	let locations = {items: [], total: 0}
	let lessonsPage = 1
	let locationsPage = 1
	let currentStep = 1

	let requestData = requestModel

	const getLessons = async () => {
		const moreLessonArea = document.getElementById("moreLessonArea");
		if(requestData.keywordLesson.length > 0) {
			lessons = await searchLesson({keyword: requestData.keywordLesson})
			if(lessons.items.length > 0){
				moreLessonArea.style.display = "block";
			}
		}
	}

	const getLocations = async () => {
		const moreLocationArea = document.getElementById("moreLocationArea");
		if(requestData.keywordLocation.length > 0) {
			locations = await searchLocation({keyword: requestData.keywordLocation, outsideTurkey: requestData.outsideTurkey})
			if(locations.items.length > 0){
				moreLocationArea.style.display = "block";
			}
		}
	}

	let showMoreLesson = async () => {
		const moreLessonArea = document.getElementById("moreLessonArea");
		const moreLessons = await searchLesson({keyword: requestData.keywordLesson, page: ++lessonsPage})
		lessons.items = [...lessons.items, ...moreLessons.items]
		if(moreLessons.items.length === 0){
			moreLessonArea.style.display = "none";
		}
	}

	let showMoreLocation = async () => {
		const moreLocationArea = document.getElementById("moreLocationArea");
		const moreLocations = await searchLocation({keyword: requestData.keywordLocation, page: ++locationsPage})
		locations.items = [...locations.items, ...moreLocations.items]
		if(moreLocations.items.length === 0){
			moreLocationArea.style.display = "none";
		}
	}

	$: if(!requestData.keywordLocation) {
		locations = {items: [], total: 0}
	}
	$: if(!requestData.keywordLesson) {
		lessons = {items: [], total: 0}
	}

	const validateStep = async (step) => {
		if(step === 4)
		{
			if(requestData.placeIds.length === 0){
				Toastify({text: "Nerede ders almak istediğini seçmedin 😔", className: "warning", gravity: "bottom"}).showToast()
			} else if(!requestData.genderId){
				Toastify({text: "Kimden ders almak istediğini seçmedin 😔", className: "warning", gravity: "bottom"}).showToast()
			} else {
				currentStep = 5
			}
		}

		if(step === 5){
			if(!requestData.firstName){
				Toastify({text: "Adını yazmadın 😔", className: "warning", gravity: "bottom"}).showToast()
			} else if(!requestData.lastName){
				Toastify({text: "Soyadını yazmadın 😔", className: "warning", gravity: "bottom"}).showToast()
			} else if(!requestData.email){
				Toastify({text: "E-posta adresini yazmadın 😔", className: "warning", gravity: "bottom"}).showToast()
			} else if(!requestData.phone){
				Toastify({text: "Telefon numaranı yazmadın 😔", className: "warning", gravity: "bottom"}).showToast()
			} else if(!requestData.message){
				Toastify({text: "Almak istediğin ders ile ilgili birşey yazmadın 😔", className: "warning", gravity: "bottom"}).showToast()
			} else if(requestData.message && requestData.message.length < 30){
				Toastify({text: "Almak istediğin ders ile ilgili en az 30 karakter yazmalısın 😔", className: "warning", gravity: "bottom"}).showToast()
			} else {
				//await
				currentStep = 6
			}
		}
	}
</script>

<svelte:head>
	<title>Özel Ders Talebi Oluştur</title>
</svelte:head>

<div class="max-w-2xl w-full mx-auto mt-8 mb-4" class:hidden={currentStep === 1}>
	<h2 class="sr-only">Adımlar</h2>
	<div>
		<div class="overflow-hidden rounded-full bg-white">
			<div class="h-2 rounded-full bg-blue-500 {currentStep >= 2 ? 'w-'+(currentStep-1)+'/5' : ''}" class:w-0={currentStep < 2}></div>
		</div>

		<ol class="mt-4 grid grid-cols-5 text-sm font-medium">
			<li class="flex items-center justify-center" class:text-blue-600={requestData.levelId}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
				</svg>
				<span class="hidden md:block ml-1">Ders</span>
			</li>

			<li class="flex items-center justify-center" class:text-blue-600={requestData.countryId || requestData.countyId}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
					<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
					<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
				</svg>
				<span class="hidden md:block ml-1">Yer</span>
			</li>

			<li class="flex items-center justify-center" class:text-blue-600={requestData.placeIds && requestData.genderId && (requestData.budget || requestData.budgetSecret)}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
					<path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
					<path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
				</svg>
				<span class="hidden md:block ml-1">Kriter</span>
			</li>

			<li class="flex items-center justify-center" class:text-blue-600={requestData.firstName && requestData.lastName && requestData.email && requestData.phone && requestData.message.length > 29}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
					<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
				</svg>

				<span class="hidden md:block ml-1">Bilgiler</span>
			</li>

			<li class="flex items-center justify-center" class:text-blue-600={currentStep === 6}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
					<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
				</svg>

				<span class="hidden md:block ml-1">Bitti</span>
			</li>
		</ol>
	</div>
</div>

<div class="bg-white rounded-lg shadow-md mt-4" class:hidden={currentStep !== 1}>
	<div class="p-6">
		<div class="grid md:grid-cols-4">
			<div class="hidden md:block">
				<img src="{Student2}" alt="" />
			</div>
			<div class="md:col-span-3">
				<h5 class="font-semibold text-2xl">Ders talebi oluştur</h5>
				<p>Almak istediğin özel dersle ilgili doğru öğretmeni bulamıyor veya bulduğun öğretmenlerden emin olamıyorsan, özel ders talebi bırakarak kriterlerine en uygun öğretmenlerin sana ulaşmasını sağlayabilirsin.</p>
				<p class="font-semibold mt-4">Ders talebi bırakmanın avantajları</p>
				<ul class="list-none">
					<li>⭐ Ücretsizdir. Ders talebi bırakmak için herhangi bir ücret ödemezsin.</li>
					<li>⭐ Kolaydır. Sen öğretmen aramazsın, öğretmen sana ulaşır.</li>
					<li>⭐ Seçme hakkın olur. Yalnızca beğendiğin öğretmenle devam edersin.</li>
					<li>⭐ Hızlıdır. Yaklaşık 1-2 saat içerisinde aradığın öğretmeni bulursun.</li>
					<li>⭐ Güvenlidir. Yalnızca kriterlerini tam olarak karşılayan, onaylı öğretmenler sana ulaşabilir.</li>
				</ul>


				<button on:click={() => currentStep = 2} class="bg-blue-700 hover:bg-blue-900 py-2 px-4 text-sm md:text-lg md:py-3 md:px-6 text-center rounded-full justify-center text-white mt-6 block md:inline-block">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1 inline-block">
						<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
					</svg>
					Ders Talebi Oluştur
				</button>
			</div>
		</div>
	</div>
</div>

<div class="bg-white rounded-lg shadow-md mt-2" class:hidden={currentStep !== 2}>
	<div class="p-6 max-w-2xl text-center mx-auto">
		<div class="font-semibold text-lg mb-4">Almak istediğin özel ders nedir?</div>
		<label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Arama</label>
		<div class="relative">
			<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
				<svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
			</div>
			<input autocomplete="off" bind:value="{requestData.keywordLesson}" on:keyup={() => getLessons()} type="text" id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 border border-gray-300 shadow-md rounded-lg border-0" placeholder="Almak istediğin özel dersin adını yazar mısın?">
		</div>

		<p class="text-xs mt-4 text-gray-400">Yukarıdaki alana almak istediğin özel dersin adını yazmalısın.</p>
	</div>

	{#if requestData.keywordLesson.length > 0}
	<div class="grid grid-cols-2 lg:grid-cols-3 gap-4 px-6 pb-6">

		<div class="col-span-2 lg:col-span-3 text-center">
			"<span class="font-semibold">{requestData.keywordLesson}</span>" aramasına uygun <span class="font-semibold">{lessons.total}</span> sonuç bulundu.
		</div>
		{#if lessons.items.length > 0}
		{#each lessons.items as lesson}
			<div class="p-4 border rounded-md hover:border-blue-700 cursor-pointer" on:click={() => requestData.levelId = lesson.id} on:click={() => currentStep = 3}>
				<div class="text-sm text-gray-500">{lesson.subjectTitle}</div>
				<div>{lesson.title}</div>
			</div>
		{/each}
		{/if}
	</div>

	<div class="mb-4 text-sm text-center" id="moreLessonArea">
		<button on:click={showMoreLesson} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1 inline-block">
				<path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
			Daha fazla ders
		</button>
	</div>
	{/if}
</div>

<div class="bg-white rounded-lg shadow-md mt-2" class:hidden={currentStep !== 3}>
	<div class="p-6 max-w-2xl text-center mx-auto">
		<div class="font-semibold text-lg mb-4">Nerede yaşıyorsun?</div>
		<label for="location-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Arama</label>
		<div class="relative">
			<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
				<svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
			</div>
			<input autocomplete="off" bind:value="{requestData.keywordLocation}" on:keyup={() => getLocations()} type="text" id="location-search" class="block p-4 pl-10 w-full text-sm text-gray-900 border border-gray-300 shadow-md rounded-lg border-0" placeholder="Hangi {requestData.outsideTurkey ? 'ülkedesin' : 'şehirdesin'}?">
		</div>

		<p class="text-xs mt-3 text-gray-400">Yukarıdaki alana bulunduğun {requestData.outsideTurkey ? 'ülkenin' : 'şehrin'} ismini yazmalısın.</p>

		<p class="mt-4 text-sm">
			<label>
				<input type="checkbox" bind:checked={requestData.outsideTurkey} on:change={() => requestData.countyId = ''} on:change={() => requestData.countryId = ''} on:change={() => getLocations()} class="border-gray-500 mr-1 rounded-sm ring-0 outline-none" /> Türkiye'de yaşamıyorum
			</label>
		</p>
	</div>

	{#if locations.items.length > 0}
	<div class="grid grid-cols-2 lg:grid-cols-3 gap-4 px-6 pb-6">
		<div class="col-span-2 lg:col-span-3 text-center">
			"<span class="font-semibold">{requestData.keywordLocation}</span>" arama sonucuna uygun <span class="font-semibold">{locations.total}</span> sonuç bulundu.
		</div>
		{#each locations.items as location}
			<div class="p-4 border rounded-md hover:border-blue-700 cursor-pointer" on:click={() => requestData.outsideTurkey ? requestData.countryId = location.id : requestData.countyId = location.id} on:click={() => currentStep = 4}>
				<div class="text-sm text-gray-400">{requestData.outsideTurkey ? 'Ülke' : 'Şehir'}</div>
				<div>{location.title}</div>
			</div>
		{/each}
	</div>
	<div class="mb-4 text-sm text-center" id="moreLocationArea">
		<button on:click={showMoreLocation} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1 inline-block">
				<path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
			Daha fazla lokasyon
		</button>
	</div>
	{/if}
</div>

<div class="bg-white rounded-lg shadow-md mt-2" class:hidden={currentStep !== 4}>

	<div class="p-6 max-w-2xl text-center mx-auto">
		<div class="font-semibold text-lg">Nerede ders almak istersin?</div>
		<p class="text-xs text-gray-400">Birden fazla seçim yapabilirsin.</p>
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4 mt-2">
			<div>
				<input type="checkbox" id="location-own" bind:value={requestData.placeOwn} class="hidden peer" required>
				<label for="location-own" class="inline-flex justify-between items-center py-4 w-full bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">
					<div class="w-full">Kendi evimde</div>
				</label>
			</div>

			<div>
				<input type="checkbox" id="location-teacher" bind:value={requestData.placeTeacher} class="hidden peer" required>
				<label for="location-teacher" class="inline-flex justify-between items-center py-4 w-full bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">
					<div class="w-full">Öğretmen evinde</div>
				</label>
			</div>

			<div>
				<input type="checkbox" id="location-online" bind:value={requestData.placeRemote} class="hidden peer" required>
				<label for="location-online" class="inline-flex justify-between items-center py-4 w-full bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">
					<div class="w-full">Uzaktan, webcam ile</div>
				</label>
			</div>
		</div>

		<div class="mt-4 text-gray-400">-&bull;-</div>

		<div class="font-semibold text-lg mt-2">Kimden ders almak istersin?</div>
		<p class="text-xs text-gray-400">Yalnızca bir seçim yapabilirsin.</p>
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4 mt-2">
			<div>
				<input type="radio" id="teacher-gender-male" bind:group={requestData.genderId} value="1" class="hidden peer" required>
				<label for="teacher-gender-male" class="inline-flex justify-between items-center py-4 w-full bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">
					<div class="w-full">Erkek Öğretmen</div>
				</label>
			</div>

			<div>
				<input type="radio" id="teacher-gender-female" bind:group={requestData.genderId} value="2" class="hidden peer" required>
				<label for="teacher-gender-female" class="inline-flex justify-between items-center py-4 w-full bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">
					<div class="w-full">Kadın Öğretmen</div>
				</label>
			</div>

			<div>
				<input type="radio" id="teacher-gender-none" bind:group={requestData.genderId} value="3" class="hidden peer" required>
				<label for="teacher-gender-none" class="inline-flex justify-between items-center py-4 w-full bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">
					<div class="w-full">Farketmez</div>
				</label>
			</div>
		</div>

		<div class="mt-4 text-gray-400">-&bull;-</div>

		<div class="font-semibold text-lg mt-2">Bir ders için bütçen nedir?</div>
		<p class="text-xs text-gray-400">Bütçenin aralığını seç veya öğretmene belirt.</p>
		{#if !requestData.budgetSecret}
			<RangeSlider min={50} max={700} pips=true step={50} bind:values={requestData.budget} />
			<div class="font-semibold">{requestData.budget[0]} - {requestData.budget[1]} ₺</div>
		{/if}

		<label class="mt-2 block text-sm">
			<input type="checkbox" bind:checked={requestData.budgetSecret} class="border-gray-500 mr-1 rounded-sm ring-0 outline-none" /> Bütçemi öğretmene belirtmek istiyorum
		</label>

		<button on:click={() => validateStep(4)} class="bg-blue-700 hover:bg-blue-900 py-2 px-4 text-sm md:text-lg md:py-3 md:px-6 text-center rounded-full justify-center text-white mt-6 block md:inline-block">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1 inline-block">
				<path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
			</svg>
			Devam et
		</button>
	</div>

</div>

<div class="bg-white rounded-lg shadow-md mt-2" class:hidden={currentStep !== 5}>

	<div class="p-6 max-w-2xl text-center mx-auto">
		<div class="font-semibold text-lg">Son olarak seni biraz tanıyabilir miyim?</div>

		<div class="grid grid-cols-2 gap-4 mt-4">
			<div>
				<span class="text-sm mb-1 block text-gray-500">Adın</span>
				<input type="text" bind:value="{requestData.firstName}" class="w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0" />
			</div>
			<div>
				<span class="text-sm mb-1 block text-gray-500">Soyadın</span>
				<input type="text" bind:value="{requestData.lastName}" class="w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0" />
			</div>
			<div>
				<span class="text-sm mb-1 block text-gray-500">E-posta adresin</span>
				<input type="email" bind:value="{requestData.email}" class="w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0" />
			</div>
			<div>
				<span class="text-sm mb-1 block text-gray-500">Telefon numaran</span>
				<input type="number" bind:value="{requestData.phone}" class="w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0" />
			</div>
			<div class="col-span-2">
				<span class="text-sm mb-1 block text-gray-500">Almak istediğin özel ders ile ilgili mevcut seviyeni, beklentilerini, derse ne zaman başlamak istediğini, okula gidiyorsan kaçıncı sınıfa gittiğini yazabilir misin? Bunların dışında ne kadar detay verirsen o kadar doğru öğretmenle eşleşirsin.</span>
				<textarea minlength="30" rows="5" bind:value="{requestData.message}" class="w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"></textarea>
				<span class="text-xs text-gray-400">Minimum 30 karakter yazmalısın.</span>
			</div>
		</div>

		<button on:click={() => validateStep(5)} class="bg-blue-700 hover:bg-blue-900 py-2 px-4 text-sm md:text-lg md:py-3 md:px-6 text-center rounded-full justify-center text-white mt-4 block md:inline-block">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1 inline-block">
				<path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
			</svg>
			Gönder
		</button>
	</div>

</div>

<div class="bg-white rounded-lg shadow-md mt-2" class:hidden={currentStep !== 6}>

	<div class="p-6 max-w-2xl text-center mx-auto">
		<div class="font-semibold text-lg">İşte bu kadar! Özel ders talebin başarıyla alındı.</div>
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-64 h-64 mx-auto animate-pulse text-green-500">
			<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
		</svg>
		<p>Talebin editörlerimiz tarafından incelenme aşamasındadır.</p>
		<p class="text-gray-400 text-sm">En kısa süre içerisinde bizden alacaksın 😃</p>

		<a href="/" class="bg-blue-700 hover:bg-blue-900 py-2 px-4 text-sm md:text-lg md:py-3 md:px-6 text-center rounded-full justify-center text-white mt-4 block md:inline-block">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1 inline-block">
				<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
			</svg>

			Ana Sayfa
		</a>
	</div>



</div>
