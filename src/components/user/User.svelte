<script>
	import { Button, Rating } from 'flowbite-svelte'
</script>

<div class="text-center rounded-lg shadow-md pb-6 bg-white">
	<a href="/" class="text-blue-700 hover:text-blue-900">
		<img src="https://netders.com/users/17426-1647602290.jpg" alt="user1" class="rounded-[50%] pt-[50px] pl-[50px] pr-[50px] mx-auto" />
		<h3 class="mt-8 font-semibold">Yeşim Öğretmen</h3>
	</a>
	<p class="text-sm mt-2 flex justify-center">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
			<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
		</svg>
		70 ₺ / Saat
	</p>
	<p class="text-sm mt-2 flex justify-center">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
			<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
			<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
		</svg>
		Ankara, Çankaya
	</p>

	<p class="text-sm mt-2 flex justify-center">
		<Rating total={5} rating={4} />
	</p>
	<p class="text-xs mt-2 text-gray-500">0 yorum</p>
	<Button size="xs" class="mt-2">

		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
			<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
		</svg>

		Ders Talebi Oluştur
	</Button>
</div>

<style>

</style>
