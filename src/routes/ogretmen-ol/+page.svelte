<script>
	import newTeacherPersonalProfileValidationSuite from '/src/validation/newTeacherPersonalProfileValidation'
	import newTeacherDetailValidationSuite from '/src/validation/newTeacherDetailValidation'

	import IMask from 'imask';
	import { imask } from '@imask/svelte';

	import { gendersStore, lastNamePrivacyStore } from '/src/stores/userStore'
	import { getCountries, getCities, getCounties } from '/src/repository/location'
	import { toast } from '/src/functions/toast'

	import Select from 'svelte-select';
	import { itemFilter } from '/src/utils/selectUtil'

	import {onMount} from "svelte";

	import { enhance } from '$app/forms';

	/** @type {import('./$types').PageData} */
	export let data;

	/** @type {import('./$types').ActionData} */
	export let form;

	let step = 1
	let newTeacherPersonalProfileValidationSuiteResult = newTeacherPersonalProfileValidationSuite.get();
	let newTeacherDetailValidationSuiteResult = newTeacherDetailValidationSuite.get();
	let cities = []
	let counties = []
	let countries = []
	let formState = {};
	formState.outsideTurkey = false

	const usernameMaskOptions = {
		mask: /^[a-z0-9\-]+$/,
		lazy: false
	};

	const phoneMaskOptions = {
		mask: /^0[0-9]*$/,
		lazy: false
	};

	$: if(formState.firstName) {
		let response = []
		let firstNameArray = formState.firstName.split(" ")
		for(let i = 0; i < firstNameArray.length; i++){
			response.push(firstNameArray[i].charAt(0).toUpperCase() + firstNameArray[i].slice(1).toLowerCase())
		}
		formState.firstName = response.join(" ")
	}

	$: if(formState.lastName) {
		let response = []
		let lastNameArray = formState.lastName.split(" ")
		for(let i = 0; i < lastNameArray.length; i++){
			response.push(lastNameArray[i].charAt(0).toUpperCase() + lastNameArray[i].slice(1).toLowerCase())
		}
		formState.lastName = response.join(" ")
	}

	const updateCounties = async () => {
		counties = await getCounties({cityId: formState.city.id})
		formState.county = null
	}

	onMount(async () => {
		countries = await getCountries()
		cities = await getCities()
	})

	function resetNewTeacherPersonalProfileValidationSuite() {
		newTeacherPersonalProfileValidationSuite.reset()
		newTeacherPersonalProfileValidationSuiteResult = newTeacherPersonalProfileValidationSuite.get();
	}

	const handlePersonalInformationChange = name => {
		newTeacherPersonalProfileValidationSuiteResult = newTeacherPersonalProfileValidationSuite(formState, name);

		newTeacherPersonalProfileValidationSuiteResult.done(res => {
			newTeacherPersonalProfileValidationSuiteResult = res;
		});
	};

	const handleDetailChange = name => {
		newTeacherDetailValidationSuiteResult = newTeacherDetailValidationSuite(formState, name);

		newTeacherDetailValidationSuiteResult.done(res => {
			newTeacherDetailValidationSuiteResult = res;
		});
	};

	$: if(form?.errors) {
		Object.entries(form?.errors).forEach(i => {
			toast(i[1], 'warning')
		})
	}


	$: newTeacherPersonalProfileDisabledButton = !newTeacherPersonalProfileValidationSuiteResult.isValid();
	$: newTeacherDetailDisabledButton = !newTeacherDetailValidationSuiteResult.isValid();


</script>

<svelte:head>
	<title>Öğretmen Ol</title>
</svelte:head>

<div class="flex lg:flex-row flex-col gap-4 justify-between mt-4">
	<div class="text-center lg:text-left">
		<h1 class="font-semibold text-xl">Öğretmen Üyeliği</h1>
	</div>
	<div class="text-center lg:mx-0 mx-auto">
		<div class="flex gap-6 text-xs">
			<div class="flex gap-2 items-center" class:opacity-40={step !== 1}>
				<div class="rounded-full bg-blue-600 text-white w-8 h-8 flex items-center">
					<div class="text-center mx-auto">1</div>
				</div>
				<div class="font-semibold">Kişisel Bilgiler</div>
			</div>
			<div class="flex gap-2 items-center" class:opacity-40={step !== 2}>
				<div class="rounded-full bg-blue-600 text-white w-8 h-8 flex items-center">
					<div class="text-center mx-auto">2</div>
				</div>
				<div class="font-semibold">Detaylı Bilgiler</div>
			</div>
		</div>
	</div>
</div>

