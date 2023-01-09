<script>
	import { Tooltip } from 'flowbite-svelte'
	import dayjs from '/src/stores/dayJsStore'

	export let user;
</script>

<a href="/{user.username}" target="_blank" rel="noreferrer">
	<img class="rounded-full mx-auto w-48 h-48" src="{user.photoUrl}" alt="">
</a>
<div class="flex flex-col w-full justify-between pl-4 leading-normal mt-2">
	<a href="/{user.username}" target="_blank" rel="noreferrer">
		<h5 class="mb-2 text-xl font-bold tracking-tight text-blue-700 text-center">{user.firstName} {user.lastName}</h5>
	</a>

	<p class="mb-2 font-semibold text-gray-800 text-center min-h-[60px]">{user.title.substring(0, 50)}</p>

	<div class="flex flex-col gap-2 justify-between text-gray-500 text-sm mt-1">
		{#if user.minimumPrice > 0}
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block mr-1">
				<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
			</svg>
			{user.minimumPrice}₺
		</div>
		{/if}

		{#if user.county || user.country}
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block mr-1">
				<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
				<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
			</svg>
			{#if user.county?.id}
				{user.county.title}, {user.city.title}
			{:else}
				{user.country.title}
			{/if}
		</div>
		{/if}

		<div>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block mr-1">
				<path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
			</svg>
			{ user.totalComment ?? 0 } yorum
		</div>
	</div>

	{#if user.showRequest}
	<a href="/ozel-ders-talebi-olustur/{user.username}" class="bg-blue-700 p-2 rounded-full justify-center text-sm flex text-white mt-4">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
			<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
		</svg>
		Ders Talebinde Bulun
	</a>
	<span class="text-xs text-center block mt-1 mb-4 text-gray-400">Cevaplama süresi 1 saat</span>
	{/if}
</div>
