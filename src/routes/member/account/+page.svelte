<script>
    import Modal from '/src/components/Modal.svelte'
    import UserEmailVerify from '/src/components/user/UserEmailVerify.svelte'
    import { gendersStore } from '/src/stores/userStore'
    import {aboutModel, accountModel} from '/src/models/userModel'
    import { onMount } from 'svelte'
    import { getUser } from '/src/repository/user'
    import { getCountries, getCities, getCounties } from '/src/repository/location'
    import { toast } from '/src/functions/toast'
    import { page } from '$app/stores';

    import Select from 'svelte-select';
    import { itemFilter } from '/src/utils/selectUtil'

    import { enhance } from '$app/forms';

    /** @type {import('./$types').PageData} */
    export let data;

    /** @type {import('./$types').ActionData} */
    export let form;

    $: if(form?.errors) {
        Object.entries(form?.errors).forEach(i => {
            toast(i[1], 'warning')
        })
    }

    let loading = false
    let pageData = aboutModel
    let showEmailConfirmationModal = false
    let email, password
    let cities = []
    let counties = []
    let countries = []

    const updateCounties = async () => {
        counties = await getCounties({cityId: pageData.city.id})
        pageData.county = null
    }

    onMount( async () => {

        const userResponse = await getUser($page.data.user.username)

        pageData.firstName = userResponse.firstName
        pageData.lastName = userResponse.lastName
        pageData.email = userResponse.email
        pageData.phone = userResponse.phone
        pageData.gender = userResponse.gender
        pageData.country = userResponse.country
        pageData.city = userResponse.city
        pageData.county = userResponse.county

        if(userResponse.country){
            pageData.outsideTurkey = true
        }

        if($page.data.user.emailVerified === false){
            showEmailConfirmationModal = true
        }

        countries = await getCountries()
        cities = await getCities()

        if(pageData.city?.id){
            counties = await getCounties({cityId: pageData.city.id})
            pageData.county = userResponse.county
        }
    })

    const closeEmailConfirmationModalHandle = () => {
        showEmailConfirmationModal = false
        email = ''
        password = ''
    }


</script>

<svelte:head>
    <title>Hesabım • Kişisel Bilgiler</title>
</svelte:head>

