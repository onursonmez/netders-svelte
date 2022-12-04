<script>
	import Input from '/src/components/form/Input.svelte'
	import Logo from '$lib/images/netders-logo-blue.svg'
	import Toastify from 'toastify-js'

	export let data

	let email = data.email
	let code = data.code
	let showSuccessPage = false

	const handleSubmit = () => {
		if(email.length === 0) {
			Toastify({
				text: "Hata! E-posta adresi girilmedi.",
				className: "warning",
				gravity: "top",
				close: true
			}).showToast()
		} else if(code.length === 0){
			Toastify({
				text: "Hata! Kod girilmedi.",
				className: "warning",
				gravity: "top",
				close: true
			}).showToast()
		} else {
			Toastify({text: "Hata! Girilen kod geçersizdir.", className: "warning", gravity: "top", close: true}).showToast()
		}

	}
</script>

<svelte:head>
	<title>E-posta Aktivasyonu</title>
</svelte:head>

<div class="row-fluid login-wrapper margin-fix single">

	<div class="flex justify-center">
		<a href="/">
			<img class="pt-10 mx-auto lg:mx-32 mb-10 lg:mb-0" src="{Logo}" width='200px'>
		</a>
	</div>

	<div class="max-w-6xl relative z-10 m-auto px-6 lg:mt-12" class:hidden={!showSuccessPage}>

		<div class="bg-white rounded-lg p-10 mx-auto max-w-2xl border border-gray-300">
			<div class="sm:w-full text-left m-auto lg:m-0">
				<div class="p-6 max-w-2xl text-center mx-auto">
					<div class="font-semibold text-lg">Aktivasyon başarılı!</div>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-64 h-64 mx-auto animate-pulse text-green-500">
						<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
					<p>E-posta aktivasyon işlemi başarıyla tamamlandı.</p>
					<p class="text-gray-400 text-sm">Yapmak istediğin işlemlere artık devam edebilirsin 😃</p>

					<a href="/" class="bg-blue-700 hover:bg-blue-900 py-2 px-4 text-sm md:text-lg md:py-3 md:px-6 text-center rounded-full justify-center text-white mt-4 block md:inline-block">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1 inline-block">
							<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
						</svg>

						Ana Sayfa
					</a>
				</div>
			</div>
		</div>

	</div>

	<div class="max-w-6xl relative z-10 m-auto px-6 lg:mt-12" class:hidden={showSuccessPage}>

			<div class="bg-white rounded-lg p-10 mx-auto max-w-2xl border border-gray-300">
				<div class="sm:w-full text-left m-auto lg:m-0">
					<h1 class="text-3xl md:text-4xl font-bold mb-3">E-posta aktivasyonu</h1>
					<p class="mb-2">E-posta adresine gönderilen bilgileri aşağıdaki alanlara girerek Aktive Et butonuna tıkla.</p>
					<div class="w-full">
						<form on:submit|preventDefault={handleSubmit}>
							<div>
								<div class="mt-1">
									<Input
											id="email"
											label="E-posta"
											placeholder=""
											bind:value={email}
											type="text"
											on:submit={handleSubmit}
									/>
								</div>
							</div>
							<div>
								<div class="mt-1">
									<Input
											id="login"
											label="Kod"
											placeholder=""
											bind:value={code}
											type="text"
											on:submit={handleSubmit}
									/>
								</div>
							</div>

							<div class="mt-10">
								<span class="block w-full rounded-md">
									<button type="submit"
											class="w-full flex justify-center py-2 px-4 border border-transparent text-md font-medium rounded-md text-white bg-blue-700 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out">
									Aktive Et
									</button>
								</span>
							</div>
						</form>
					</div>
				</div>
			</div>

	</div>

</div>
