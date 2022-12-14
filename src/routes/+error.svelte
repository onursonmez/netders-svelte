<script>
    import '/src/routes/styles.css'
    import '/src/app.css'
    import { page } from '$app/stores'
</script>

<div class="flex justify-center text-center py-8">
    <div>
    <div class="mt-2 text-7xl font-bold">{$page.status}</div>
    <img src="{import.meta.env.VITE_CDN_URL}/error.svg" width="300" class="mx-auto my-12" alt="">

    {#if ($page.error.message)}
    <div class="text-2xl font-bold">Hay aksi! Teknik bir hata oluştu.</div>
    <div class="mt-2">Teknik ekibimiz konunun çözümü için çalışmalarını sürdürüyor. En kısa süre içerisinde problemin çözüleceğini bildirmek isteriz.</div>
    <div class="mt-2 text-xs text-gray-300">{$page.error.message}</div>
    {:else if ($page.error)}
        {#each Object.values($page.error) as error}
            <div class="mt-2">{error}</div>
        {/each}
    {/if}
    </div>
</div>
