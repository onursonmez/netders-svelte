<script>
	import { onMount } from 'svelte'
	import { viewedTeacherStore } from '/src/stores/userStore'
	import { getUserLocations } from '/src/repository/user'
	import { getUserPrices } from '/src/repository/price'
	import { getUserComments } from '/src/repository/comment'
	import UserComment from '/src/components/user/UserComment.svelte'
	import UserCard from '/src/components/user/UserCard.svelte'

	let userData = {
		username: $viewedTeacherStore.username,
		firstName: $viewedTeacherStore.firstName,
		lastName: $viewedTeacherStore.lastName,
		genderName: $viewedTeacherStore.genderName,
		isOnline: $viewedTeacherStore.isOnline,
		createdAt: $viewedTeacherStore.createdAt,
		title: $viewedTeacherStore.title,
		about: $viewedTeacherStore.about,
		isTeachPhysically: $viewedTeacherStore.isTeachPhysically,
		isTeachRemotely: $viewedTeacherStore.isTeachRemotely,
		minimumPrice: $viewedTeacherStore.minimumPrice,
        totalComment: $viewedTeacherStore.totalComment,
		cityName: $viewedTeacherStore.cityName,
		countyName: $viewedTeacherStore.countyName,
	}

	let prices = []
	let locations = []
	let comments = []

	onMount(async () => {
		let responsePrice = await getUserPrices($viewedTeacherStore.username)
		if(responsePrice.result.items){
			prices = responsePrice.result.items
		}

		let responseLocation = await getUserLocations($viewedTeacherStore.username)
		if(responseLocation.result.items){
			locations = responseLocation.result.items
		}

		let responseComments = await getUserComments($viewedTeacherStore.username)
		if(responseComments.result.items){
			comments = responseComments.result.items
		}
	})
</script>

<svelte:head>
	<title>{$viewedTeacherStore.firstName} {$viewedTeacherStore.lastName} Özel Ders Profil Sayfası {$viewedTeacherStore.cityName}</title>
</svelte:head>

<div class="lg:flex lg:flex-row gap-6 bg-white p-6 rounded-lg shadow-md mt-4">
	<UserCard {userData} />
</div>

{#if prices.length > 0}
<div class="bg-white rounded-lg shadow-md mt-4">
	<div class="bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold">Ders Ücretleri</div>
	<div class="p-6">
		<table class="table-fixed w-full text-left text-sm lg:text-base">
			<thead>
			<tr>
				<th class="pb-2 font-semibold">Ders Adı</th>
				<th align="right" class="font-semibold">Yüz Yüze</th>
				<th align="right" class="font-semibold">Uzaktan (Webcam)</th>
			</tr>
			</thead>
			<tbody>
			{#each prices as price}
			<tr class="border-t border-gray-200">
				<td class="py-2">{#if (price.slug)}<a href="/ders/{price.slug}" target="_blank" rel="noreferrer">{price.subject.title} - {price.level.title}</a>{:else}{price.subject.title} - {price.level.title}{/if}</td>
				<td align="right">{#if (price.pricePrivate > 0)}{price.pricePrivate}<span class="text-xs">₺</span>{:else}-{/if}</td>
				<td align="right">{#if (price.priceLive > 0)}{price.priceLive}<span class="text-xs">₺</span>{:else}-{/if}</td>
			</tr>
			{/each}
			</tbody>
		</table>
	</div>
</div>
{/if}

{#if locations.length >  0}
<div class="bg-white rounded-lg shadow-md mt-4">
	<div class="bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold">Yüz Yüze Ders Verdiği Lokasyonlar</div>
	<div class="flex flex-col gap-4 p-6">
		{#each locations as location}
		<div>
			<span class="font-semibold">{location.city.title}</span>
			<ul class="grid grid-cols-1 md:grid-cols-3">
				{#each location.counties as county}
				<li>{county.title}</li>
				{/each}
			</ul>
		</div>
		{/each}
	</div>
</div>
{/if}

{#if comments.length > 0}
	<div class="bg-white rounded-lg shadow-md mt-4">
		<div class="bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold">Yorumlar</div>
		<div class="p-6">
			{#each comments as comment, index}
			<div class="flex" class:mt-6={index > 0}>
				<div class="flex-none w-12 h-12 rounded-full border border-orange-100 bg-orange-50">
					<div class="flex justify-center items-center w-12 h-12">{comment.fullName.charAt(0)}</div>
				</div>

				<div class="ml-4 grow">
					<h2 class="font-semibold">{comment.fullName}</h2>
					<p class="mt-2 text-sm text-gray-500">{#each Array(comment.rate) as _, index (index)}<span class="mr-1">⭐</span>{/each}</p>
					<p class="mt-2 text-sm text-gray-500">{comment.comment}</p>
				</div>
			</div>
			{/each}
		</div>
	</div>
{/if}

<div class="bg-white rounded-lg shadow-md mt-4">
	<div class="bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold">Yorum Yap</div>
	<div class="p-6">
		<UserComment username="{$viewedTeacherStore.username}" />
	</div>
</div>
