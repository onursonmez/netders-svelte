<script>
	import { env } from '$env/dynamic/public'
	import { photo } from '/src/repository/user'
	import { onMount } from 'svelte'

	export let id;
	export let loginAt;
	export let firstName;
	export let genderId;
	export let genderName;
	export let lastName;
	export let about;
	export let cityId;
	export let cityName;
	export let countyId;
	export let countyName;
	export let minimumPrice;
	export let isOnline;
	export let title;
	export let countryId;
	export let countryName;
	export let username;
	export let isTeachRemotely;
	export let isTeachPhysically;
	export let searchPoint;

	let photoUrl;

	onMount(async () => {
		const res = await photo(username);
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

<a href="/u/{ username }" target="_blank" class="flex flex-col gap-2 items-center bg-white rounded-lg shadow-md md:flex-row md:w-full p-4">
	<img class="md:w-48 md:h-48 md:rounded-lg rounded-full h-48" src="{env.PUBLIC_BASE_URL}{ photoUrl || getPhotoEmptyUserAvatar(genderName) }" alt="">
	<div class="flex flex-col w-full justify-between pl-4 leading-normal">
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-blue-700 dark:text-white md:text-left text-center">{ firstName } { lastName }</h5>
		<p class="mb-3 font-semibold text-gray-700 dark:text-gray-400 md:text-left text-center">{ title }</p>

		<div class="lg:flex lg:gap-2 justify-between text-gray-500">
			<div>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline-block mr-1">
					<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
				</svg>
				{ minimumPrice }<span class="text-xs">₺</span>
			</div>

			<div>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline-block mr-1">
					<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
					<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
				</svg>
				{ cityName }, { countyName }
			</div>

			<div>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline-block mr-1">
					<path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
				</svg>
				{ isOnline ? 'Çevrimiçi' : 'Çevrimdışı' }
			</div>
		</div>

		<div class="mb-3 font-normal mt-4">{ truncateString(about, 230) }</div>
	</div>
</a>
