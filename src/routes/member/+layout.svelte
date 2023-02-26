<script>
    import MemberHorizontalNavigation from '/src/components/MemberHorizontalNavigation.svelte'
    import MemberVerticalNavigation from '/src/components/MemberVerticalNavigation.svelte'
    import { enhance } from '$app/forms';

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<MemberHorizontalNavigation />

<div class="flex flex-col lg:flex-row gap-4 mt-4">
    <div class="min-w-[220px]">
        <div class="hidden lg:block">
            <MemberVerticalNavigation />
        </div>
    </div>

    <div class="w-full">
        {#if data.auth.roles.includes('ROLE_TEACHER') && data.auth.status.id === 2 && data.auth.requirement === true}
        <div class="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 shadow-md flex lg:flex-row flex-col gap-2 justify-between items-center" role="alert">
            <div class="text-center lg:text-left">
                Profilin arama sonuçlarında yer almıyor!
            </div>
            <a href="/member/requirement" class="flex gap-2 items-center rounded-full border border-yellow-700 py-1 px-4 hover:bg-yellow-100">
                <span>Nedenini öğren</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </a>
        </div>
        {/if}

        {#if data.auth.roles.includes('ROLE_TEACHER') && data.auth.status.id === 2 && data.auth.requirement === false}
        <div class="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 shadow-md flex lg:flex-row flex-col gap-2 justify-between items-center" role="alert">
            <div class="text-center lg:text-left">
                Profilinin zorunlu eksiklerini tamamlandın. Hazır olduğunda incelemeye gönderebilirsin.
            </div>

            <form use:enhance method="POST" action="/?/sendApprove">
            <button class="flex gap-2 items-center rounded-full border border-blue-700 py-1 px-4 hover:bg-blue-100">
                <span>İncelemeye gönder</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </button>
            </form>
        </div>
        {/if}

        {#if data.auth.status.id === 3}
        <div class="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 shadow-md" role="alert">
            Profilinin incelenme aşamasındadır. En kısa süre içerisinde e-posta ile bilgilendirileceksin.
        </div>
        {/if}

        <slot />
    </div>
</div>

