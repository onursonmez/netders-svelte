<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';

	import bilgisayar from '$lib/images/category/home-icon-bilgisayar.svg'
	import dans from '$lib/images/category/home-icon-dans.svg'
	import direksiyon from '$lib/images/category/home-icon-direksiyon.svg'
	import ilkogretim from '$lib/images/category/home-icon-ilkogretim.svg'
	import kisiselgelisim from '$lib/images/category/home-icon-kisiselgelisim.svg'
	import lise from '$lib/images/category/home-icon-lise.svg'
	import muzik from '$lib/images/category/home-icon-muzik.svg'
	import oyunhobi from '$lib/images/category/home-icon-oyunhobi.svg'
	import ozelegitim from '$lib/images/category/home-icon-ozelegitim.svg'
	import sanat from '$lib/images/category/home-icon-sanat.svg'
	import sinavhazirlik from '$lib/images/category/home-icon-sinavhazirlik.svg'
	import spor from '$lib/images/category/home-icon-spor.svg'
	import universite from '$lib/images/category/home-icon-universite.svg'
	import yabancidil from '$lib/images/category/home-icon-yabancidil.svg'

</script>


<section class="dark:bg-gray-900">
	<div class="block p-6 rounded-lg shadow-md bg-white">
		<h2 class="mb-4 text-2xl font-bold tracking-tight leading-none lg:text-3xl dark:text-white">Özel ders kategorileri</h2>
		<p class="text-gray-700 text-base mb-4">
			Alanında tecrübeli öğretmenlerden özel ders alarak, ihtiyacınız olan eğitimi, en uygun fiyatlarla alabilirsiniz.
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
					<a href="/ozel-ders-ilanlari-verenler/bilgisayar" class="text-blue-700 hover:text-blue-900">
						<img src="{bilgisayar}" alt="Bilgisayar"/>
						<span>Bilgisayar</span>
					</a>
				</SplideSlide>
				<SplideSlide class="text-center">
					<a href="/ozel-ders-ilanlari-verenler/dans" class="text-blue-700 hover:text-blue-900">
						<img src="{dans}" alt="Dans"/>
						<span>Dans</span>
					</a>
				</SplideSlide>
				<SplideSlide class="text-center">
					<a href="/ozel-ders-ilanlari-verenler/direksiyon" class="text-blue-700 hover:text-blue-900">
						<img src="{direksiyon}" alt="Direksiyon"/>
						<span>Direksiyon</span>
					</a>
				</SplideSlide>
				<SplideSlide class="text-center">
					<a href="/ozel-ders-ilanlari-verenler/ilkogretim-takviye" class="text-blue-700 hover:text-blue-900">
						<img src="{ilkogretim}" alt="İlköğretim Takviye"/>
						<span>İlköğretim Takviye</span>
					</a>
				</SplideSlide>
				<SplideSlide class="text-center">
					<a href="/ozel-ders-ilanlari-verenler/kisisel-gelisim" class="text-blue-700 hover:text-blue-900">
						<img src="{kisiselgelisim}" alt="Kişisel Gelişim"/>
						<span>Kişisel Gelişim</span>
					</a>
				</SplideSlide>
				<SplideSlide class="text-center">
					<a href="/ozel-ders-ilanlari-verenler/lise-takviye" class="text-blue-700 hover:text-blue-900">
						<img src="{lise}" alt="Lise Takviye"/>
						<span>Lise Takviye</span>
					</a>
				</SplideSlide>
				<SplideSlide class="text-center">
					<a href="/ozel-ders-ilanlari-verenler/muzik" class="text-blue-700 hover:text-blue-900">
						<img src="{muzik}" alt="Müzik"/>
						<span>Müzik</span>
					</a>
				</SplideSlide>
				<SplideSlide class="text-center">
					<a href="/ozel-ders-ilanlari-verenler/oyun-ve-hobi" class="text-blue-700 hover:text-blue-900">
						<img src="{oyunhobi}" alt="Oyun & Hobi"/>
						<span>Oyun & Hobi</span>
					</a>
				</SplideSlide>
				<SplideSlide class="text-center">
					<a href="/ozel-ders-ilanlari-verenler/ozel-egitim" class="text-blue-700 hover:text-blue-900">
						<img src="{ozelegitim}" alt="Özel Eğitim"/>
						<span>Özel Eğitim</span>
					</a>
				</SplideSlide>
				<SplideSlide class="text-center">
					<a href="/ozel-ders-ilanlari-verenler/sanat" class="text-blue-700 hover:text-blue-900">
						<img src="{sanat}" alt="Sanat"/>
						<span>Sanat</span>
					</a>
				</SplideSlide>
				<SplideSlide class="text-center">
					<a href="/ozel-ders-ilanlari-verenler/sinav-hazirlik" class="text-blue-700 hover:text-blue-900">
						<img src="{sinavhazirlik}" alt="Sınav Hazırlık"/>
						<span>Sınav Hazırlık</span>
					</a>
				</SplideSlide>
				<SplideSlide class="text-center">
					<a href="/ozel-ders-ilanlari-verenler/spor" class="text-blue-700 hover:text-blue-900">
						<img src="{spor}" alt="Spor"/>
						<span>Spor</span>
					</a>
				</SplideSlide>
				<SplideSlide class="text-center">
					<a href="/ozel-ders-ilanlari-verenler/universite-takviye" class="text-blue-700 hover:text-blue-900">
						<img src="{universite}" alt="Üniversite Takviye"/>
						<span>Üniversite Takviye</span>
					</a>
				</SplideSlide>
				<SplideSlide class="text-center">
					<a href="/ozel-ders-ilanlari-verenler/yabanci-dil" class="text-blue-700 hover:text-blue-900">
						<img src="{yabancidil}" alt="Yabancı Dil"/>
						<span>Yabancı Dil</span>
					</a>
				</SplideSlide>
			</Splide>
		</div>
	</div>
</section>

<style>
	@import '@splidejs/splide/css/skyblue';

</style>
