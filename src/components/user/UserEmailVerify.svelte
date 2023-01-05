<script>
    import { page } from '$app/stores';
    import { enhance } from '$app/forms';
    import { toast } from '/src/functions/toast'
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    let step = 1
    let code = []

    const value = new Array(6).fill("")
    const handleOTPInput = (ev, i) => i < value.length - 1 && ev.target.nextSibling.focus()
</script>

<div class="grow bg-white rounded-lg shadow-md">
    <div class="bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold">E-posta Doğrulaması</div>

    <div class="p-6">
        {#if (step === 1)}
            <form use:enhance={() => {
            return ({ update, result }) => {
                if(result.status === 409) {
                    dispatch('closeEmailConfirmationModal', true);
                }
                if (result.type === 'success') {
				    toast("E-posta adresine doğrulama kodu gönderildi", "success")
				    step = 2
			    }

                update({ reset: false });
            };
        }}
                  method="POST"
                  action="?/sendVerifyEmail"
                  class="flex flex-col space-y-6"
            >
                <p class="text-center">E-posta adresini henüz doğrulamadın. <span class="font-semibold">{$page.data.user.email}</span> e-posta adresine doğrulama kodu göndermek için aşağıdaki butona tıkla.</p>
                <p class="text-center text-blue-700 cursor-pointer" on:click={() => step = 2}>Zaten bir doğrulama kodum var.</p>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2">Doğrulama kodu gönder</button>
            </form>
        {:else}
            <form use:enhance={({ data }) => {

            data.set("code", code.join(''))

            return ({ result }) => {
                if (result.type === 'success') {
				    toast("E-posta doğrulaması başarılı!", "success")
				    dispatch('closeEmailConfirmationModal', true);
			    }

                if(Object.entries(result.data.errors).length){
                    Object.entries(result.data.errors).forEach(i => {
                        toast(i[1], 'warning')
                    })
                }
            };
        }}
                  method="POST"
                  action="?/verifyEmail"
                  class="flex flex-col space-y-6"
            >
                <p class="text-center"><span class="font-semibold">{$page.data.user.email}</span> e-posta adresine gönderilen altı haneli doğrulama kodunu aşağıdaki kutulara girip E-posta adresimi doğrula butonuna tıkla.</p>
                <div class="flex flex-row justify-center text-center px-2 mt-2">
                    {#each value as v, i}
                        <input name="code[{i}]" bind:value={code[i]} type="text" class="m-2 border h-10 w-10 text-center rounded border border-gray-300" autocomplete="off" maxlength="1" on:input={(ev) => handleOTPInput(ev, i)} />
                    {/each}
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2">E-posta adresimi doğrula</button>
            </form>
        {/if}
    </div>
</div>

