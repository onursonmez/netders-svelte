<script>
	import { getUserPhoto } from '/src/repository/user'
	import { onMount } from 'svelte'

	export let firstName;
	export let genderName;
	export let lastName;
	export let about;
	export let cityName;
	export let countyName;
	export let minimumPrice;
	export let isOnline;
	export let title;
	export let username;
	export let isTeachPhysically;
	export let isTeachRemotely;
	export let totalComment;

	let photoUrl;

	onMount(async () => {
		const res = await getUserPhoto(username);
		photoUrl = res.url;
	});

	const getPhotoEmptyUserAvatar = (genderName) => {
		if(genderName == 'Erkek') return 'img/icon-male.png'
		if(genderName == 'Kadın') return 'img/icon-female.png'

		return 'img/icon-male.png'
	}

	const truncateString = (str, num) => {
		if(str == null) return '';
		if (str.length > num) {
			return str.slice(0, num) + "...";
		} else {
			return str;
		}
	}

</script>

<a href="/{ username }" target="_blank" rel="noreferrer" class="flex flex-col gap-2 items-center bg-white rounded-lg shadow-md md:flex-row md:w-full p-4">
	<img class="md:w-48 md:h-48 md:rounded-lg rounded-full h-48" src="{import.meta.env.VITE_BASE_URL}{ photoUrl || getPhotoEmptyUserAvatar(genderName) }" alt="">
	<div class="flex flex-col w-full justify-between pl-4 leading-normal">
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-blue-700 dark:text-white md:text-left text-center">{ firstName } { lastName }</h5>
		<p class="mb-3 font-semibold text-gray-700 dark:text-gray-400 md:text-left text-center">{ title }</p>

		<div class="flex flex-col gap-2 md:flex-row mb-3">
		{#if (isTeachPhysically)}
		<div class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="mr-1 w-3 h-3">
			  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
			</svg>
			Yüz yüze ders veriyor
		</div>
		{/if}

		{#if (isTeachRemotely)}
		<div class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1 w-3 h-3">
				<path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
			</svg>
			Uzaktan, webcam ile ders veriyor
		</div>
		{/if}
		</div>

		<div class="lg:flex lg:gap-2 justify-between text-gray-500 text-sm">
			<div>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline-block mr-1">
					<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
				</svg>
				{ minimumPrice }<span class="text-xs">₺</span>
			</div>

			<div>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline-block mr-1">
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
				</svg>
				{totalComment} yorum
			</div>

			<div>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline-block mr-1">
					<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
					<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
				</svg>
				{ cityName }, { countyName }
			</div>
		</div>

		<div class="mb-3 font-normal mt-4">{ truncateString(about, 230) }</div>
	</div>
</a>
