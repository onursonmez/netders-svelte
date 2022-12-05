<script>
	import Input from '/src/components/form/Input.svelte'
	import Logo from '$lib/images/netders-logo-blue.svg'
	import LoginScreenImage from '$lib/images/login-screen.png'
	import Toastify from 'toastify-js'
	import { setCookie } from 'svelte-cookie'

	import { login } from '/src/repository/user'
	import { userStore } from '/src/stores/userStore'
	import { goto } from '$app/navigation';

	export let data

	let loginData = {
		login: '',
		password: '',
		rememberMe: false,
	}
	let emailLogin = true
	let showPassword = false
	let loading = false
	let to = data.to

	const handleSubmit = async () => {
		loading = true
		if(loginData.login.length === 0) {
			Toastify({
				text: "Hata! E-posta veya telefon girilmedi.",
				className: "warning",
				gravity: "bottom",
				close: true
			}).showToast()
		} else if(loginData.password.length === 0){
			Toastify({
				text: "Hata! Şifre girilmedi.",
				className: "warning",
				gravity: "bottom",
				close: true
			}).showToast()
		} else {
			let loginResponse = await login(loginData)
			if(Object.entries(loginResponse.errors).length > 0){
				for (const value of Object.values(loginResponse.errors)) {
					Toastify({
						text: value,
						className: "warning",
						gravity: "bottom",
						close: true
					}).showToast()
				}
			} else {
				$userStore = loginResponse.result
				setCookie('token', $userStore.token, 30, true)

				Toastify({
					text: "Hesabınıza başarıyla giriş yaptınız.",
					className: "success",
					gravity: "bottom",
					close: true
				}).showToast()

				setTimeout(() => {
					if(to){
						goto(to)
					} else {
						goto('/member/dashboard')
					}
				}, 1000);
			}
		}
		loading = false
	}
</script>

<svelte:head>
	<title>Giriş</title>
</svelte:head>

<div class="row-fluid login-wrapper margin-fix single">

	<div class="flex justify-center">
		<a href="/">
			<img class="pt-10 mx-auto lg:mx-32 mb-10 lg:mb-0" src="{Logo}" width='200px'>
		</a>
	</div>

	<div class="max-w-6xl relative z-10 m-auto px-6 lg:mt-12">
		<div class="grid md:grid-cols-1 lg:grid-cols-2 items-center login-section">
			<div class="bg-white rounded-lg p-10 sm:m-auto md:m-auto lg:m-0" style="border: solid 1px #CACED0; min-height: 524px;">
				<div class="sm:w-full text-left m-auto lg:m-0">
					<h1 class="text-3xl md:text-4xl font-bold mb-4">Hesabına giriş yap</h1>
					<p class="mb-4">Henüz üye değil misin? Özel ders almak için <a class="text-blue-700 hover:text-blue-900" href="/">buraya</a>, öğretmen olmak için <a class="text-blue-700 hover:text-blue-900" href="/">buraya</a> tıklayın.</p>
					<div class="mb-4">
						<ul class="flex flex-row justify-center gap-4 font-semibold cursor-pointer">
							<li on:click={() => emailLogin = !emailLogin} on:click={() => loginData.login = ''} class="{emailLogin ? 'border-b-2 border-blue-700 text-blue-700' : ''}">E-posta</li>
							<li on:click={() => emailLogin = !emailLogin} on:click={() => loginData.login = ''} class="{!emailLogin ? 'border-b-2 border-blue-700 text-blue-700' : ''}">Telefon</li>
						</ul>
					</div>
					<div class="w-full">
						<form on:submit|preventDefault={handleSubmit}>
							<div>
								<div class="mt-1 rounded-md">
									<Input
											id="login"
											label="{emailLogin ? 'E-posta' : 'Telefon'}"
											placeholder=""
											bind:value={loginData.login}
											type="{emailLogin ? 'text' : 'number'}"
											on:submit={handleSubmit}
									/>
								</div>
							</div>

							<div class="relative mt-2">
								<Input
										id="password"
										label="Şifre"
										placeholder=""
										bind:value={loginData.password}
										type={showPassword ? 'text' : 'password'}
										on:submit={handleSubmit}
								/>
								<div class="absolute bottom-1 right-1 p-1 bg-white cursor-pointer" on:click={() => showPassword = !showPassword}>
									{#if !showPassword}
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-400">
											<path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
										</svg>
									{:else}
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-400">
											<path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
											<path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
										</svg>
									{/if}
								</div>
							</div>

							<div class="mt-2 flex flex-col md:flex-row justify-between">
								<div class="flex items-center">
									<input id="remember-me" type="checkbox" bind:checked={loginData.rememberMe}
										   class="form-checkbox h-4 w-4 tw-blue transition duration-150 ease-in-out"/>
									<label for="remember-me" class="ml-2 block text-sm leading-5 text-gray-900">
										Beni hatırla
									</label>
								</div>

								<div class="text-sm leading-5 mt-4 md:mt-0">
									<a href="/auth/forgot"
									   class="font-medium tw-blue focus:outline-none no-underline transition ease-in-out duration-150">
										Şifremi unuttum
									</a>
								</div>
							</div>

							<div class="mt-10">
								{#if (loading)}
									<svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600 mx-auto" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
										<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
									</svg>
									<span class="sr-only">Loading...</span>
								{:else}
									<button type="submit"
											class="w-full flex justify-center py-2 px-4 border border-transparent text-md font-medium rounded-md text-white bg-blue-700 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out">
									Giriş
									</button>
								{/if}
							</div>
						</form>
					</div>
				</div>
			</div>
			<div class="text-center pt-10 lg:pt-0 m-auto lg:m-0 hidden lg:block">
				<img class="rounded-lg lg:ml-4" style="height: 524px;" src="{LoginScreenImage}" alt="The new Tailwind">
			</div>
		</div>
	</div>

</div>
