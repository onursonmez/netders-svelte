<script>
	let opened = 1
</script>
<svelte:head>
	<title>Yardım</title>
</svelte:head>

<div class="bg-white rounded-lg shadow-md mt-4">
	<div class="bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold">Yardım</div>
	<div class="flex flex-col gap-4 p-6">
		<div>
			<p class="font-semibold">Genel</p>

			<div class="flex flex-col gap-4 mt-4">
				<div class="shadow-md rounded-lg p-3 border border-gray-200" on:click={() => opened = 1}>
					<div class="flex justify-between">
						<div>Netders.com nedir?</div>
						<div>
							{#if opened === 2}
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
									<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
								</svg>
							{:else}
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
									<path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
								</svg>

							{/if}
						</div>
					</div>
					{#if opened === 1}
						<div class="text-sm mt-4">Netders.com, öğretmen ile öğrencileri buluşturan bir eğitim platformudur. Netders.com'a üye olan tüm öğretmenler titizlikle incelenerek onaylanır. Netders.com'da yüz yüze veya online şekilde öğretmenlerden kolayca özel ders alabilirsiniz.</div>
					{/if}
				</div>

				<div class="shadow-md rounded-lg p-3 border border-gray-200 cursor-pointer" on:click={() => opened = 2}>
					<div class="flex justify-between">
						<div>Netders.com ile nasıl iletişime geçebilirim?</div>
						<div>
							{#if opened === 2}
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
									<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
								</svg>
							{:else}
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
									<path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
								</svg>

							{/if}
						</div>
					</div>
					{#if opened === 2}
					<div class="text-sm mt-4">Netders.com ile iletişime geçmek için yukarıdaki menüde yer alan iletişim bölümünden bizimle iletişime geçebilirsiniz.</div>
					{/if}
				</div>

				<div class="shadow-md rounded-lg p-3 border border-gray-200 cursor-pointer" on:click={() => opened = 3}>
					<div class="flex justify-between">
						<div>Üyeliğimi nasıl iptal edebilirim?</div>
						<div>
							{#if opened === 3}
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
									<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
								</svg>
							{:else}
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
									<path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
								</svg>

							{/if}
						</div>
					</div>
					{#if opened === 3}
						<div class="text-sm mt-4">Netders.com üyeliğinizi iptal etmek için hesabınıza giriş yaptıktan sonra, kişisel bilgiler sayfasında yer alan üyelik iptali kısmından üyeliğinizi iptal edebilirsiniz.</div>
					{/if}
				</div>

				<div class="shadow-md rounded-lg p-3 border border-gray-200 cursor-pointer" on:click={() => opened = 4}>
					<div class="flex justify-between">
						<div>Hesabıma giriş yapamıyorum ne yapmalıyım?</div>
						<div>
							{#if opened === 4}
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
									<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
								</svg>
							{:else}
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
									<path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
								</svg>

							{/if}
						</div>
					</div>
					{#if opened === 4}
						<div class="text-sm mt-4">Netders.com'a tüm denemelerinize rağmen giriş yapamadıysanız iletişim bölümünden bizimle iletişime geçerek teknik destek alabilirsiniz.</div>
					{/if}
				</div>
			</div>

			<p class="font-semibold mt-8">Öğrenciler İçin</p>

			<div class="flex flex-col gap-4 mt-4">
				<div class="shadow-md rounded-lg p-3 border border-gray-200" on:click={() => opened = 5}>
					<div class="flex justify-between">
						<div>Nasıl özel ders alırım?</div>
						<div>
							{#if opened === 5}
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
									<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
								</svg>
							{:else}
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
									<path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
								</svg>

							{/if}
						</div>
					</div>
					{#if opened === 5}
						<div class="text-sm mt-4">Netders.com'da özel ders almak için bir ders talebi oluşturmanız gerekmektedir.</div>
					{/if}
				</div>

				<div class="shadow-md rounded-lg p-3 border border-gray-200 cursor-pointer" on:click={() => opened = 6}>
					<div class="flex justify-between">
						<div>Öğretmenle nasıl iletişime geçebilirim?</div>
						<div>
							{#if opened === 6}
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
									<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
								</svg>
							{:else}
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
									<path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
								</svg>

							{/if}
						</div>
					</div>
					{#if opened === 6}
						<div class="text-sm mt-4">Netders.com'da özel ders talebi oluşturduğunuzda öğretmenler talebinize başvurur. Bu öğretmenlerin iletişim bilgilerini siz de görebilirsiniz.</div>
					{/if}
				</div>

				<div class="shadow-md rounded-lg p-3 border border-gray-200 cursor-pointer" on:click={() => opened = 7}>
					<div class="flex justify-between">
						<div>Öğrenci olarak nasıl üye olabilirim?</div>
						<div>
							{#if opened === 7}
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
									<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
								</svg>
							{:else}
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
									<path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
								</svg>

							{/if}
						</div>
					</div>
					{#if opened === 7}
						<div class="text-sm mt-4">Netders.com'a öğrenci olarak doğrudan üye olamazsınız. Yeni bir ders talebi oluşturarak aynı zamanda bir üyelik de başlatmış olursunuz.</div>
					{/if}
				</div>

				<div class="shadow-md rounded-lg p-3 border border-gray-200 cursor-pointer" on:click={() => opened = 8}>
					<div class="flex justify-between">
						<div>Özel ders almak için ne kadar ücret ödeyeceğim?</div>
						<div>
							{#if opened === 8}
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
									<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
								</svg>
							{:else}
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
									<path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
								</svg>

							{/if}
						</div>
					</div>
					{#if opened === 8}
						<div class="text-sm mt-4">Özel ders almak için öğrenciler Netders.com'a herhangi bir ücret ödemezler. Öğrencinin öğretmen ile anlaştığı ücreti doğrudan öğretmene öderler. Netders.com yalnızca öğrenci ve öğretmeni buluşturmak için aracılık yapan bir eğitim platformudur.</div>
					{/if}
				</div>
			</div>

			<p class="font-semibold mt-8">Öğretmenler İçin</p>

			<div class="flex flex-col gap-4 mt-4">
				<div class="shadow-md rounded-lg p-3 border border-gray-200" on:click={() => opened = 9}>
					<div class="flex justify-between">
						<div>Nasıl özel ders verebilirim?</div>
						<div>
							{#if opened === 9}
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
									<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
								</svg>
							{:else}
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
									<path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
								</svg>

							{/if}
						</div>
					</div>
					{#if opened === 9}
						<div class="text-sm mt-4">Netders.com'da öğretmen olarak özel ders vermek için giriş kısmından öğretmen olarak üye ol seçeneği ile öğretmen hesabınızı kolayca oluşturabilirsiniz.</div>
					{/if}
				</div>

				<div class="shadow-md rounded-lg p-3 border border-gray-200 cursor-pointer" on:click={() => opened = 10}>
					<div class="flex justify-between">
						<div>Öğrencilerle nasıl iletişime geçebilirim?</div>
						<div>
							{#if opened === 10}
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
									<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
								</svg>
							{:else}
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
									<path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
								</svg>

							{/if}
						</div>
					</div>
					{#if opened === 10}
						<div class="text-sm mt-4">Netders.com'da özel ders talebini kabul ettiğiniz öğrencilerin iletişim bilgilerini görebilirsiniz.</div>
					{/if}
				</div>

				<div class="shadow-md rounded-lg p-3 border border-gray-200 cursor-pointer" on:click={() => opened = 11}>
					<div class="flex justify-between">
						<div>Öğretmen olarak nasıl üye olabilirim?</div>
						<div>
							{#if opened === 11}
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
									<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
								</svg>
							{:else}
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
									<path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
								</svg>

							{/if}
						</div>
					</div>
					{#if opened === 11}
						<div class="text-sm mt-4">Yukarıda yer alan giriş kısmından öğretmen olarak üye ol seçeneği ile kolayca üyeliğinizi başlatabilirsiniz.</div>
					{/if}
				</div>

				<div class="shadow-md rounded-lg p-3 border border-gray-200 cursor-pointer" on:click={() => opened = 12}>
					<div class="flex justify-between">
						<div>Özel ders vermek için ne kadar ücret ödeyeceğim?</div>
						<div>
							{#if opened === 12}
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
									<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
								</svg>
							{:else}
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
									<path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
								</svg>

							{/if}
						</div>
					</div>
					{#if opened === 12}
						<div class="text-sm mt-4">Netders.com'da öğretmen üyeliği ücretsizdir. Netders.com daha fazla öğrenciye ulaşmanızı sağlayan bazı hizmetler sunar. İsteğe bağlı olarak bu özelliklerden ücretli olarak yararlanabilirsiniz.</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>


