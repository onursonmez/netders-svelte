<script>
	import student from '$lib/images/student.png?format=webp&srcset'
	import {teacherSearchParamsStore} from "../../stores/userStore"
	import { goto } from '$app/navigation';

	let keyword

	const onSearch = () => {
		if(keyword){
			$teacherSearchParamsStore.keyword = keyword
			goto('/ozel-ders-ilanlari-verenler?keyword=' + keyword)
		}
	}
</script>

<section class="dark:bg-gray-900">
	<div class="grid lg:grid-cols-12 py-6">
		<div class="mr-auto place-self-center lg:col-span-8">
			<h1 class="mb-4 text-3xl font-bold text-blue-700 tracking-tight leading-none xl:text-4xl dark:text-white">Özel ders almak hiç bu kadar kolay olmamıştı!</h1>
			<p class="mb-6 font-light text-gray-800 lg:text-base xl:text-lg dark:text-gray-400">Doğrulanmış profile sahip, alanında <strong class="font-semibold">uzman öğretmenlerden</strong> online veya yüz yüze özel ders alın. Hem de Netders.com güvencesiyle!</p>

			<form autocomplete="off" on:submit|preventDefault={onSearch}>
				<div class="relative">
					<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
						<svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
					</div>
					<input type="text" bind:value={keyword} id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 shadow-md rounded-lg border-0" placeholder="Aradığınız özel ders nedir?">
					<button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2">ARA</button>
				</div>
			</form>

			<p class="text-xs text-gray-400 pt-2">Örneğin; matematik, ingilizce, fizik gibi, almak istediğiniz özel dersin adını yukarıdaki arama alanına girip, ara tuşuna basınız.</p>
		</div>
		<div class="hidden lg:col-span-1 lg:flex">
		</div>
		<div class="hidden lg:col-span-3 lg:flex">
			<img srcset="{student}" type="image/webp" alt="">
		</div>
	</div>
</section>

<style>

</style>
