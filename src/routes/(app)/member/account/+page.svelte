<script>
    import MemberHorizontalNavigation from '/src/components/MemberHorizontalNavigation.svelte'
    import MemberVerticalNavigation from '/src/components/MemberVerticalNavigation.svelte'
    import { gendersStore } from '/src/stores/userStore'
    import { onMount } from 'svelte'
    import { updateUser, getUser } from '/src/repository/user'
    import { getCountries, getCities, getCounties } from '/src/repository/location'
    import { toast } from '/src/functions/toast'
    import { accountModel } from '/src/models/userModel'

    import Select from 'svelte-select';
    String.prototype.turkishToLower = function(){
        let string = this;
        let letters = { "İ": "i", "I": "ı", "Ş": "ş", "Ğ": "ğ", "Ü": "ü", "Ö": "ö", "Ç": "ç" };
        string = string.replace(/(([İIŞĞÜÇÖ]))/g, function(letter){ return letters[letter]; })
        return string.toLowerCase();
    }
    export let itemFilter = (label, filterText, option) => label.turkishToLower().includes(filterText.turkishToLower());

    export let data

    let loading = false
    let cities = []
    let counties = []
    let countries = []

    const handleAccountSubmit = async () => {
        loading = !loading

        let response = await updateUser(accountModel)
        if(response !== undefined){
            toast('Başarılı!', 'success')
        }
        loading = !loading
    }

    const handleAccountValidate = () => {
        if(!accountModel.firstName.trim()) {
            toast('Hata! Adını yazmadın.', 'warning')
        } else {
            return handleAccountSubmit()
        }
    }

    const updateCounties = async () => {
        counties = await getCounties({cityId: accountModel.city.id})
        accountModel.county = null
    }

    onMount( async () => {
        const userResponse = await getUser(data.user.username)

        accountModel.firstName = userResponse.firstName
        accountModel.lastName = userResponse.lastName
        accountModel.email = userResponse.email
        accountModel.phone = userResponse.phone
        accountModel.gender = userResponse.gender
        accountModel.country = userResponse.country
        accountModel.city = userResponse.city
        accountModel.county = userResponse.county

        if(userResponse.country){
            accountModel.outsideTurkey = true
        }

        countries = await getCountries()
        cities = await getCities()

        if(accountModel.county !== null){
            counties = await getCounties({cityId: accountModel.city.id})
        }
    })

</script>

<svelte:head>
    <title>Hesabım</title>
</svelte:head>

<MemberHorizontalNavigation />

<div class="flex gap-4 mt-4">

    <div class="min-w-[190px]">
        <MemberVerticalNavigation />
    </div>
    <div class="grow bg-white rounded-lg shadow-md">
        <div class="bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold">Kişisel Bilgiler</div>
        <div class="p-6">
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <span class="text-sm mb-1 block text-gray-500">Ad</span>
                    <input type="text" bind:value="{accountModel.firstName}" class="ring-0 w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0" />
                </div>
                <div>
                    <span class="text-sm mb-1 block text-gray-500">Soyad</span>
                    <input type="text" bind:value="{accountModel.lastName}" class="w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0" />
                </div>
                <div>
                    <span class="text-sm mb-1 block text-gray-500">Telefon</span>
                    <input type="number" bind:value="{accountModel.phone}" class="w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0" />
                </div>
                <div>
                    <span class="text-sm mb-1 block text-gray-500">Cinsiyet</span>
                    <Select placeholder="Seç" noOptionsMessage="Sonuç bulunamadı..." items="{$gendersStore}" bind:value={accountModel.gender} optionIdentifier="id" labelIdentifier="title" {itemFilter} />
                </div>

                {#if !accountModel.outsideTurkey}
                    <div>
                        <span class="text-sm mb-1 block text-gray-500">Şehir</span>
                        <Select placeholder="Seç" noOptionsMessage="Sonuç bulunamadı..." items="{cities}" bind:value={accountModel.city} optionIdentifier="id" labelIdentifier="title" {itemFilter} on:select={updateCounties} />
                    </div>

                    <div>
                        <span class="text-sm mb-1 block text-gray-500">İlçe</span>
                        <Select placeholder="Seç" noOptionsMessage="Sonuç bulunamadı..." items="{counties}" bind:value={accountModel.county} optionIdentifier="id" labelIdentifier="title" {itemFilter} />
                    </div>
                {/if}

                {#if accountModel.outsideTurkey}
                    <div>
                        <span class="text-sm mb-1 block text-gray-500">Ülke</span>
                        <Select placeholder="Seç" noOptionsMessage="Sonuç bulunamadı..." items="{countries}" bind:value={accountModel.country} optionIdentifier="id" labelIdentifier="title" {itemFilter} />
                    </div>
                {/if}

                <div class="col-span-2">
                    <label>
                        <input type="checkbox" bind:checked={accountModel.outsideTurkey} class="border-gray-500 mr-1 rounded-sm ring-0 outline-none" /> Türkiye'de yaşamıyorum
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
                <button on:click={() => handleAccountValidate()} class="bg-blue-700 hover:bg-blue-900 px-6 py-2 rounded-full text-white">
                    <span>Kaydet</span>
                </button>
            {/if}
        </div>

    </div>
</div>

