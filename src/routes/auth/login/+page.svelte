<script>
	import Input from '/src/components/form/Input.svelte'
	import { toast } from '/src/functions/toast'

	import { enhance } from '$app/forms';

	/** @type {import('./$types').ActionData} */
	export let form;

	$: if(form?.errors) {
		Object.entries(form?.errors).forEach(i => {
			toast(i[1], 'warning')
		})
	}

	let loginData = {
		login: import.meta.env.VITE_EMAIL,
		password: import.meta.env.VITE_PASSWORD,
		rememberMe: false,
	}

	let emailLogin = true
	let showPassword = false

</script>

<svelte:head>
	<title>Giriş</title>
</svelte:head>

<div class="flex max-w-6xl mx-auto mt-4">
	<div class="grow">
		<div class="bg-white rounded-lg p-10 sm:m-auto md:m-auto lg:m-0" style="border: solid 1px #CACED0; min-height: 524px;">
			<div class="sm:w-full text-left m-auto lg:m-0">
				<h1 class="text-3xl md:text-4xl font-bold mb-4">Hesabına giriş yap</h1>
				<p class="mb-4">Henüz üye değil misin? Özel ders almak için <a class="text-blue-700 hover:text-blue-900" href="/ozel-ders-talebi-olustur">buraya</a>, öğretmen olmak için <a class="text-blue-700 hover:text-blue-900" href="/ogretmen-ol">buraya</a> tıklayın.</p>
				<div class="mb-4">
					<ul class="flex flex-row justify-center gap-4 font-semibold cursor-pointer">
						<li on:click={() => emailLogin = !emailLogin} on:click={() => loginData.login = ''} class="{emailLogin ? 'border-b-2 border-blue-700 text-blue-700' : ''}">E-posta</li>
						<li on:click={() => emailLogin = !emailLogin} on:click={() => loginData.login = ''} class="{!emailLogin ? 'border-b-2 border-blue-700 text-blue-700' : ''}">Telefon</li>
					</ul>
				</div>
				<div class="w-full">
					<form use:enhance method="POST">
						<div>
							<div class="mt-1 rounded-md">
								<Input
										name="login"
										id="login"
										label="{emailLogin ? 'E-posta' : 'Telefon'}"
										placeholder=""
										bind:value={loginData.login}
										type="{emailLogin ? 'text' : 'number'}"
								/>
							</div>
						</div>

						<div class="relative mt-2">
							<Input
									name="password"
									id="password"
									label="Şifre"
									placeholder=""
									bind:value={loginData.password}
									type={showPassword ? 'text' : 'password'}
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
							<button type="submit"
									class="w-full flex justify-center py-2 px-4 border border-transparent text-md font-medium rounded-md text-white bg-blue-700 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out">
								Giriş
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>

	</div>
	<div class="flex-none ml-1 hidden lg:block">
		<img style="height: 524px;" src="{import.meta.env.VITE_CDN_URL}login-screen.png" alt="">
	</div>
</div>