<div class="bg-white rounded-lg shadow-md p-4 mt-4" class:hidden={step !== 1}>
	<div class="max-w-2xl mx-auto">
		<div class="font-semibold text-center text-lg">Kişisel Bilgiler</div>

		<div class="grid lg:grid-cols-2 gap-6 mt-6">
			<div>
				<span class="text-sm mb-1 block text-gray-500">Adın</span>
				<input bind:value={formState.firstName} on:input={handlePersonalInformationChange} type="text" class="w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0" />
				{#if newTeacherPersonalProfileValidationSuiteResult.getErrors('firstName')}
					<span class="text-xs text-red-500">{newTeacherPersonalProfileValidationSuiteResult.getErrors('firstName')}</span>
				{/if}
			</div>
			<div>
				<span class="text-sm mb-1 block text-gray-500">Soyadın</span>
				<input bind:value={formState.lastName} on:input={handlePersonalInformationChange} type="text" class="w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0" />
				{#if newTeacherPersonalProfileValidationSuiteResult.getErrors('lastName')}
					<span class="text-xs text-red-500">{newTeacherPersonalProfileValidationSuiteResult.getErrors('lastName')}</span>
				{/if}
			</div>
			<div>
				<span class="text-sm mb-1 block text-gray-500">E-posta adresin</span>
				<input bind:value={formState.email} on:input={handlePersonalInformationChange} type="email" class="w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0" />
				{#if newTeacherPersonalProfileValidationSuiteResult.getErrors('email')}
					<span class="text-xs text-red-500">{newTeacherPersonalProfileValidationSuiteResult.getErrors('email')}</span>
				{/if}
			</div>
			<div>
				<span class="text-sm mb-1 block text-gray-500">Telefon numaran</span>
				<input bind:value={formState.phone} on:input={handlePersonalInformationChange} use:imask={phoneMaskOptions} type="text" class="w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0" />
				{#if newTeacherPersonalProfileValidationSuiteResult.getErrors('phone')}
					<span class="text-xs text-red-500">{newTeacherPersonalProfileValidationSuiteResult.getErrors('phone')}</span>
				{/if}
			</div>
			<div>
				<span class="text-sm mb-1 block text-gray-500">Cinsiyetin</span>
				<Select bind:value={formState.gender} on:select={handlePersonalInformationChange} items={$gendersStore} placeholder="Seç" noOptionsMessage="Sonuç bulunamadı..." optionIdentifier="id" labelIdentifier="title" {itemFilter} />
				{#if newTeacherPersonalProfileValidationSuiteResult.getErrors('gender')}
					<span class="text-xs text-red-500">{newTeacherPersonalProfileValidationSuiteResult.getErrors('gender')}</span>
				{/if}
			</div>
			<div>
				<span class="text-sm mb-1 block text-gray-500">Soyadı gizliliği</span>
				<Select bind:value={formState.privacyLastName} on:select={handlePersonalInformationChange} items={$lastNamePrivacyStore} placeholder="Seç" noOptionsMessage="Sonuç bulunamadı..." optionIdentifier="id" labelIdentifier="title" {itemFilter} />
				{#if newTeacherPersonalProfileValidationSuiteResult.getErrors('privacyLastName')}
					<span class="text-xs text-red-500">{newTeacherPersonalProfileValidationSuiteResult.getErrors('privacyLastName')}</span>
				{/if}
			</div>
			{#if !formState.outsideTurkey}
			<div>
				<span class="text-sm mb-1 block text-gray-500">Şehir</span>
				<Select bind:value={formState.city} items={cities} placeholder="Seç" noOptionsMessage="Sonuç bulunamadı..." optionIdentifier="id" labelIdentifier="title" {itemFilter} on:select={updateCounties} on:select={handlePersonalInformationChange} />
				{#if newTeacherPersonalProfileValidationSuiteResult.getErrors('city')}
					<span class="text-xs text-red-500">{newTeacherPersonalProfileValidationSuiteResult.getErrors('city')}</span>
				{/if}
			</div>
			<div>
				<span class="text-sm mb-1 block text-gray-500">İlçe</span>
				<Select bind:value={formState.county} items={counties} on:select={handlePersonalInformationChange} placeholder="Seç" noOptionsMessage="Sonuç bulunamadı..." optionIdentifier="id" labelIdentifier="title" {itemFilter} />
				{#if newTeacherPersonalProfileValidationSuiteResult.getErrors('county')}
					<span class="text-xs text-red-500">{newTeacherPersonalProfileValidationSuiteResult.getErrors('county')}</span>
				{/if}
			</div>
			{:else}
			<div>
				<span class="text-sm mb-1 block text-gray-500">Ülke</span>
				<Select bind:value={formState.country} items={countries} on:select={handlePersonalInformationChange} placeholder="Seç" noOptionsMessage="Sonuç bulunamadı..." optionIdentifier="id" labelIdentifier="title" {itemFilter} />
				{#if newTeacherPersonalProfileValidationSuiteResult.getErrors('country')}
					<span class="text-xs text-red-500">{newTeacherPersonalProfileValidationSuiteResult.getErrors('country')}</span>
				{/if}
			</div>
			{/if}

			<div class="lg:col-span-2">
				<label>
					<input type="checkbox" bind:checked={formState.outsideTurkey} on:change={resetNewTeacherPersonalProfileValidationSuite} on:change={handlePersonalInformationChange} class="rounded-sm ring-0 outline-none" /> <span class="text-gray-500 text-sm">Türkiye'de yaşamıyorum</span>
				</label>
			</div>

			<div class="lg:col-span-2 text-center">
				<button disabled={newTeacherPersonalProfileDisabledButton} type="button" on:click={() => step = 2} class="disabled:bg-gray-400 bg-blue-700 hover:bg-blue-900 py-2 px-4 text-sm md:text-lg md:py-3 md:px-6 text-center rounded-full justify-center text-white md:inline-block">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1 inline-block">
						<path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
					</svg>
					Devam
				</button>
			</div>

		</div>
	</div>
</div>

<div class="bg-white rounded-lg shadow-md p-4 mt-4" class:hidden={step !== 2}>
	<div class="max-w-2xl mx-auto">
		<div class="font-semibold text-center text-lg">Detaylı Bilgiler</div>

		<div class="grid grid-cols-1 gap-6 mt-6">
			<div>
				<span class="text-sm mb-1 block text-gray-500">Profil başlığın</span>
				<input bind:value={formState.title} on:input={handleDetailChange} type="text" class="w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0" />
				<span class="text-xs block mt-2 text-gray-400">Uzmanından Matematik Dersi, İngilizce Öğrenmek Artık Çok Kolay, Şan Hocasından Piyano Dersi örnekleri gibi seni ön plana çıkartacak çarpıcı bir başlık girmelisin.</span>
				{#if newTeacherDetailValidationSuiteResult.getErrors('title')}
					<span class="text-xs text-red-500">{newTeacherDetailValidationSuiteResult.getErrors('title')}</span>
				{/if}
			</div>
			<div>
				<span class="text-sm mb-1 block text-gray-500">Hakkında</span>
				<textarea bind:value={formState.about} on:input={handleDetailChange} maxlength="500" rows="5" class="w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"></textarea>
				<span class="text-xs block mt-1 text-gray-400">Kendin ve eğitiminle ilgili minimum 100 karakter bilgi girmelisin.</span>
				{#if newTeacherDetailValidationSuiteResult.getErrors('about')}
					<span class="text-xs text-red-500">{newTeacherDetailValidationSuiteResult.getErrors('about')}</span>
				{/if}
			</div>

			<div>
				<span class="text-sm mb-1 block text-gray-500">Netders profil adresin</span>
				<div class="flex flex-row items-center">
					<div class="rounded-l-md border-t border-l border-b bg-gray-50 h-[42px] px-3 pt-2 border-gray-300">netders.com</div>
					<div class="grow"><input bind:value={formState.username} on:input={handleDetailChange} use:imask={usernameMaskOptions} type="text" class="w-full rounded-r-md border-t border-r border-b border-gray-300 hover:border-gray-300 focus:border-gray-300 focus:ring-0" /></div>
				</div>
				<span class="text-xs block mt-2 text-gray-400">Profil sayfana özel bir isim belirleyebilirsin. Zorunlu değildir.</span>
				{#if newTeacherDetailValidationSuiteResult.getErrors('username')}
					<span class="text-xs text-red-500">{newTeacherDetailValidationSuiteResult.getErrors('username')}</span>
				{/if}
			</div>

			<div class="text-center">
				<form use:enhance={({ data }) => {

					for (const key in formState) {

						let array = ['privacyLastName', 'city', 'county', 'country', 'gender']

						if(array.includes(key)){
							data.set(key, formState[key].id)
							continue
						}

						data.set(key, formState[key])
					}

					return ({ update, result }) => {
						if (result.type === 'success') {
							toast("Bilgilerin başarıyla kaydedildi!", "success")
						}
						update({ reset: false });
					};
				}}
					  method="POST"
				>
					<button type="button" on:click={() => step = 1} class="mr-4 py-2 px-4 text-sm md:text-lg md:py-3 md:px-6 text-center rounded-full justify-center text-blue-700 md:inline-block">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1 inline-block">
							<path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
						</svg>
						Geri
					</button>

					<button disabled={newTeacherDetailDisabledButton} class="disabled:bg-gray-400 bg-blue-700 hover:bg-blue-900 py-2 px-4 text-sm md:text-lg md:py-3 md:px-6 text-center rounded-full justify-center text-white md:inline-block">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1 inline-block">
							<path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
						</svg>
						Kaydet
					</button>
				</form>
			</div>
		</div>
	</div>
</div>
