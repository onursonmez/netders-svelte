<script>
	import { Search, Button } from 'flowbite-svelte'
	import student from '$lib/images/student.png'
</script>

<section class="dark:bg-gray-900">
	<div class="grid lg:grid-cols-12 py-6">
		<div class="mr-auto place-self-center lg:col-span-8">
			<h1 class="mb-4 text-3xl font-bold text-blue-700 tracking-tight leading-none xl:text-4xl dark:text-white">Özel ders almak hiç bu kadar kolay olmamıştı!</h1>
			<p class="mb-6 font-light text-gray-800 lg:text-base xl:text-lg dark:text-gray-400">Doğrulanmış profile sahip, alanında <strong class="font-semibold">uzman öğretmenlerden</strong> online veya yüz yüze özel ders alın. Hem de Netders.com güvencesiyle!</p>
			<Search class="border-0 shadow-md" placeholder="Aradığınız özel ders nedir?">
				<Button class="bg-netders">Öğretmen ara</Button>
			</Search>
			<p class="text-xs text-gray-400 pt-2">Örneğin; matematik, ingilizce, fizik gibi, almak istediğiniz özel dersin adını yukarıdaki arama alanına girip, öğretmen ara tuşuna basınız.</p>
		</div>
		<div class="hidden lg:col-span-1 lg:flex">
		</div>
		<div class="hidden lg:col-span-3 lg:flex">
			<img src="{student}">
		</div>
	</div>
</section>

<style>

</style>
