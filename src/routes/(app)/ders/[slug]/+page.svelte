<script>
	import { onMount } from 'svelte'
	import UserCard from '/src/components/user/UserCard.svelte'
	import { getTeacher } from '/src/repository/user'

	export let data;

	let userData = {}

	onMount(async() => {
		let getTeacherResponse = await getTeacher(data.username)
		let getTeacherResponseResult = getTeacherResponse.result

		userData = {
			username: getTeacherResponseResult.username,
			firstName: getTeacherResponseResult.firstName,
			lastName: getTeacherResponseResult.lastName,
			genderName: getTeacherResponseResult.genderName,
			cityName: getTeacherResponseResult.cityName,
			countyName: getTeacherResponseResult.countyName,
			minimumPrice: getTeacherResponseResult.minimumPrice,
			totalComment: getTeacherResponseResult.totalComment,
			isOnline: getTeacherResponseResult.isOnline,
			createdAt: getTeacherResponseResult.createdAt,
			title: getTeacherResponseResult.title,
			about: getTeacherResponseResult.about,
			badges: {
				showApprovedBadge: true,
				showCreatedAtBadge: true,
				showIsOnlineBadge: true,
				showShareBadge: true,
			}
		}
	})
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<div class="bg-white rounded-lg shadow-md mt-4">
	<div class="bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold">{data.title}</div>
	<div class="p-6">
		{data.content}

		<ul class="mt-4">
			<li>Ders: {data.subject.title}</li>
			<li>Konu: {data.level.title}</li>
			{#if data.pricePrivate}
			<li>Yüz Yüze Ders Ücreti: {data.pricePrivate}₺</li>
			{/if}
			{#if data.priceLive}
			<li>Uzaktan, Webcam Ders Ücreti: {data.priceLive}₺</li>
			{/if}
		</ul>
	</div>
</div>

{#if Object.entries(userData).length > 0}
	<div class="bg-white rounded-lg shadow-md mt-4">
		<div class="bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold">{userData.firstName} {userData.lastName} Hakkında</div>
		<div class="p-6">
			<div class="lg:flex lg:flex-row gap-6">
				<UserCard {userData} />
			</div>
		</div>
	</div>
{/if}