{#if showEmailConfirmationModal}
<Modal on:close="{() => showEmailConfirmationModal = false}">
    <UserEmailVerify on:closeEmailConfirmationModal={closeEmailConfirmationModalHandle} />
</Modal>
{/if}

<div class="w-full">
    <div class="grow bg-white rounded-lg shadow-md">
        <form use:enhance={({ data }) => {
            if(pageData.country?.id && pageData.outsideTurkey)
            data.set("countryId", pageData.country?.id)

            if(pageData.city?.id && !pageData.outsideTurkey)
            data.set("cityId", pageData.city?.id)

            if(pageData.county?.id && !pageData.outsideTurkey)
            data.set("countyId", pageData.county?.id)

            if(pageData.gender?.id)
            data.set("genderId", pageData.gender?.id)

            return ({ update, result }) => {
                if (result.type === 'success') {
				    toast("Bilgilerin başarıyla kaydedildi!", "success")
			    }
                update({ reset: false });
            };
        }}
              method="POST"
              action="?/save"
        >
            <div class="bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold">Kişisel Bilgiler</div>
            <div class="p-6">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                        <span class="text-sm mb-1 block text-gray-500">Ad</span>
                        <input name="firstName" type="text" bind:value="{pageData.firstName}" class="ring-0 w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0" />
                    </div>
                    <div>
                        <span class="text-sm mb-1 block text-gray-500">Soyad</span>
                        <input name="lastName" type="text" bind:value="{pageData.lastName}" class="w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0" />
                    </div>
                    <div>
                        <span class="text-sm mb-1 block text-gray-500">Telefon</span>
                        <input name="phone" type="number" bind:value="{pageData.phone}" class="w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0" />
                    </div>
                    <div>
                        <span class="text-sm mb-1 block text-gray-500">Cinsiyet</span>
                        <Select placeholder="Seç" noOptionsMessage="Sonuç bulunamadı..." items="{$gendersStore}" bind:value={pageData.gender} optionIdentifier="id" labelIdentifier="title" {itemFilter} />
                    </div>

                    {#if !pageData.outsideTurkey}
                        <div>
                            <span class="text-sm mb-1 block text-gray-500">Şehir</span>
                            <Select placeholder="Seç" noOptionsMessage="Sonuç bulunamadı..." items="{cities}" bind:value={pageData.city} optionIdentifier="id" labelIdentifier="title" {itemFilter} on:select={updateCounties} />
                        </div>

                        <div>
                            <span class="text-sm mb-1 block text-gray-500">İlçe</span>
                            <Select placeholder="Seç" noOptionsMessage="Sonuç bulunamadı..." items="{counties}" bind:value={pageData.county} optionIdentifier="id" labelIdentifier="title" {itemFilter} />
                        </div>
                    {/if}

                    {#if pageData.outsideTurkey}
                        <div>
                            <span class="text-sm mb-1 block text-gray-500">Ülke</span>
                            <Select placeholder="Seç" noOptionsMessage="Sonuç bulunamadı..." items="{countries}" bind:value={pageData.country} optionIdentifier="id" labelIdentifier="title" {itemFilter} />
                        </div>
                    {/if}

                    <div class="lg:col-span-2">
                        <label>
                            <input type="checkbox" bind:checked={pageData.outsideTurkey} class="rounded-sm ring-0 outline-none" /> <span class="text-gray-500 text-sm">Türkiye'de yaşamıyorum</span>
                        </label>
                    </div>
                </div>
            </div>

            <div class="bg-[#fbfcff] border-t border-gray-100 p-6 rounded-b-lg text-right">
                {#if loading}
                    <svg aria-hidden="true" class="mx-auto w-8 h-8 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                {:else}
                    <button class="bg-blue-700 hover:bg-blue-900 px-6 py-2 rounded-full text-white">
                        Güncelle
                    </button>
                {/if}
            </div>
        </form>
    </div>

    <div class="grow bg-white rounded-lg shadow-md mt-4">
        <form use:enhance={() => {
                return ({ update, result }) => {
                    if (result.type === 'success') {
                        toast("E-posta adresi güncellendi!", "success")
                        showEmailConfirmationModal = true
                    }
                    update({ reset: false });
                };
            }}
              method="POST"
              action="?/updateEmail"
        >
            <div class="bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold">E-posta Değiştir</div>
            <div class="p-6">
                <p class="mb-4">E-posta adresini değiştirmek için yeni e-posta adresini ve Netders.com şifreni girmelisin. Bilgilerin doğruysa yeni e-posta adresine altı haneli bir kod gönderilecek ve bir sonraki ekranda bu kodu girmen istenecektir.</p>
                <div class="grid lg:grid-cols-3 gap-4">
                    <div>
                        <span class="text-sm mb-1 block text-gray-500">Mevcut e-posta</span>
                        <input name="currentEmail" type="text" bind:value="{pageData.email}" class="ring-0 w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0" disabled />
                    </div>
                    <div>
                        <span class="text-sm mb-1 block text-gray-500">Yeni e-posta</span>
                        <input name="email" bind:value={email} type="text" class="ring-0 w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0" />
                    </div>
                    <div>
                        <span class="text-sm mb-1 block text-gray-500">Şifre</span>
                        <input name="password" bind:value={password} type="password" class="ring-0 w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0" />
                    </div>
                </div>
            </div>
            <div class="bg-[#fbfcff] border-t border-gray-100 p-6 rounded-b-lg text-right">
                {#if loading}
                    <svg aria-hidden="true" class="mx-auto w-8 h-8 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                {:else}
                    <button class="bg-blue-700 hover:bg-blue-900 px-6 py-2 rounded-full text-white">
                        E-posta değiştir
                    </button>
                {/if}
            </div>
    </div>

    <div class="grow bg-white rounded-lg shadow-md mt-4">
        <form use:enhance={() => {
                return ({ update, result }) => {
                    if (result.type === 'success') {
                        toast("Şifre güncellendi!", "success")
                        update({ reset: true });
                    }

                    update({ reset: false });
                };
            }}
              method="POST"
              action="?/updatePassword"
        >
            <div class="bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold">Şifre Değiştir</div>
            <div class="p-6">
                <div class="grid lg:grid-cols-3 gap-4">
                    <div>
                        <span class="text-sm mb-1 block text-gray-500">Mevcut şifre</span>
                        <input name="password" type="password" class="ring-0 w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0" />
                    </div>
                    <div>
                        <span class="text-sm mb-1 block text-gray-500">Yeni şifre</span>
                        <input name="newPassword" type="password" class="ring-0 w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0" />
                    </div>
                    <div>
                        <span class="text-sm mb-1 block text-gray-500">Yeni şifre (tekrar)</span>
                        <input name="newPasswordRepeat" type="password" class="ring-0 w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0" />
                    </div>
                </div>
            </div>
            <div class="bg-[#fbfcff] border-t border-gray-100 p-6 rounded-b-lg text-right">
                {#if loading}
                    <svg aria-hidden="true" class="mx-auto w-8 h-8 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                {:else}
                    <button class="bg-blue-700 hover:bg-blue-900 px-6 py-2 rounded-full text-white">
                        Şifre değiştir
                    </button>
                {/if}
            </div>
        </form>
    </div>




</div>

