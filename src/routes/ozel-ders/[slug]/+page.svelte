<script>
	import MediaCardContainer from '/src/components/MediaCardContainer.svelte'

	export let data;
	console.log(data)
</script>

<svelte:head>
	<title>{data.price.title}</title>
</svelte:head>

<div class="bg-white rounded-lg shadow-md mt-4">
	<div class="bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold">{data.price.title}</div>
	<div class="p-6">
		{data.price.content}

		<ul class="mt-4">
			<li>Ders: {data.price.subject.title}</li>
			<li>Konu: {data.price.level.title}</li>
			{#if data.price.pricePrivate}
			<li>Yüz Yüze Ders Ücreti: {data.price.pricePrivate}₺</li>
			{/if}
			{#if data.price.priceLive}
			<li>Uzaktan, Webcam Ders Ücreti: {data.price.priceLive}₺</li>
			{/if}
		</ul>
	</div>
</div>

{#if Object.entries(data.user).length > 0}
	<div class="bg-white rounded-lg shadow-md mt-4">
		<div class="bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold">{data.user.firstName} {data.user.lastName} Hakkında</div>
		<div class="p-6">
			<div class="lg:flex lg:flex-row gap-6">
				<MediaCardContainer user="{{...data.user, showShare: true, showApprovedBadge: true, showIsOnlineBadge: true, showRequest: true}}" />
			</div>
		</div>
	</div>
{/if}
