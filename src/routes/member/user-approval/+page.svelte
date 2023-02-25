<script>
    import MediaCardContainer from '/src/components/MediaCardContainer.svelte'
    import { enhance } from '$app/forms'
    import { toast } from '/src/functions/toast'
    import { page } from '$app/stores';

    /** @type {import('./$types').PageData} */
    export let data;

    let message

</script>

<svelte:head>
    <title>Hesabım • Öğretmen Onayı</title>
</svelte:head>

<div class="lg:flex lg:flex-row gap-6 bg-white p-6 rounded-lg shadow-md mt-4">
    <MediaCardContainer user="{{...data.approvalUser}}" />
</div>

{#if data.approvalUserPrices?.items !== null}
    <div class="bg-white rounded-lg shadow-md mt-4">
        <div class="bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold">Ders Ücretleri</div>
        <div class="p-6">
            <table class="table-fixed w-full text-left text-sm lg:text-base">
                <thead>
                <tr>
                    <th class="pb-2 font-semibold">Ders Adı</th>
                    <th align="right" class="font-semibold">Yüz Yüze</th>
                    <th align="right" class="font-semibold">Uzaktan (Webcam)</th>
                </tr>
                </thead>
                <tbody>
                {#each data.approvalUserPrices.items as price}
                    <tr class="border-t border-gray-200">
                        <td class="py-2">{#if (price.slug)}<a href="/ozel-ders-{price.slug}" target="_blank" rel="noreferrer">{price.subject.title} - {price.level.title}</a>{:else}{price.subject.title} - {price.level.title}{/if}</td>
                        <td align="right">{#if (price.pricePrivate > 0)}{price.pricePrivate}<span class="text-xs">₺</span>{:else}-{/if}</td>
                        <td align="right">{#if (price.priceLive > 0)}{price.priceLive}<span class="text-xs">₺</span>{:else}-{/if}</td>
                    </tr>
                {/each}
                </tbody>
            </table>
        </div>
    </div>
{/if}

{#if data.approvalUserLocations?.items !== null}
    <div class="bg-white rounded-lg shadow-md mt-4">
        <div class="bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold">Yüz Yüze Ders Verdiği Lokasyonlar</div>
        <div class="flex flex-col gap-4 p-6">
            {#each data.approvalUserLocations.items as location}
                <div>
                    <span class="font-semibold">{location.city.title}</span>
                    <ul class="grid grid-cols-1 md:grid-cols-3">
                        {#each location.counties as county}
                            <li>{county.title}</li>
                        {/each}
                    </ul>
                </div>
            {/each}
        </div>
    </div>
{/if}

<div class="bg-white rounded-lg shadow-md mt-4">
    <div class="bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold">Onayla veya Reddet</div>
    <div class="p-6">
        <div>
            <textarea bind:value={message} class="w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"></textarea>
        </div>

        <div class="flex justify-between mt-4">
            <div>
                <form use:enhance={({ data }) => {

                            data.set("uuid", $page.data.userApproval.uuid)
                            data.set("message", message)

                            return ({ update, result }) => {
                                if (result.type === 'success') {
                                    message = ''
                                    toast("İşlem başarıyla tamamlandı!", "success")
                                }

                                if (result.type === 'invalid') {
                                    Object.values(result.data).forEach(item => {
                                        toast(item, 'warning')
                                    })
                                }

                                update({ reset: true });
                            };
                        }}
                      action="?/decline"
                      method="POST"
                >

                    <button class="bg-red-700 hover:bg-red-900 py-2 px-4 text-sm md:text-lg md:py-3 md:px-6 text-center rounded-full justify-center text-white block md:inline-block">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1 inline-block">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                        Reddet
                    </button>
                </form>
            </div>
            <div>
                <form use:enhance={({ data }) => {

                            data.set("uuid", $page.data.userApproval.uuid)
                            data.set("message", message)

                            return ({ update, result }) => {
                                if (result.type === 'success') {
                                    message = ''
                                    toast("İşlem başarıyla tamamlandı!", "success")
                                }

                                if (result.type === 'invalid') {
                                    Object.values(result.data).forEach(item => {
                                        toast(item, 'warning')
                                    })
                                }

                                update({ reset: true });
                            };
                        }}
                      action="?/approve"
                      method="POST"
                >
                    <button class="bg-blue-700 hover:bg-blue-900 py-2 px-4 text-sm md:text-lg md:py-3 md:px-6 text-center rounded-full justify-center text-white block md:inline-block">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1 inline-block">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        Onayla
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>


