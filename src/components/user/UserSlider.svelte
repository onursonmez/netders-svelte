<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide'

	import { getUsers } from '../../repository/user'
	import UserVertical from "./UserVertical.svelte";

	const prepareUserData = (userData) => {
		return {...userData, showRequest: false}
	}
</script>

<section class="dark:bg-gray-900 mt-4">
	<div>
		<div class="block p-6 rounded-lg shadow-md bg-white">
			<h2 class="mb-4 text-2xl font-bold tracking-tight leading-none lg:text-3xl dark:text-white">Matematik Özel Ders Verenler</h2>
			<div>
				{#await getUsers({'page': 1, 'pageSize': 12, 'keyword': 'matematik'})}
					Yükleniyor...
				{:then users}
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
				  } } aria-label="Matematik özel ders verenler">

						{#each users.items as userData}
						<SplideSlide>
							<div class="flex flex-col gap-2 items-center w-full p-4 border border-blue-100 rounded-md">
								<UserVertical userData="{prepareUserData(userData)}" />
							</div>
						</SplideSlide>
						{/each}

				</Splide>
				{/await}
			</div>
		</div>
	</div>
</section>

<section class="dark:bg-gray-900 mt-4">
	<div>
		<div class="block p-6 rounded-lg shadow-md bg-white">
			<h2 class="mb-4 text-2xl font-bold tracking-tight leading-none lg:text-3xl dark:text-white">İngilizce Özel Ders Verenler</h2>
			<div>
				{#await getUsers({'page': 1, 'pageSize': 12, 'keyword': 'ingilizce'})}
					Yükleniyor...
				{:then users}
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
				  } } aria-label="İngilizce özel ders verenler">

						{#each users.items as userData}
							<SplideSlide>
								<div class="flex flex-col gap-2 items-center w-full p-4 border border-blue-100 rounded-md">
									<UserVertical userData="{prepareUserData(userData)}" />
								</div>
							</SplideSlide>
						{/each}

					</Splide>
				{/await}
			</div>
		</div>
	</div>
</section>

<section class="dark:bg-gray-900 mt-4">
	<div>
		<div class="block p-6 rounded-lg shadow-md bg-white">
			<h2 class="mb-4 text-2xl font-bold tracking-tight leading-none lg:text-3xl dark:text-white">Fizik Özel Ders Verenler</h2>
			<div>
				{#await getUsers({'page': 1, 'pageSize': 12, 'keyword': 'fizik'})}
					Yükleniyor...
				{:then users}
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

						{#each users.items as userData}
							<SplideSlide>
								<div class="flex flex-col gap-2 items-center w-full p-4 border border-blue-100 rounded-md">
									<UserVertical userData="{prepareUserData(userData)}" />
								</div>
							</SplideSlide>
						{/each}

					</Splide>
				{/await}
			</div>
		</div>
	</div>
</section>

<style>
	@import '@splidejs/splide/css/skyblue';
</style>
