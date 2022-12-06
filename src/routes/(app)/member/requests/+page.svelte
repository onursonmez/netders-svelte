<script>
	import MemberHorizontalNavigation from '/src/components/MemberHorizontalNavigation.svelte'
</script>

<svelte:head>
	<title>Hesabım</title>
</svelte:head>

<MemberHorizontalNavigation />

<div class="bg-white rounded-lg shadow-md mt-4">
	<div class="bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold">Ders Talepleri</div>
	<div class="p-6">
		<div>Herhangi bir özel ders talebiniz bulunmamaktadır.</div>
		<a href="/ozel-ders-talebi-olustur" class="bg-blue-700 px-6 py-2 rounded-full justify-center text-sm text-white mt-4 inline-block">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline-block mr-1">
				<path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
			</svg>
			Ders Talebi Oluştur
		</a>
	</div>
</div>
