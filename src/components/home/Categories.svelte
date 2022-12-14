<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
</script>


<section class="dark:bg-gray-900">
	<div class="block p-6 rounded-lg shadow-md bg-white">
		<h2 class="mb-4 text-2xl font-bold tracking-tight leading-none lg:text-3xl dark:text-white">Özel ders kategorileri</h2>
		<p class="text-gray-700 text-base mb-4">
			Alanında tecrübeli öğretmenlerden özel ders alarak, ihtiyacın olan doğru eğitimi, en uygun fiyatlarla alabilirsin.
		</p>

		<div>
			<Splide options={ {
				arrows: true,
				gap: '1em',
				type   : 'loop',
				interval: 3000,
				autoplay: true,
				perPage: 6,
				updateOnMove : true,
				breakpoints: {
					1024: {
					  perPage: 3,

					},
					767: {
					  perPage: 2,

					},
					640: {
					  perPage: 1,

					},
				  },
				perMove: 1,
				pagination: false,
			  } } aria-label="Kategoriler">
				<SplideSlide class="text-center">
					<a href="/ozel-ders-ilanlari-verenler/yabanci-dil" class="text-blue-700 hover:text-blue-900">
						<img src="{import.meta.env.VITE_CDN_URL}"/home-icon-yabancidil.svg" alt="Yabancı Dil"/>
						<span>Yabancı Dil</span>
					</a>
				</SplideSlide>
				<SplideSlide class="text-center">
					<a href="/ozel-ders-ilanlari-verenler/bilgisayar" class="text-blue-700 hover:text-blue-900">
						<img src="{import.meta.env.VITE_CDN_URL}/home-icon-bilgisayar.svg" alt="Bilgisayar"/>
						<span>Bilgisayar</span>
					</a>
				</SplideSlide>
				<SplideSlide class="text-center">
					<a href="/ozel-ders-ilanlari-verenler/dans" class="text-blue-700 hover:text-blue-900">
						<img src="{import.meta.env.VITE_CDN_URL}/home-icon-dans.svg" alt="Dans"/>
						<span>Dans</span>
					</a>
				</SplideSlide>
				<SplideSlide class="text-center">
					<a href="/ozel-ders-ilanlari-verenler/direksiyon" class="text-blue-700 hover:text-blue-900">
						<img src="{import.meta.env.VITE_CDN_URL}/home-icon-direksiyon.svg" alt="Direksiyon"/>
						<span>Direksiyon</span>
					</a>
				</SplideSlide>
				<SplideSlide class="text-center">
					<a href="/ozel-ders-ilanlari-verenler/ilkogretim-takviye" class="text-blue-700 hover:text-blue-900">
						<img src="{import.meta.env.VITE_CDN_URL}/home-icon-ilkogretim.svg" alt="İlköğretim Takviye"/>
						<span>İlköğretim Takviye</span>
					</a>
				</SplideSlide>
				<SplideSlide class="text-center">
					<a href="/ozel-ders-ilanlari-verenler/kisisel-gelisim" class="text-blue-700 hover:text-blue-900">
						<img src="{import.meta.env.VITE_CDN_URL}/home-icon-kisiselgelisim.svg" alt="Kişisel Gelişim"/>
						<span>Kişisel Gelişim</span>
					</a>
				</SplideSlide>
				<SplideSlide class="text-center">
					<a href="/ozel-ders-ilanlari-verenler/lise-takviye" class="text-blue-700 hover:text-blue-900">
						<img src="{import.meta.env.VITE_CDN_URL}/home-icon-lise.svg" alt="Lise Takviye"/>
						<span>Lise Takviye</span>
					</a>
				</SplideSlide>
				<SplideSlide class="text-center">
					<a href="/ozel-ders-ilanlari-verenler/universite-takviye" class="text-blue-700 hover:text-blue-900">
						<img src="{import.meta.env.VITE_CDN_URL}/home-icon-universite.svg" alt="Üniversite Takviye"/>
						<span>Üniversite Takviye</span>
					</a>
				</SplideSlide>
				<SplideSlide class="text-center">
					<a href="/ozel-ders-ilanlari-verenler/muzik" class="text-blue-700 hover:text-blue-900">
						<img src="{import.meta.env.VITE_CDN_URL}/home-icon-muzik.svg" alt="Müzik"/>
						<span>Müzik</span>
					</a>
				</SplideSlide>
				<SplideSlide class="text-center">
					<a href="/ozel-ders-ilanlari-verenler/oyun-ve-hobi" class="text-blue-700 hover:text-blue-900">
						<img src="{import.meta.env.VITE_CDN_URL}/home-icon-oyunhobi.svg" alt="Oyun & Hobi"/>
						<span>Oyun & Hobi</span>
					</a>
				</SplideSlide>
				<SplideSlide class="text-center">
					<a href="/ozel-ders-ilanlari-verenler/ozel-egitim" class="text-blue-700 hover:text-blue-900">
						<img src="{import.meta.env.VITE_CDN_URL}/home-icon-ozelegitim.svg" alt="Özel Eğitim"/>
						<span>Özel Eğitim</span>
					</a>
				</SplideSlide>
				<SplideSlide class="text-center">
					<a href="/ozel-ders-ilanlari-verenler/sanat" class="text-blue-700 hover:text-blue-900">
						<img src="{import.meta.env.VITE_CDN_URL}/home-icon-sanat.svg" alt="Sanat"/>
						<span>Sanat</span>
					</a>
				</SplideSlide>
				<SplideSlide class="text-center">
					<a href="/ozel-ders-ilanlari-verenler/sinav-hazirlik" class="text-blue-700 hover:text-blue-900">
						<img src="{import.meta.env.VITE_CDN_URL}/home-icon-sinavhazirlik.svg" alt="Sınav Hazırlık"/>
						<span>Sınav Hazırlık</span>
					</a>
				</SplideSlide>
				<SplideSlide class="text-center">
					<a href="/ozel-ders-ilanlari-verenler/spor" class="text-blue-700 hover:text-blue-900">
						<img src="{import.meta.env.VITE_CDN_URL}/home-icon-spor.svg" alt="Spor"/>
						<span>Spor</span>
					</a>
				</SplideSlide>
			</Splide>
		</div>
	</div>
</section>

<style>
	@import '@splidejs/splide/css/skyblue';

</style>
