<script>
	import contactValidationSuite from '/src/validation/contactValidation'
	import { enhance } from '$app/forms';
	import { imask } from '@imask/svelte';
	import { toast } from '/src/functions/toast'

	const phoneMaskOptions = {
		mask: /^0[0-9]*$/,
		lazy: false
	};

	let formState = {};
	let contactValidationSuiteResult = contactValidationSuite.get();

	const handleChange = name => {
		contactValidationSuiteResult = contactValidationSuite(formState, name);

		contactValidationSuiteResult.done(res => {
			contactValidationSuiteResult = res;
		});
	};

	$: disabledButton = !contactValidationSuiteResult.isValid();
</script>
<svelte:head>
	<title>İletişim</title>
</svelte:head>

<div class="bg-white rounded-lg shadow-md mt-4">
	<div class="bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold">İletişim</div>
	<div class="p-6 max-w-2xl mx-auto">
		<form use:enhance={({ data }) => {
					for (const key in formState) {
						data.set(key, formState[key])
					}

					return ({ update, result }) => {
						if (result.type === 'success') {
							toast("Mesajın başarıyla iletildi :)", "success")
						}
						update({ reset: true });
					};
				}}
			  method="POST"
		>
		<div class="grid lg:grid-cols-2 gap-6 mt-6">
			<div>
				<span class="text-sm mb-1 block text-gray-500">Adın</span>
				<input bind:value={formState.firstName} on:input={handleChange} type="text" class="w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0" />
				{#if contactValidationSuiteResult.getErrors('firstName')}
					<span class="text-xs text-red-500">{contactValidationSuiteResult.getErrors('firstName')}</span>
				{/if}
			</div>
			<div>
				<span class="text-sm mb-1 block text-gray-500">Soyadın</span>
				<input bind:value={formState.lastName} on:input={handleChange} type="text" class="w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0" />
				{#if contactValidationSuiteResult.getErrors('lastName')}
					<span class="text-xs text-red-500">{contactValidationSuiteResult.getErrors('lastName')}</span>
				{/if}
			</div>
			<div>
				<span class="text-sm mb-1 block text-gray-500">E-posta adresin</span>
				<input bind:value={formState.email} on:input={handleChange} type="email" class="w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0" />
				{#if contactValidationSuiteResult.getErrors('email')}
					<span class="text-xs text-red-500">{contactValidationSuiteResult.getErrors('email')}</span>
				{/if}
			</div>
			<div>
				<span class="text-sm mb-1 block text-gray-500">Telefon numaran</span>
				<input bind:value={formState.phone} on:input={handleChange} use:imask={phoneMaskOptions} type="text" class="w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0" />
				{#if contactValidationSuiteResult.getErrors('phone')}
					<span class="text-xs text-red-500">{contactValidationSuiteResult.getErrors('phone')}</span>
				{/if}
			</div>
			<div class="col-span-2">
				<span class="text-sm mb-1 block text-gray-500">Mesajın</span>
				<textarea bind:value={formState.message} on:input={handleChange} class="w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"></textarea>
				{#if contactValidationSuiteResult.getErrors('message')}
					<span class="text-xs text-red-500">{contactValidationSuiteResult.getErrors('message')}</span>
				{/if}
			</div>
			<div class="col-span-2 mx-auto">
				<button disabled={disabledButton} class="disabled:bg-gray-400 bg-blue-700 hover:bg-blue-900 py-2 px-4 text-sm md:text-lg md:py-3 md:px-6 text-center rounded-full justify-center text-white md:inline-block">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1 inline-block">
						<path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
					</svg>
					Gönder
				</button>
			</div>
		</div>
		</form>
	</div>
</div>


