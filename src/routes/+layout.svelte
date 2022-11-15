<script>
	import Header from '/src/components/Header.svelte';
	import './styles.css';
	import "../app.css";
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<section class="shadow-md rounded-t-lg bg-white text-center text-base mt-4">
			<div class="p-6 text-gray-500 text-sm">
				Copyright © 2013 - 2022 Netders.com
			</div>
			<div class="shadow-md rounded-b-lg bg-blue-700 p-6 text-white bg-top bg-no-repeat bg-contain" style="background-image:url('/src/lib/images/colored-bar.jpeg')">
				<ul class="lg:flex justify-center mt-4 text-blue-300">
					<li class="mx-2 hover:text-white"><a href="/" class="">Ana Sayfa</a></li>
					<li class="mx-2 hover:text-white"><a href="/">Öğretmen Ara</a></li>
					<li class="mx-2 hover:text-white"><a href="/">Ders talepleri</a></li>
					<li class="mx-2 hover:text-white"><a href="/">Nasıl Çalışır?</a></li>
					<li class="mx-2 hover:text-white"><a href="/">Yardım</a></li>
					<li class="mx-2 hover:text-white"><a href="/">İletişim</a></li>
				</ul>
				<p class="pt-4 text-sm">Netders.com'a üye olarak <a href="/">Kullanım koşulları</a>'nı kabul etmiş sayılırsınız.</p>
				<img src="/images/turkiye-white.svg" class="w-36 mx-auto py-4" alt="" />
				<ul class="flex justify-center text-blue-300">
					<li class="mx-2 hover:text-white"><a href="/">Kullanım Koşulları</a></li>
					<li class="mx-2 hover:text-white"><a href="/">Gizlilik İlkeleri</a></li>
				</ul>
			</div>
		</section>
	</footer>
</div>

<style>

	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 90%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 90%;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
