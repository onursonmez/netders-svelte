<script>
	import { Search, Button, Modal, Label, Input, Checkbox, Select } from 'flowbite-svelte'
	import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
	import { Tooltip } from 'flowbite-svelte';

	let style = 'dark';

	import User from "../../components/user/User.svelte"
	let formModal = false

</script>

<svelte:head>
	<title>Detail</title>
	<meta name="description" content="Detail in this app" />
</svelte:head>


<div class="lg:flex lg:flex-row gap-6 bg-white p-6 rounded-lg shadow-md">
	<div class="lg:basis-2/12 mb-4 lg:mb-0">
		<img src="https://netders.com/users/17426-1647602290.jpg" alt="user1" class="rounded-full" />
		<div class="flex items-center justify-center gap-2 mt-4">

			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
				<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
			<Tooltip style="custom" class="text-xs bg-blue-700 border-blue-700 text-white transition-opacity ease-in duration-700 opacity-100">Onaylı öğretmen</Tooltip>

			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
				<path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
			</svg>
			<Tooltip style="custom" class="text-xs bg-blue-700 border-blue-700 text-white">9 ay önce üye oldu</Tooltip>

			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
				<path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
			</svg>
			<Tooltip style="custom" class="text-xs bg-blue-700 border-blue-700 text-white">Çevrimiçi</Tooltip>

			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
				<path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
			</svg>
			<Tooltip style="custom" class="text-xs bg-blue-700 border-blue-700 text-white">Paylaş</Tooltip>
		</div>
	</div>
	<div class="lg:basis-8/12 mb-4 lg:mb-0">
		<h1 class="mb-2 text-2xl font-bold text-blue-700 tracking-tight leading-none xl:text-3xl dark:text-white">Büşra Öğretmen</h1>
		<p class="mb-2 font-semibold text-gray-800 lg:text-base xl:text-lg dark:text-gray-400">İlkokuldan lise düzeyine kadar tüm dersler</p>
		<div class="lg:flex lg:flex-row lg:justify-between mb-3 text-gray-500 text-sm">
			<p class="flex mb-1">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
					<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
				</svg>
				70 ₺ / Saat
			</p>
			<p class="flex mb-1">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
					<path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
				</svg>
				29 Yaşında
			</p>
			<p class="flex">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
					<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
					<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
				</svg>
				Ankara, Çankaya
			</p>
		</div>
		<p class="text-sm text-justify leading-relaxed">Dokuz Eylül Üniversitesi Şehir ve Bölge Planlama bölümünü okumakta idim. 3. sınıfın ikinci döneminde özel sebeplerden ötürü bırakmak zorunda kaldım. Bambaşka bir bölüm olan yine Dokuz Eylül Üniversitesi'ndeki Radyoterapi bölümünün 2021 mezunuyum :) Aynı zamanda Webhelp bünyesinde N11.com lojistik biriminde çalışmaktayım. Öğrencilerim ile ilk dersimde tanışarak nasıl bir yol izleyeceğime karar vermek, öğrencilerime hangi öğrenme tarzının daha iyi ve verimli olacağını keşfetmek en hoşuma giden aynı zamanda da en önemli bulduğum kısımdır.</p>
	</div>
	<div class="lg:basis-2/12">
		<a href="/" class="bg-blue-700 p-2 rounded-full text-center text-sm flex text-white">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
				<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
			</svg>
			Ders Talebinde Bulun
		</a>
		<span class="text-xs text-center block mt-1 mb-4 text-gray-400">Cevaplama süresi 1 saat</span>

		<div class="flex flex-row items-center gap-2 mb-4">
			<div>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-700">
					<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
				</svg>
			</div>
			<div>
				<span class="text-blue-700 block">+90554XXXXXXX</span>
				<span class="text-xs block text-gray-400">Numarayı görüntüle</span>
			</div>
		</div>

		<div class="flex flex-row items-center gap-2 mb-4">
			<div>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-700">
					<path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
				</svg>
			</div>
			<div>
				<span class="text-blue-700 block">Yorum Yap</span>
				<span class="text-xs block text-gray-400">Öğretmeni değerlendir</span>
			</div>
		</div>

		<div class="flex flex-row items-center gap-2">
			<div>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-700">
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
				</svg>
			</div>
			<div>
				<span class="text-blue-700 block">Şikayet Et</span>
				<span class="text-xs block text-gray-400">İhlal bildir</span>
			</div>
		</div>
	</div>
