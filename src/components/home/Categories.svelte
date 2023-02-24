<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
</script>


<section>
	<div class="block p-6 rounded-lg shadow-md bg-white">
		<h2 class="mb-4 text-2xl font-bold tracking-tight leading-none lg:text-3xl dark:text-white">Özel ders kategorileri</h2>
		<p class="text-gray-700 text-base mb-4">
			Alanında tecrübeli öğretmenlerden özel ders alarak, ihtiyacın olan doğru eğitimi, en uygun fiyatlarla alabilirsin.
		</p>

		<div class="text-center grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 p-6">
			<a href="/ozel-ders/ilkogretim-takviye" class="text-blue-700 hover:text-blue-900">
				<img src="{import.meta.env.VITE_CDN_URL}home-icon-ilkogretim.svg" alt="İlköğretim Takviye"/>
				<span>İlköğretim Takviye</span>
			</a>
			<a href="/ozel-ders/lise-takviye" class="text-blue-700 hover:text-blue-900">
				<img src="{import.meta.env.VITE_CDN_URL}home-icon-lise.svg" alt="Lise Takviye"/>
				<span>Lise Takviye</span>
			</a>
			<a href="/ozel-ders/universite-takviye" class="text-blue-700 hover:text-blue-900">
				<img src="{import.meta.env.VITE_CDN_URL}home-icon-universite.svg" alt="Üniversite Takviye"/>
				<span>Üniversite Takviye</span>
			</a>
			<a href="/ozel-ders/yabanci-dil" class="text-blue-700 hover:text-blue-900">
				<img src="{import.meta.env.VITE_CDN_URL}home-icon-yabancidil.svg" alt="Yabancı Dil"/>
				<span>Yabancı Dil</span>
			</a>
			<a href="/ozel-ders/bilgisayar" class="text-blue-700 hover:text-blue-900">
				<img src="{import.meta.env.VITE_CDN_URL}home-icon-bilgisayar.svg" alt="Bilgisayar"/>
				<span>Bilgisayar</span>
			</a>
			<a href="/ozel-ders/dans" class="text-blue-700 hover:text-blue-900">
				<img src="{import.meta.env.VITE_CDN_URL}home-icon-dans.svg" alt="Dans"/>
				<span>Dans</span>
			</a>
			<a href="/ozel-ders/direksiyon" class="text-blue-700 hover:text-blue-900">
				<img src="{import.meta.env.VITE_CDN_URL}home-icon-direksiyon.svg" alt="Direksiyon"/>
				<span>Direksiyon</span>
			</a>

			<a href="/ozel-ders/kisisel-gelisim" class="text-blue-700 hover:text-blue-900">
				<img src="{import.meta.env.VITE_CDN_URL}home-icon-kisiselgelisim.svg" alt="Kişisel Gelişim"/>
				<span>Kişisel Gelişim</span>
			</a>
			<a href="/ozel-ders/muzik" class="text-blue-700 hover:text-blue-900">
				<img src="{import.meta.env.VITE_CDN_URL}home-icon-muzik.svg" alt="Müzik"/>
				<span>Müzik</span>
			</a>
			<a href="/ozel-ders/oyun-ve-hobi" class="text-blue-700 hover:text-blue-900">
				<img src="{import.meta.env.VITE_CDN_URL}home-icon-oyunhobi.svg" alt="Oyun & Hobi"/>
				<span>Oyun & Hobi</span>
			</a>
			<a href="/ozel-ders/ozel-egitim" class="text-blue-700 hover:text-blue-900">
				<img src="{import.meta.env.VITE_CDN_URL}home-icon-ozelegitim.svg" alt="Özel Eğitim"/>
				<span>Özel Eğitim</span>
			</a>
			<a href="/ozel-ders/sanat" class="text-blue-700 hover:text-blue-900">
				<img src="{import.meta.env.VITE_CDN_URL}home-icon-sanat.svg" alt="Sanat"/>
				<span>Sanat</span>
			</a>
			<a href="/ozel-ders/sinav-hazirlik" class="text-blue-700 hover:text-blue-900">
				<img src="{import.meta.env.VITE_CDN_URL}home-icon-sinavhazirlik.svg" alt="Sınav Hazırlık"/>
				<span>Sınav Hazırlık</span>
			</a>
			<a href="/ozel-ders/spor" class="text-blue-700 hover:text-blue-900">
				<img src="{import.meta.env.VITE_CDN_URL}home-icon-spor.svg" alt="Spor"/>
				<span>Spor</span>
			</a>
		</div>
	</div>
</section>

<style>
	@import '@splidejs/splide/css/skyblue';

</style>
