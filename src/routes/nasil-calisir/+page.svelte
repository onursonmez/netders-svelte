<svelte:head>
	<title>Nasıl Çalışır?</title>
</svelte:head>

<div class="bg-white rounded-lg shadow-md mt-4">
	<div class="bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold">Nasıl Çalışır?</div>
	<div class="hidden lg:block p-6">
		<p class="text-2xl font-semibold">Öğretmen ara, öğretmen seç, randevulaş ve hemen derse başla!</p>
		<p class="text-lg mt-2">Netders.com dört kolay adımda özel ders alma sürecinde sana birçok kolaylık sağlıyor. Netders.com'da onaylı binlerce uzman öğretmen özel ders vermek için talep oluşturmanı bekliyor.</p>
	</div>
	<div class="p-6">
		<div class="grid grid-cols-2 gap-4 items-center">
			<div>
				<h2 class="font-semibold lg:text-[40px] text-blue-700">Öğretmen ara</h2>
				<p class="lg:text-xl">Netders.com'un gelişmiş özelliklerdeki öğretmen arama bölümü ile almak istediğin özel dersi ara.</p>
			</div>
			<div>
				<img src="{import.meta.env.VITE_CDN_URL}nasil-calisir-1.png" alt="Öğretmen ara" />
			</div>
			<div>
				<img src="{import.meta.env.VITE_CDN_URL}nasil-calisir-2.png" alt="Öğretmen seç" />
			</div>
			<div>
				<h2 class="font-semibold lg:text-[40px] text-blue-700">Öğretmen seç</h2>
				<p class="lg:text-xl">Aradığın özel ders kriterlerine uygun öğretmenleri inceleyerek, beğendiğin öğretmene ders talebi oluştur.</p>
			</div>
			<div>
				<h2 class="font-semibold lg:text-[40px] text-blue-700">Randevulaş</h2>
				<p class="lg:text-xl">Ders almayı kabul ettiğin öğretmen ile deneme dersi randevusu oluştur.</p>
			</div>
			<div>
				<img src="{import.meta.env.VITE_CDN_URL}nasil-calisir-3.png" alt="Randevulaş" />
			</div>
			<div>
				<img src="{import.meta.env.VITE_CDN_URL}nasil-calisir-4.png" alt="Ders başla" />
			</div>
			<div>
				<h2 class="font-semibold lg:text-[40px] text-blue-700">Derse başla</h2>
				<p class="lg:text-xl">Öğretmenin ders verme şeklini sevdiysen onunla devam et veya talebindeki başka bir öğretmeni dene.</p>
			</div>
		</div>
		<div class="mx-auto text-center">
			<a href="/ozel-ders-ilanlari-verenler" class="bg-blue-700 hover:bg-blue-900 py-2 px-4 text-sm md:text-lg md:py-3 md:px-6 text-center rounded-full justify-center text-white block md:inline-block">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 mr-1 inline-block">
					<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
				</svg>
				Öğretmen aramaya başla
			</a>
		</div>
	</div>
</div>
