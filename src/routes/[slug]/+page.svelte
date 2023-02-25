<script>
    import UserComment from '/src/components/user/UserComment.svelte'
    import MediaCardContainer from '/src/components/MediaCardContainer.svelte'

    export let data
</script>

<svelte:head>
    <title>{data.user.firstName} {data.user.lastName} Özel Ders Profil Sayfası {data.user.city?.title ?? data.user.country?.title}</title>
    <meta name="description" content="{data.user.firstName} {data.user.lastName} özel ders profil sayfası.{data.user.country?.title ? ' ' + data.user.country.title + ' bölgesinde ikamet eden ' : (data.user.county?.title ? ' ' + data.user.city?.title + ', ' + data.user.county?.title + ' bölgesinde ikamet eden ' : '')}öğretmen toplam {data.prices?.items?.length ?? 0} adet özel ders veriyor. Özel ders fiyatları {data.user.minimumPrice ?? 0}₺ başlıyor. Öğretmen yüz yüze özel ders {data.user.isTeachPhysically ? 'veriyor' : 'vermiyor'}, uzaktan (webcam) olarak özel ders {data.user.isTeachRemotely ? 'veriyor' : 'vermiyor'}." />
</svelte:head>

<div class="lg:flex lg:flex-row gap-6 bg-white p-6 rounded-lg shadow-md mt-4">
    <MediaCardContainer user="{{...data.user, showShare: true, showApprovedBadge: true, showIsOnlineBadge: true, showRequest: true}}" />
</div>

{#if data.prices?.items !== null}
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
                {#each data.prices.items as price}
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

{#if data.locations?.items !== null}
    <div class="bg-white rounded-lg shadow-md mt-4">
        <div class="bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold">Yüz Yüze Ders Verdiği Lokasyonlar</div>
        <div class="flex flex-col gap-4 p-6">
            {#each data.locations.items as location}
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

{#if data.comments?.items !== null}
    <div class="bg-white rounded-lg shadow-md mt-4">
        <div class="bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold">Yorumlar</div>
        <div class="p-6">
            {#each data.comments.items as comment, index}
                <div class="flex" class:mt-6={index > 0}>
                    <div class="flex-none w-12 h-12 rounded-full border border-orange-100 bg-orange-50">
                        <div class="flex justify-center items-center w-12 h-12">{comment.fullName.charAt(0)}</div>
                    </div>

                    <div class="ml-4 grow">
                        <h2 class="font-semibold">{comment.fullName}</h2>
                        <p class="mt-2 text-sm text-gray-500">{#each Array(comment.rate) as _, index (index)}<span class="mr-1">⭐</span>{/each}</p>
                        <p class="mt-2 text-sm text-gray-500">{comment.comment}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
{/if}

<div class="bg-white rounded-lg shadow-md mt-4">
    <div class="bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold">Yorum Yap</div>
    <div class="p-6">
        <UserComment username="{data.user.username}" />
    </div>
</div>
