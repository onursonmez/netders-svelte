<script>
	import { getUserPhoto } from '/src/repository/user'
	import { page } from '$app/stores'

	import { Tooltip } from 'flowbite-svelte'
	import Modal from '/src/components/Modal.svelte'
	import Clipboard from 'svelte-clipboard'
	import Toastify from 'toastify-js'

	import dayjs from 'dayjs'
	import tr from 'dayjs/locale/tr'
	import relativeTime from 'dayjs/plugin/relativeTime'
	dayjs.extend(relativeTime)
	dayjs.locale(tr)

	export let userData;

	let photoUrl = import.meta.env.VITE_CDN_URL + '/icon-user.png'
	let shareModal = false

	const getUserPhotoInternal = async (userData) => {
		const res = await getUserPhoto(userData.username);
		if(res.url){
			photoUrl = import.meta.env.VITE_BASE_URL + '/' + res.url
		} else {
			if(userData.genderName === 'Erkek'){
				photoUrl = import.meta.env.VITE_CDN_URL + '/icon-male.png'
			}
			if(userData.genderName === 'Kadın'){
				photoUrl = import.meta.env.VITE_CDN_URL + '/icon-female.png'
			}
		}
	}

	$: if(Object.entries(userData).length > 0) {
		getUserPhotoInternal(userData)
	}

</script>


