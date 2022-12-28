<script>
    import { enhance } from '$app/forms';
    import { page } from '$app/stores';
    import { toast } from '/src/functions/toast'

    let fileInput;
    let files;
    let avatar;
    let imageBase64;
    let imageType;
    let submitButton;
    let waitingApproval = false;

    if($page.data.user.photoUrl){
        avatar = import.meta.env.VITE_CDN_URL + $page.data.user.photoUrl
    }

    function getBase64(image) {
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = e => {
            avatar = e.target.result;
            imageType = image.type
            const imgData = e.target.result.split(',');
            imageBase64 = imgData[1];
            submitButton.click()
        }
    }
</script>

<div class="w-[150px] h-[150px] bg-white bg-cover mx-auto rounded-full cursor-pointer" style="background-image: url({avatar ?? ''})" on:click={ () => fileInput.click() }>
    {#if !avatar}
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 flex items-center mx-auto h-full">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
    </svg>
    {/if}
    <input class="hidden" type="file" accept=".png,.jpg" bind:files bind:this={fileInput} on:change={() => getBase64(files[0])}/>
</div>

<form class="hidden" id="uploadForm" use:enhance={({ data }) => {

            data.set("photo", imageBase64)
            data.set("photoType", imageType)

            return ({ update, result }) => {
                if (result.type === 'success') {
                    waitingApproval = true
				    toast("Başarılı! Fotoğrafın inceleniyor.", "success")
			    }
                update({ reset: false });
            };
        }} method="POST" action="?/upload">
    <button type="submit" bind:this={submitButton} class="hidden">Yükle</button>
</form>

<p class="text-center mt-2 text-xs text-gray-400 {waitingApproval ? 'block' : 'hidden'}">Onay bekliyor</p>
