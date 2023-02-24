<script>
    import Cropper from 'svelte-easy-crop'
    import getCroppedImg from '/src/functions/cropImage'
    import RangeSlider from 'svelte-range-slider-pips'
    import { enhance } from '$app/forms'
    import { toast } from '/src/functions/toast'

    /** @type {import('./$types').PageData} */
    export let data;

    let crop = { x: 0, y: 0, width: 300, height: 300 }
    let cropSize = { width: 300, height: 300 }
    let zoom = 1
    let watermark = import.meta.env.VITE_BASE_URL + '/watermark.png'
    let percent, pixels, croppedImage, submitButton
    let rangeSlider = [1]
    let mimeType = 'image/jpeg'

    const handlePhoto = ((e) => {
        percent = e.percent
        pixels = e.pixels
    })

    const handleCrop = (async () => {
        const base64Image = await getCroppedImg(
            image,
            pixels,
            watermark
        )
        console.log(base64Image)

        const base64ImageData = base64Image.split(',');
        croppedImage = base64ImageData[1];

        submitButton.click()
    })

    $: if(rangeSlider) {
        zoom = rangeSlider[0]
    }

    $: id = data.photoApproval.id
    $: image = import.meta.env.VITE_CDN_URL + data.photoApproval.url

</script>

<svelte:head>
    <title>Hesabım • Fotoğraf Onayı</title>
</svelte:head>

<div>
    <div class="grow bg-white rounded-lg shadow-md">
        <div class="bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold">Fotoğraf Onayı</div>
        <div class="flex flex-col gap-4 p-6 text-center">
            <div class="w-[300px] h-[300px] bg-black relative mx-auto">
                <Cropper
                        {image}
                        bind:crop
                        bind:zoom
                        bind:cropSize
                        on:cropcomplete={e => handlePhoto(e.detail)}
                />
            </div>
            <div><RangeSlider min={1} max={10} step={0.01} bind:values={rangeSlider} /></div>
            <div>{pixels?.width} x {pixels?.height}</div>
            <div class="font-semibold text-blue-700">{data.photoApproval?.fullName}</div>
            <div>{data.photoApproval?.genderName}</div>
            <div class="flex gap-4 justify-center">
                <button on:click={handleCrop} class="bg-blue-700 hover:bg-blue-900 py-2 px-4 text-sm md:text-lg md:py-3 md:px-6 text-center rounded-full justify-center text-white block md:inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1 inline-block">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Onayla
                </button>

                <form use:enhance={({ data }) => {

                    data.set("id", id)

                    return ({ update, result }) => {
                        if (result.type === 'success') {
                            data.photoApproval = result.data
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
                >
                <button class="bg-red-700 hover:bg-red-900 py-2 px-4 text-sm md:text-lg md:py-3 md:px-6 text-center rounded-full justify-center text-white block md:inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1 inline-block">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                    Sil
                </button>
                </form>
            </div>
        </div>
    </div>
</div>

<form class="hidden" use:enhance={({ data }) => {

            data.set("id", id)
            data.set("photo", croppedImage)
            data.set("photoType", mimeType)

            return ({ update, result }) => {
                if (result.type === 'success') {
                    data.photoApproval = result.data
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
>
    <button bind:this={submitButton} type="submit"></button>
</form>
