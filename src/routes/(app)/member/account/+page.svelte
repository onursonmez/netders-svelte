<script>
	import MemberHorizontalNavigation from '/src/components/MemberHorizontalNavigation.svelte'
	import { gendersStore, userStore } from '/src/stores/userStore'
	import {onMount} from "svelte";
	import {goto} from "$app/navigation";
	import { updateUser } from '/src/repository/user'

	export let data

	const handleAccountSubmit = async () => {
		await updateUser($userStore)
	}

	onMount(() => {
		if($userStore === null){
			goto('/auth/login')
		}
	})
</script>

<svelte:head>
	<title>Özel Ders Talebi Oluştur</title>
</svelte:head>

<MemberHorizontalNavigation />

<div class="bg-white rounded-lg shadow-md mt-4">

	<div class="p-6 max-w-2xl text-center mx-auto">
		<div class="font-semibold text-lg">Kişisel bilgiler</div>

		<div class="grid grid-cols-2 gap-4 mt-4">
			<div>
				<span class="text-sm mb-1 block text-gray-500">Adın</span>
				<input type="text" bind:value="{$userStore.firstName}" class="w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0" />
			</div>
			<div>
				<span class="text-sm mb-1 block text-gray-500">Soyadın</span>
				<input type="text" bind:value="{$userStore.lastName}" class="w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0" />
			</div>
			<div>
				<span class="text-sm mb-1 block text-gray-500">Telefon numaran</span>
				<input type="number" bind:value="{$userStore.phone}" class="w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0" />
			</div>
			<div>
				<span class="text-sm mb-1 block text-gray-500">Cinsiyetin</span>
				<select bind:value="{$userStore.genderId}" class="w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0">
					<option value="">Seçim yapmadın</option>
					{#each $gendersStore as gender}
						<option value="{gender.id}">{gender.title}</option>
					{/each}
				</select>
			</div>
		</div>

		<button on:click={() => handleAccountSubmit()} class="bg-blue-700 hover:bg-blue-900 px-6 py-2 rounded-full text-white mt-4">
			<span>Kaydet</span>
		</button>
	</div>

</div>
