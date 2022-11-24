<script>
    import { page } from '$app/stores';
    import errorImage from '$lib/images/error.svg'

    console.log($page.error)
</script>

<div class="mt-4 bg-white p-12 rounded-md shadow-md text-center">
    <div class="mt-2 text-7xl font-bold">{$page.status}</div>
    <img src="{errorImage}" width="300" class="mx-auto my-12">

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
