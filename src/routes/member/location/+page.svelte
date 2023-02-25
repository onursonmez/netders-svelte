<script>
    import { getCounties } from '/src/repository/location'
    import { toast } from '/src/functions/toast'
    import Select from 'svelte-select';
    import { itemFilter } from '/src/utils/selectUtil'

    import { enhance } from '$app/forms';

    /** @type {import('./$types').PageData} */
    export let data;

    /** @type {import('./$types').ActionData} */
    export let form;

    let loading = false;
    let pageData = [];

    pageData.locations = data.locations
    pageData.selectedCounties = []

    $: if(form?.errors) {
        Object.entries(form?.errors).forEach(i => {
            toast(i[1], 'warning')
        })
    }

    const updateCounties = async () => {
        pageData.counties = null
        if(pageData.city?.id){
            pageData.counties = await getCounties({cityId: pageData.city.id})
        }
    }
</script>

<svelte:head>
    <title>Hesabım • Ders Verilen Lokasyonlar</title>
</svelte:head>


<div>
    <div class="grow bg-white rounded-lg shadow-md">
        <div class="bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold">Yeni Ders Verilen Lokasyon</div>

        <form method="POST" use:enhance={({ data }) => {

            data.set("cityId", pageData.city?.id)
            data.set("countyIds", pageData?.selectedCounties)

            return ({ update, result }) => {

                loading = false

                if (result.type === 'success') {
                    pageData.locations = result.data
				    toast("İşlem başarıyla tamamlandı 👏", "success")
			    }
                update({ reset: true });
            };
        }}
              action="?/new"
              on:submit={() => {
                  loading = true
              }}
        >

            <div class="p-6">
                <div class="flex flex-col gap-4">
                    <p>Yüz yüze ders vermek için gidebileceğin lokasyonları bu alandan belirleyebilirsin. Eklemek için önce şehir sonra ilçe seçip Ekle tuşuna basmalısın. Yalnızca Uzaktan (Webcam) ile ders veriyorsan herhangi bir lokasyon seçmene gerek yoktur.</p>
                    <div>
                        <span class="text-sm mb-1 block text-gray-500">Şehir</span>
                        <Select placeholder="Seç" noOptionsMessage="Sonuç bulunamadı..." bind:value={pageData.city} items="{data.cities.items}" optionIdentifier="id" labelIdentifier="title" {itemFilter} on:select={updateCounties} />
                    </div>

                    {#if pageData.counties}
                    <div>
                        <span class="text-sm mb-1 block text-gray-500">İlçe</span>
                        <div class="grid lg:grid-cols-2 gap-2">
                            {#each pageData.counties as county}
                                <div>
                                    <input type="checkbox" bind:group={pageData.selectedCounties} id="county_{county.id}" value="{county.id}" />
                                    <label for="county_{county.id}">{county.title}</label>
                                </div>
                            {/each}
                        </div>
                    </div>
                    {/if}
                </div>
            </div>

            <div class="bg-[#fbfcff] border-t border-gray-100 p-6 rounded-b-lg text-right">
                {#if loading}
                    <div class="py-1 flex justify-end pr-8">
                        <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                    </div>
                {:else}
                    <button class="bg-blue-700 hover:bg-blue-900 px-6 py-2 rounded-full text-white">
                        <span>Ekle</span>
                    </button>
                {/if}
            </div>
        </form>
    </div>

    <div class="grow bg-white rounded-lg shadow-md mt-4">
        <div class="bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold">Tanımlı Ders Verilen Lokasyonlar</div>
        <div class="p-6">
            {#if pageData.locations?.items !== null}
            <div class="flex flex-col gap-4">
                <div class="w-full overflow-x-auto">
                <table class="table-auto">
                    <thead>
                    <tr class="font-semibold">
                        <td>Lokasyon Adı</td>
                        <td>Sil</td>
                    </tr>
                    </thead>
                    <tbody>
                    {#each pageData.locations.items as location}
                    <tr>
                        <td>
                            {location.city.title} > {location.county.title}
                        </td>
                        <td>
                            <form method="POST" use:enhance={({ data }) => {

                                data.set("id", location.id)

                                return ({ update, result }) => {

                                        loading = false

                                        if (result.type === 'success') {
                                            pageData.locations = result.data
                                            toast("İşlem başarıyla tamamlandı 👏", "success")
                                        }
                                        update({ reset: false });
                                    };
                                }}
                              action="?/delete"
                              on:submit={() => {
                                  loading = true
                              }}
                            >
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mx-auto">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                </button>
                            </form>
                        </td>
                    </tr>
                    {/each}
                    </tbody>
                </table>
                </div>


            </div>
            {:else}
                Tanımlı ders verilen lokasyon bulunamadı.
            {/if}
        </div>
    </div>
</div>
<style>
    table {width: 100%;}
    table td{padding:10px; border-bottom:1px solid #dedede; white-space: nowrap}
    table td:nth-child(1){min-width: 200px}
    table td:nth-child(2){text-align: center}
</style>
