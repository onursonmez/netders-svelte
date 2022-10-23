<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import { Button } from 'flowbite-svelte'
	import { Rating } from 'flowbite-svelte';
	import User from "./User.svelte";

</script>


<section class="dark:bg-gray-900 mt-4">
	<div>
		<div class="block p-6 rounded-lg shadow-md bg-white">
			<h2 class="mb-4 text-2xl font-bold tracking-tight leading-none lg:text-3xl dark:text-white">Fizik özel ders verenler</h2>

			<div>
				<Splide options={ {
					arrows: true,
					gap: '1em',
					type   : 'loop',
					interval: 3000,
					autoplay: true,
					perPage: 4,
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
				  } } aria-label="Fizik özel ders verenler">
					<SplideSlide>
						<User />
					</SplideSlide>
				</Splide>
			</div>
		</div>
	</div>
</section>

<style>
	@import '@splidejs/splide/css/skyblue';

</style>
