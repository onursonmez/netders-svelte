<script>
    import { addComment } from '/src/repository/comment'
    import { page } from '$app/stores'

    import Toastify from 'toastify-js'
    import { Tooltip } from 'flowbite-svelte'

    export let username

    let commentData = {
        username: username,
        rate: 5,
        fullName: $page.data.user?.id ? $page.data.user?.firstName + ' ' + $page.data.user.lastName : '',
        email: $page.data.user?.id ? $page.data.user.email : '',
        comment: '',
    }

    const onComment = async () => {
        if(commentData.rate < 1 && commentData.rate > 5){
            Toastify({text: "Oy için bir ⭐ seçmediniz", className: "warning", gravity: "bottom"}).showToast()
        } else if(commentData.fullName === ''){
            Toastify({text: "Lütfen adınızı yazınız 😞", className: "warning", gravity: "bottom"}).showToast()
        } else if(commentData.email === ''){
            Toastify({text: "Lütfen e-posta adresinizi yazınız 😞", className: "warning", gravity: "bottom"}).showToast()
        }  else if(commentData.comment.length < 10){
            Toastify({text: "Yorumunuz en az 10 karakterden oluşmalıdır 😞", className: "warning", gravity: "bottom"}).showToast()
        } else {
            await addComment(commentData)
            Toastify({text: "Yorumunuz kaydedildi ve onay bekliyor 🤗", className: "info", gravity: "bottom"}).showToast()
            commentData = {
                username: username,
                rate: 5,
                fullName: $page.data.user?.id ? $page.data.user?.firstName + ' ' + $page.data.user.lastName : '',
                email: $page.data.user?.id ? $page.data.user.email : '',
                comment: '',
            }
        }
    }
</script>

<form on:submit|preventDefault={onComment} class="grid grid-cols-2 gap-4 max-w-2xl mx-auto">

    <div class="col-span-2 mx-auto emotionRatings flex gap-4">
        <img on:click={() => commentData.rate = 1} src="{import.meta.env.VITE_CDN_URL}emotion-1.svg" class="w-12 h-12 opacity-40 hover:opacity-100 cursor-pointer inline-block" class:opacity-40={commentData.rate !== 1} alt="Çok kötü" />
        <Tooltip style="custom" class="text-xs bg-red-700 border-red-700 text-white transition-opacity ease-in duration-700 opacity-100">Çok Kötü</Tooltip>

        <img on:click={() => commentData.rate = 2} src="{import.meta.env.VITE_CDN_URL}emotion-2.svg" class="w-12 h-12 opacity-40 hover:opacity-100 cursor-pointer inline-block" class:opacity-40={commentData.rate !== 2} alt="Kötü" />
        <Tooltip style="custom" class="text-xs bg-orange-500 border-orange-500 text-white transition-opacity ease-in duration-700 opacity-100">Kötü</Tooltip>

        <img on:click={() => commentData.rate = 3} src="{import.meta.env.VITE_CDN_URL}emotion-3.svg" class="w-12 h-12 opacity-40 hover:opacity-100 cursor-pointer inline-block" class:opacity-40={commentData.rate !== 3} alt="Normal" />
        <Tooltip style="custom" class="text-xs bg-gray-500 border-gray-500 text-white transition-opacity ease-in duration-700 opacity-100">İyi</Tooltip>

        <img on:click={() => commentData.rate = 4} src="{import.meta.env.VITE_CDN_URL}emotion-4.svg" class="w-12 h-12 opacity-40 hover:opacity-100 cursor-pointer inline-block" class:opacity-40={commentData.rate !== 4} alt="İyi" />
        <Tooltip style="custom" class="text-xs bg-blue-500 border-blue-500 text-white transition-opacity ease-in duration-700 opacity-100">Çok İyi</Tooltip>

        <img on:click={() => commentData.rate = 5} src="{import.meta.env.VITE_CDN_URL}emotion-5.svg" class="w-12 h-12 opacity-40 hover:opacity-100 cursor-pointer inline-block" class:opacity-40={commentData.rate !== 5} alt="Mükemmel" />
        <Tooltip style="custom" class="text-xs bg-blue-700 border-blue-700 text-white transition-opacity ease-in duration-700 opacity-100">Mükemmel</Tooltip>
    </div>
    <div>
        <span class="text-sm mb-1 block text-gray-500">Adın soyadın</span>
        <input type="text" bind:value="{commentData.fullName}" disabled={$page.data.user?.id} class="w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0" />
    </div>
    <div>
        <span class="text-sm mb-1 block text-gray-500">E-posta adresin</span>
        <input type="text" bind:value="{commentData.email}" disabled={$page.data.user?.id} class="w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0" />
    </div>
    <div class="col-span-2">
        <span class="text-sm mb-1 block text-gray-500">Yorumun</span>
        <textarea bind:value="{commentData.comment}" class="w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"></textarea>
    </div>
    <div class="col-span-2 mx-auto">
        <button class="bg-blue-700 hover:bg-blue-900 py-2 px-4 rounded-full justify-center text-sm flex text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2 inline-block">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
            Yorumu Gönder
        </button>
    </div>
</form>