{#if shareModal}
	<Modal on:close="{() => shareModal = false}">
		<h3 slot="header" class="text-xl font-medium text-gray-900 dark:text-white pb-4">Paylaş</h3>
		<div class="flex flex-row justify-between">
			<div>
				<a href="https://twitter.com/intent/tweet?url={$page.url}&text={userData.title}">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 512" width="100%" class="w-12 h-12 mx-auto mb-2"><rect height="400" style="fill:none;" width="400" x="56" y="56"/><path d="M161.014,464.013c193.208,0 298.885,-160.071 298.885,-298.885c0,-4.546 0,-9.072 -0.307,-13.578c20.558,-14.871 38.305,-33.282 52.408,-54.374c-19.171,8.495 -39.51,14.065 -60.334,16.527c21.924,-13.124 38.343,-33.782 46.182,-58.102c-20.619,12.235 -43.18,20.859 -66.703,25.498c-19.862,-21.121 -47.602,-33.112 -76.593,-33.112c-57.682,0 -105.145,47.464 -105.145,105.144c0,8.002 0.914,15.979 2.722,23.773c-84.418,-4.231 -163.18,-44.161 -216.494,-109.752c-27.724,47.726 -13.379,109.576 32.522,140.226c-16.715,-0.495 -33.071,-5.005 -47.677,-13.148l0,1.331c0.014,49.814 35.447,93.111 84.275,102.974c-15.464,4.217 -31.693,4.833 -47.431,1.802c13.727,42.685 53.311,72.108 98.14,72.95c-37.19,29.227 -83.157,45.103 -130.458,45.056c-8.358,-0.016 -16.708,-0.522 -25.006,-1.516c48.034,30.825 103.94,47.18 161.014,47.104" style="fill:#1da1f2;fill-rule:nonzero;"/></svg>
					<span class="hidden sm:block">Twitter</span>
				</a>
			</div>
			<div>
				<a href="https://www.facebook.com/dialog/share?app_id=&href={$page.url}&display=page&title={userData.title}">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1024 1024" width="100%" class="w-12 h-12 mx-auto mb-2"><path fill="#1877f2" d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"/><path fill="#fff" d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"/></svg>
					<span class="hidden sm:block">Facebook</span>
				</a>
			</div>
			<div>
				<a href="https://www.linkedin.com/shareArticle?mini=true&url={$page.url}&summary={userData.title}">
					<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" class="w-12 h-12 mx-auto mb-2"><g fill="none" fill-rule="evenodd"><rect width="72" height="72" fill="#117EB8" rx="4"/><path fill="#FFF" d="M13.139 27.848h9.623V58.81h-9.623V27.848zm4.813-15.391c3.077 0 5.577 2.5 5.577 5.577 0 3.08-2.5 5.581-5.577 5.581a5.58 5.58 0 1 1 0-11.158zm10.846 15.39h9.23v4.231h.128c1.285-2.434 4.424-5 9.105-5 9.744 0 11.544 6.413 11.544 14.75V58.81h-9.617V43.753c0-3.59-.066-8.209-5-8.209-5.007 0-5.776 3.911-5.776 7.95V58.81h-9.615V27.848z"/></g></svg>
					<span class="hidden sm:block">LinkedIn</span>
				</a>
			</div>
			<div>
				<a href="https://wa.me/?text={userData.title} - {$page.url}">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" class="w-12 h-12 mx-auto mb-2"><defs><path id="a" d="M1023.941 765.153c0 5.606-.171 17.766-.508 27.159-.824 22.982-2.646 52.639-5.401 66.151-4.141 20.306-10.392 39.472-18.542 55.425-9.643 18.871-21.943 35.775-36.559 50.364-14.584 14.56-31.472 26.812-50.315 36.416-16.036 8.172-35.322 14.426-55.744 18.549-13.378 2.701-42.812 4.488-65.648 5.3-9.402.336-21.564.505-27.15.505l-504.226-.081c-5.607 0-17.765-.172-27.158-.509-22.983-.824-52.639-2.646-66.152-5.4-20.306-4.142-39.473-10.392-55.425-18.542-18.872-9.644-35.775-21.944-50.364-36.56-14.56-14.584-26.812-31.471-36.415-50.314-8.174-16.037-14.428-35.323-18.551-55.744-2.7-13.378-4.487-42.812-5.3-65.649-.334-9.401-.503-21.563-.503-27.148l.08-504.228c0-5.607.171-17.766.508-27.159.825-22.983 2.646-52.639 5.401-66.151 4.141-20.306 10.391-39.473 18.542-55.426C34.154 93.24 46.455 76.336 61.07 61.747c14.584-14.559 31.472-26.812 50.315-36.416 16.037-8.172 35.324-14.426 55.745-18.549 13.377-2.701 42.812-4.488 65.648-5.3 9.402-.335 21.565-.504 27.149-.504l504.227.081c5.608 0 17.766.171 27.159.508 22.983.825 52.638 2.646 66.152 5.401 20.305 4.141 39.472 10.391 55.425 18.542 18.871 9.643 35.774 21.944 50.363 36.559 14.559 14.584 26.812 31.471 36.415 50.315 8.174 16.037 14.428 35.323 18.551 55.744 2.7 13.378 4.486 42.812 5.3 65.649.335 9.402.504 21.564.504 27.15l-.082 504.226z"/></defs><linearGradient id="b" x1="512.001" x2="512.001" y1=".978" y2="1025.023" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#61fd7d"/><stop offset="1" stop-color="#2bb826"/></linearGradient><use fill="url(#b)" overflow="visible" xlink:href="#a"/><path fill="#FFF" d="M783.302 243.246c-69.329-69.387-161.529-107.619-259.763-107.658-202.402 0-367.133 164.668-367.214 367.072-.026 64.699 16.883 127.854 49.017 183.522l-52.096 190.229 194.665-51.047c53.636 29.244 114.022 44.656 175.482 44.682h.151c202.382 0 367.128-164.688 367.21-367.094.039-98.087-38.121-190.319-107.452-259.706zM523.544 808.047h-.125c-54.767-.021-108.483-14.729-155.344-42.529l-11.146-6.612-115.517 30.293 30.834-112.592-7.259-11.544c-30.552-48.579-46.688-104.729-46.664-162.379.066-168.229 136.985-305.096 305.339-305.096 81.521.031 158.154 31.811 215.779 89.482s89.342 134.332 89.312 215.859c-.066 168.243-136.984 305.118-305.209 305.118zm167.415-228.515c-9.177-4.591-54.286-26.782-62.697-29.843-8.41-3.062-14.526-4.592-20.645 4.592-6.115 9.182-23.699 29.843-29.053 35.964-5.352 6.122-10.704 6.888-19.879 2.296-9.176-4.591-38.74-14.277-73.786-45.526-27.275-24.319-45.691-54.359-51.043-63.543-5.352-9.183-.569-14.146 4.024-18.72 4.127-4.109 9.175-10.713 13.763-16.069 4.587-5.355 6.117-9.183 9.175-15.304 3.059-6.122 1.529-11.479-.765-16.07-2.293-4.591-20.644-49.739-28.29-68.104-7.447-17.886-15.013-15.466-20.645-15.747-5.346-.266-11.469-.322-17.585-.322s-16.057 2.295-24.467 11.478-32.113 31.374-32.113 76.521c0 45.147 32.877 88.764 37.465 94.885 4.588 6.122 64.699 98.771 156.741 138.502 21.892 9.45 38.982 15.094 52.308 19.322 21.98 6.979 41.982 5.995 57.793 3.634 17.628-2.633 54.284-22.189 61.932-43.615 7.646-21.427 7.646-39.791 5.352-43.617-2.294-3.826-8.41-6.122-17.585-10.714z"/></svg>
					<span class="hidden sm:block">Whatsapp</span>
				</a>
			</div>
		</div>
		<hr class="my-4" />
		<div class="relative">
			<Clipboard text="{$page.url}" let:copy on:copy={() => {Toastify({text: "Bağlantı kopyalandı 👍", className: "info", gravity: "bottom"}).showToast()}}>
				<div class="absolute right-2 bottom-3 cursor-pointer" on:click={copy}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 bg-white">
						<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
					</svg>
				</div>
			</Clipboard>
			<div>Bağlantıyı kopyala:</div>
			<div class="mt-2"><input type="text" value="{$page.url}" class="w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0 text-gray-500" /></div>
		</div>
	</Modal>
{/if}

{#if Object.entries(userData).length > 0}
<a href="/{ userData.username }" target="_blank" rel="noreferrer">
	<img class="h-32 rounded-full mx-auto" src="{photoUrl}" alt="">
</a>
<div class="flex flex-col w-full justify-between pl-4 leading-normal mt-2">
	{#if userData.firstName}
	<a href="/{ userData.username }" target="_blank" rel="noreferrer">
		<h5 class="mb-2 text-xl font-bold tracking-tight text-blue-700 text-center">{ userData.firstName } { userData.lastName }</h5>
	</a>
	{/if}

	{#if (userData.minimumPrice || userData.cityName || userData.countyName || userData.totalComment) }
	<div class="flex flex-col gap-2 justify-between text-gray-500 text-sm mt-1">
		{#if userData.minimumPrice}
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block mr-1">
				<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
			</svg>
			{ userData.minimumPrice }₺
		</div>
		{/if}

		{#if (userData.cityName && userData.countyName)}
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block mr-1">
				<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
				<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
			</svg>
			{ userData.cityName }, { userData.countyName }
		</div>
		{/if}

		<div>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block mr-1">
				<path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
			</svg>
			{ userData.totalComment ?? 0 } yorum
		</div>
	</div>
	{/if}

	{#if userData.badges}
	<div class="flex items-center justify-center gap-2 mt-2">
		{#if userData.badges.showApprovedBadge}
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 outline-none">
				<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
			<Tooltip style="custom" class="text-xs bg-blue-700 border-blue-700 text-white transition-opacity ease-in duration-700 opacity-100">Onaylı öğretmen</Tooltip>
		{/if}

		{#if userData.badges.showCreatedAtBadge}
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 outline-none">
				<path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
			</svg>
			<Tooltip style="custom" class="text-xs bg-blue-700 border-blue-700 text-white">{dayjs(new Date(userData.createdAt.date)).fromNow()} üye oldu</Tooltip>
		{/if}

		{#if userData.badges.showIsOnlineBadge}
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 outline-none" class:text-gray-300={!userData.isOnline}>
				<path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
			</svg>
			<Tooltip style="custom" class="text-xs bg-blue-700 border-blue-700 text-white">{userData.isOnline ? 'Çevrimiçi' : 'Çevrimdışı'}</Tooltip>
		{/if}

		{#if userData.badges.showShareBadge}
			<button on:click={() => shareModal = !shareModal}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 outline-none">
					<path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
				</svg>
				<Tooltip style="custom" class="text-xs bg-blue-700 border-blue-700 text-white">Paylaş</Tooltip>
			</button>
		{/if}
	</div>
	{/if}

	{#if userData.showRequest}
	<a href="/" class="bg-blue-700 p-2 rounded-full justify-center text-sm flex text-white mt-4">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1">
			<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
		</svg>
		Ders Talebinde Bulun
	</a>
	<span class="text-xs text-center block mt-1 mb-4 text-gray-400">Cevaplama süresi 1 saat</span>
	{/if}
</div>
{:else}
	<div class="w-full mx-auto">
		<div class="animate-pulse flex space-x-4">
			<div class="rounded-full bg-slate-200 h-10 w-10"></div>
			<div class="flex-1 space-y-6 py-1">
				<div class="h-2 bg-slate-200 rounded"></div>
				<div class="space-y-3">
					<div class="grid grid-cols-3 gap-4">
						<div class="h-2 bg-slate-200 rounded col-span-2"></div>
						<div class="h-2 bg-slate-200 rounded col-span-1"></div>
					</div>
					<div class="h-2 bg-slate-200 rounded"></div>
				</div>
			</div>
		</div>
	</div>
{/if}
