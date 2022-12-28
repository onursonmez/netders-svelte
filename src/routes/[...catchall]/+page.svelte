<script>
    import { onMount } from 'svelte'
    import { getUserLocations } from '/src/repository/user'
    import { getUserPrices } from '/src/repository/price'
    import { getUserComments } from '/src/repository/comment'
    import UserComment from '/src/components/user/UserComment.svelte'
    import MediaCardContainer from '/src/components/MediaCardContainer.svelte'
    import { mediaCardModel } from '/src/models/commonModel'

    export let data

    let prices = []
    let locations = []
    let comments = []

    mediaCardModel.isTeachPhysically = data.user.isTeachPhysically
    mediaCardModel.isTeachRemotely = data.user.isTeachRemotely
    mediaCardModel.isOnline = data.user.isOnline
    mediaCardModel.shareUrl = import.meta.env.VITE_BASE_URL + '/' + data.user.username
    mediaCardModel.username = data.user.username
    mediaCardModel.genderName = data.user.genderName
    mediaCardModel.shareText = `${data.user.firstName} ${data.user.lastName}`
    mediaCardModel.title = `${data.user.firstName} ${data.user.lastName}`
    mediaCardModel.subTitle = data.user.title
    mediaCardModel.description = data.user.about
    mediaCardModel.price = data.user.minimumPrice
    mediaCardModel.locationName = data.user.county?.id ? `${data.user.county?.title}, ${data.user.city?.title}` : data.user.country?.title
    mediaCardModel.totalComment = data.user.totalComment
    mediaCardModel.createdAt = data.user.createdAt
    mediaCardModel.photoUrl = import.meta.env.VITE_CDN_URL + data.user.photoUrl
    mediaCardModel.requestButtonUrl = '/ozel-ders-talebi-olustur/' + data.user.username

    onMount(async () => {
        prices = await getUserPrices(data.user.username)
        locations = await getUserLocations(data.user.username)
        comments = await getUserComments(data.user.username)
    })
</script>

<svelte:head>
    <title>{data.user.firstName} {data.user.lastName} Özel Ders Profil Sayfası {data.user.cityName}</title>
</svelte:head>

<div class="lg:flex lg:flex-row gap-6 bg-white p-6 rounded-lg shadow-md mt-4">
    <MediaCardContainer data="{mediaCardModel}" />
</div>

{#if prices.length > 0}
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
                {#each prices as price}
                    <tr class="border-t border-gray-200">
                        <td class="py-2">{#if (price.slug)}<a href="/ders/{price.slug}" target="_blank" rel="noreferrer">{price.subject.title} - {price.level.title}</a>{:else}{price.subject.title} - {price.level.title}{/if}</td>
                        <td align="right">{#if (price.pricePrivate > 0)}{price.pricePrivate}<span class="text-xs">₺</span>{:else}-{/if}</td>
                        <td align="right">{#if (price.priceLive > 0)}{price.priceLive}<span class="text-xs">₺</span>{:else}-{/if}</td>
                    </tr>
                {/each}
                </tbody>
            </table>
        </div>
    </div>
{/if}

{#if locations.length > 0}
    <div class="bg-white rounded-lg shadow-md mt-4">
        <div class="bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold">Yüz Yüze Ders Verdiği Lokasyonlar</div>
        <div class="flex flex-col gap-4 p-6">
            {#each locations as location}
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

{#if comments.length > 0}
    <div class="bg-white rounded-lg shadow-md mt-4">
        <div class="bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold">Yorumlar</div>
        <div class="p-6">
            {#each comments as comment, index}
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
