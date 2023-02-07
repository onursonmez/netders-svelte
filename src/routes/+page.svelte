<script>
import Greeting from '/src/components/home/Greeting.svelte'
import Categories from '/src/components/home/Categories.svelte'
import UserSlider from '/src/components/user/UserSlider.svelte'
</script>

<svelte:head>
    <title>🚀 Özel Ders İlanları İle Özel Ders Al Veya Özel Ders Ver</title>
    <meta name="description" content="Özel ders ilanları ile kolayca özel ders alın veya özel ders verin." />
</svelte:head>

<Greeting />

<Categories />

<UserSlider />

<div class="bg-white rounded-lg shadow-md mt-4 p-4 lg:p-8 flex flex-col lg:flex-row items-center gap-4 text-center lg:text-left lg:justify-between">
    <div>
        <span class="block font-semibold text-lg">Farklı kriterlerde bir öğretmen mi arıyorsun?</span>
        <span class="block">Tüm öğretmenler arasından detaylı arama yapabilirsin.</span>
    </div>
    <div>
        <a href="/ozel-ders-ilanlari-verenler" class="bg-blue-700 hover:bg-blue-900 py-2 px-4 text-sm md:text-lg md:py-3 md:px-6 text-center rounded-full justify-center text-white block md:inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 mr-1 inline-block">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            Öğretmen ara
        </a>
    </div>
</div>