</div>

<div class="bg-white rounded-lg shadow-md mt-4">
	<div class="bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold">Ders Ücretleri</div>
	<div class="p-6">
		<table class="table-fixed w-full text-left text-sm lg:text-base">
			<thead>
			<tr>
				<th class="pb-2 font-semibold">Ders Adı</th>
				<th class="font-semibold">Yüz Yüze Ders</th>
				<th class="font-semibold">Canlı Ders</th>
			</tr>
			</thead>
			<tbody>
			<tr class="border-t border-gray-200">
				<td class="py-2">Lise Takviye - Fizik</td>
				<td>60.00 ₺ / Saat</td>
				<td>50.00 ₺ / Saat</td>
			</tr>
			<tr class="border-t border-gray-200">
				<td class="py-2">Yabancı Dil - İngilizce</td>
				<td>70.00 ₺ / Saat</td>
				<td>60.00 ₺ / Saat</td>
			</tr>
			</tbody>
		</table>
	</div>
</div>

<div class="bg-white rounded-lg shadow-md mt-4">
	<div class="bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold">Yüz Yüze Ders Verme Tercihleri</div>
	<div class="p-6 text-sm lg:text-base">
		<div class="lg:flex lg:gap-2 justify-between">
			<div class="mb-4 lg:mb-0">
				<span class="font-semibold mb-1 block">Ders Türü</span>
				<ul>
					<li class="flex leading-relaxed">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
						Birebir Ders
					</li>
					<li class="flex text-gray-300">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
						Grup Dersi
					</li>
				</ul>
			</div>

			<div class="mb-4 lg:mb-0">
				<span class="font-semibold mb-1 block">Ders Verdiği Öğrenci</span>
				<ul>
					<li class="flex leading-relaxed">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
						Erkek
					</li>
					<li class="flex text-gray-300">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
						Kadın
					</li>
				</ul>
			</div>

			<div class="mb-4 lg:mb-0">
				<span class="font-semibold mb-1 block">Ders Verdiği Mekan</span>
				<ul>
					<li class="flex leading-relaxed">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
						Öğrenci Evinde
					</li>
					<li class="flex text-gray-300">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
						Eğitmen Evinde
					</li>
					<li class="flex leading-relaxed">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
						Etüt Merkezi
					</li>
					<li class="flex text-gray-300">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
						Kütüphane
					</li>
					<li class="flex text-gray-300">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
						Diğer
					</li>
				</ul>
			</div>

			<div class="mb-4 lg:mb-0">
				<span class="font-semibold mb-1 block">Ders Verdiği Zaman</span>
				<ul>
					<li class="flex leading-relaxed">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
						Hafta içi gündüz
					</li>
					<li class="flex text-gray-300">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
						Hafta içi akşam
					</li>
					<li class="flex leading-relaxed">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
						Haftasonu gündüz
					</li>
					<li class="flex text-gray-300">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
						Haftasonu akşam
					</li>
				</ul>
			</div>

			<div>
				<span class="font-semibold mb-1 block">Hizmet</span>
				<ul>
					<li class="flex leading-relaxed">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
						Ödev Yardımı
					</li>
					<li class="flex text-gray-300">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
						Tez Yardımı
					</li>
					<li class="flex leading-relaxed">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
						</svg>
						Proje Yardımı
					</li>
					<li class="flex text-gray-300">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
						Eğitim Koçluğu
					</li>
					<li class="flex text-gray-300">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
						Yaşam Koçluğu
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>

<div class="bg-white rounded-lg shadow-md mt-4">
	<div class="bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold">Ders Verdiği Bölgeler</div>
	<div class="p-6">
		<div>
			<span class="font-semibold">İstanbul:</span> Bahçelievler, Yenibosna, Küçükçekmece, Başakşehir
		</div>
		<div>
			<span class="font-semibold">Ankara:</span> Bahçelievler, Yenibosna, Küçükçekmece, Başakşehir
		</div>
	</div>
</div>

<div class="bg-white rounded-lg shadow-md mt-4">
	<div class="bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold">Referanslar</div>
	<div class="p-6">
		Ümitköy Anadolu Lisesi-Stajyer 75. Yıl Anadolu Lisesi-Stajyer
	</div>
</div>
