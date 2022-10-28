<script>
	import { Search, Button, Modal, Label, Input, Checkbox, Select } from 'flowbite-svelte'
	import { fade } from 'svelte/transition'

	import User from "../../components/user/User.svelte"
	let formModal = false
	let cities = [
		{value: 1, name: "Hepsi"},
		{value: 2, name: "İstanbul"},
		{value: 3, name: "Ankara"},
	]
	let counties = [
		{value: 1, name: "Hepsi"},
		{value: 2, name: "Adalar"},
		{value: 3, name: "Maltepe"},
	]
	let courseTypes = [
		{value: 1, name: "Hepsi"},
		{value: 2, name: "Yüz Yüze"},
		{value: 3, name: "Online"},
	]
	let subjects = [
		{value: 1, name: "Hepsi"},
		{value: 2, name: "İlköğretim Takviye"},
		{value: 3, name: "Lise Takviye"},
	]
	let levels = [
		{value: 1, name: "Hepsi"},
		{value: 2, name: "Hayat Bilgisi"},
		{value: 3, name: "İngilizce"},
	]
	let teacherGender = [
		{value: 1, name: "Hepsi"},
		{value: 2, name: "Erkek"},
		{value: 3, name: "Kadın"},
	]
</script>

<svelte:head>
	<title>Search</title>
	<meta name="description" content="Search in this app" />
</svelte:head>

<Modal bind:open={formModal} size="md" class="!h-screen">
	<form class="flex flex-col space-y-6" action="/">
		<h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Gelişmiş Arama</h3>
		<div class="grid gap-4 mb-6 md:grid-cols-2">
			<Label class="space-y-1">
				<span>Anahtar Kelime</span>
				<Input type="text" name="keywork" placeholder="20" />
			</Label>
			<Label class="space-y-1">
				<span>Bütçe (₺)</span>
				<Input type="text" name="burget" placeholder="500" />
			</Label>
			<Label class="space-y-1">
				<span>Şehir</span>
				<Select id="select-sm" size="md" items={cities} placeholder="Lütfen seçiniz" />
			</Label>
			<Label class="space-y-1">
				<span>İlçe</span>
				<Select id="select-sm" size="md" items={counties} placeholder="Lütfen seçiniz" disabled />
			</Label>
			<Label class="space-y-1">
				<span>Ders Alanı</span>
				<Select id="select-sm" size="md" items={subjects} placeholder="Lütfen seçiniz" />
			</Label>
			<Label class="space-y-1">
				<span>Konu</span>
				<Select id="select-sm" size="md" items={levels} placeholder="Lütfen seçiniz" disabled />
			</Label>
			<Label class="space-y-1">
				<span>Ders Verme Şekli</span>
				<Select id="select-sm" size="md" items={courseTypes} placeholder="Lütfen seçiniz" />
			</Label>
			<Label class="space-y-1">
				<span>Öğretmen</span>
				<Select id="select-sm" size="md" items={teacherGender} placeholder="Lütfen seçiniz" />
			</Label>
		</div>
		<Button type="submit" class="w-full1">Ara</Button>
	</form>
</Modal>

<section class="dark:bg-gray-900 text-center">
	<div class="flex py-6">
		<div class="mx-auto">
			<h1 class="mb-4 text-3xl font-bold text-blue-700 tracking-tight leading-none xl:text-4xl dark:text-white">İstanbul Matematik <span class="text-gray-800">Özel Ders Verenler</span></h1>
			<p class="mb-6 font-light text-gray-800 lg:text-base xl:text-lg dark:text-gray-400">İstanbul özel ders verenler tarafından oluşturulan Matematik özel ders ilanları aşağıdadır</p>
			<Search class="border-0 shadow-md" placeholder="Ne arıyorsunuz?">
				<Button class="bg-netders">Ara</Button>
			</Search>
			<p class="mt-4 text-sm text-gray-800">veya daha <a href="/" class="text-blue-700 hover:text-blue-900 font-bold" on:click|preventDefault={() => formModal = true}>Detaylı Arama</a> yapabilirsiniz.</p>
			<div class="flex flex-wrap gap-2 mt-4">
				<div class="bg-white p-2 pl-3 rounded-full text-xs font-bold">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block text-gray-400">
						<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
					</svg>
					<span>Yüz yüze</span>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block text-blue-700">
						<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				</div>
				<div class="bg-white p-2 pl-3 rounded-full text-xs font-bold">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block text-gray-400">
						<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
						<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
					</svg>
					<span>İstanbul, Kadıköy</span>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block text-blue-700">
						<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				</div>
				<div class="bg-white p-2 pl-3 rounded-full text-xs font-bold">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block text-gray-400">
						<path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
					</svg>
					<span>İlköğretim Takviye, Yabancı Dil</span>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block text-blue-700">
						<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				</div>
				<div class="bg-white p-2 pl-3 rounded-full text-xs font-bold">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block text-gray-400">
						<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
					</svg>
					<span>200 ₺</span>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block text-blue-700">
						<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				</div>
				<div class="bg-white p-2 pl-3 rounded-full text-xs font-bold">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block text-gray-400">
						<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
					</svg>
					<span>Her ikisi</span>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block text-blue-700">
						<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				</div>
			</div>
		</div>
	</div>
</section>

<div class="py-4 text-sm">Arama sonuçlarına uygun <strong>2310</strong> eğitmen bulundu.</div>

<div class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
	<User />
	<User />
	<User />
	<User />
	<User />
	<User />
	<User />
	<User />
</div>

<div class="py-4 text-sm text-center">
	<Button>
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
			<path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
		</svg>


		Daha fazla öğretmen
	</Button>
</div>
