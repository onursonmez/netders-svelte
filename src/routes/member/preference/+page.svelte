<script>
    import { Toggle } from 'flowbite-svelte'
    import { onMount } from 'svelte'
    import { toast } from '/src/functions/toast'

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
    let pageData = []

    pageData.selectedPrivacyLastName = false

    onMount( async () => {
        pageData = data.user
        if(pageData.privacyLastName?.id === 1){
            pageData.selectedPrivacyLastName = true
        }
    })

</script>

<svelte:head>
    <title>Hesabım • Hakkında</title>
</svelte:head>

<div>
    <div class="grow bg-white rounded-lg shadow-md">
        <div class="bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold">Tercihler</div>

        <form method="POST" use:enhance={({ data }) => {

            data.set("privacyLastName", pageData.selectedPrivacyLastName)

            return ({ update, result }) => {

                loading = false

                if (result.type === 'success') {
				    toast("Bilgilerin başarıyla kaydedildi!", "success")
			    }
                update({ reset: false });
            };
        }}
              on:submit={() => loading = true}
        >

            <div class="p-6">
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        Soyadımı Göster
                    </div>
                    <div>
                        <Toggle value="1" on:change={pageData.selectedPrivacyLastName = !pageData.selectedPrivacyLastName} checked={pageData.privacyLastName?.id === 1}> </Toggle>
                    </div>
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
                        <span>Kaydet</span>
                    </button>
                {/if}
            </div>
        </form>
    </div>
</div>
