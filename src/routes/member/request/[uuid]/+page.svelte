<script>
    import { page } from '$app/stores';
    import { Tooltip } from 'flowbite-svelte'

    let tableDiv,requestDetailDiv
    $: if (requestDetailDiv && tableDiv) {
        console.log(requestDetailDiv.offsetWidth)
        tableDiv.style.width = requestDetailDiv.offsetWidth + 'px';
        tableDiv.classList.remove('hidden')
    }
</script>

<svelte:head>
    <title>Hesabım • Ders Talepleri</title>
</svelte:head>

<div class="w-full flex flex-col gap-4">
    <div class="grow bg-white rounded-lg shadow-md" bind:this={requestDetailDiv}>
        <div class="bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold">Talep Bilgileri</div>
        <div class="p-6 text-sm">
            <div class="lg:flex lg:flex-row gap-6">
                <div class="basis-3/12 xl:basis-2/12 hidden lg:block">
                    <img src="{import.meta.env.VITE_CDN_URL}home-icon-ilkogretim.svg" alt="İlköğretim Takviye"/>
                </div>
                <div class="basis-9/12 xl:basis-10/12">
                    <h1 class="text-lg font-semibold leading-none mb-2">İlköğretim Takviye → Türkçe</h1>
                    <div class="mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                        Özlem Koru, 0532 346 72 63
                    </div>
                    <div class="mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        İstanbul, Maltepe
                    </div>
                    <div class="mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                        </svg>
                        Erkek Öğretmen
                    </div>
                    <div class="mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                        </svg>
                        100 - 150₺
                    </div>
                    <div class="mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                        </svg>
                        <span class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2">
                                Öğrenci evi
                            </span>
                        <span class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2">
                                Öğretmen evi
                            </span>
                        <span class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2">
                                Uzaktan <span class="hidden md:block">(webcam)</span>
                            </span>
                    </div>
                </div>
            </div>
            <div class="mt-4">
                    <span class="font-semibold mb-1 block">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                        </svg>
                        Talep sahibi mesajı
                    </span>
                <p>Merhabalar hocam ben Muğla dalamanda yaşıyorum. Oğlum için istiyorum 1.sinifta aslında öğrenme güçlüğü yok ama öğretmeniyle bağ kuramadi okuyup yaziyor ama bir yerden sonra destek alması gerekiyor çünkü okulda işler yolunda gitmediğinden öğretmeni ve arkadaşlarıyla uyum yakaliyamadigi için ders yapmak istemiyor. Dersleri kendi evimizde kadın hocadan istiyoruz. Detayları telefonda görüşürsek sevinirim. Teşekkürler.</p>
            </div>
        </div>
        <div class="bg-[#fbfcff] border-t border-gray-100 p-6 rounded-b-lg">

            {#if !$page.data.user.roles.includes('ROLE_TEACHER')}
                .....
            {/if}

            <div class="hidden">
                <textarea name="message" class="p-2 px-4 border-gray-200 rounded-lg w-full" placeholder="Yapılan işleme ait mesaj"></textarea>
            </div>

            <div class="flex gap-4 justify-between mt-4">

                <div class="hidden">
                    <button class="flex justify-center w-full gap-2 bg-red-700 hover:bg-red-900 text-white items-center p-2 px-4 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                        </svg>
                        Reddet
                    </button>
                </div>

                <div class="hidden">
                    <button class="flex justify-center w-full gap-2 bg-red-700 hover:bg-red-900 text-white items-center p-2 px-4 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        İptal Et
                    </button>
                </div>

                <div class="hidden">
                    <button class="flex justify-center w-full gap-2 bg-red-700 hover:bg-red-900 text-white items-center p-2 px-4 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                        </svg>
                        Havuzdan Kaldır
                    </button>
                </div>

                <div class="hidden">
                    <button class="flex justify-center w-full gap-2 bg-blue-700 hover:bg-blue-900 text-white items-center p-2 px-4 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                        </svg>
                        Havuza Ekle
                    </button>
                </div>

                <div class="hidden">
                    <button class="flex justify-center w-full gap-2 bg-blue-700 hover:bg-blue-900 text-white items-center p-2 px-4 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Onayla
                    </button>
                </div>

                <div class="hidden">
                    <button class="flex justify-center w-full gap-2 bg-blue-700 hover:bg-blue-900 text-white items-center p-2 px-4 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Kabul Et
                    </button>
                </div>

                <div  class="hidden">
                <span class="flex justify-center w-full gap-2 items-center font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Öğrenci seçimi bekleniyor
                </span>
                </div>

                <div class="hidden">
                <span class="flex justify-center w-full gap-2 text-green-500 items-center font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Ders için seçildin
                </span>
                </div>

                <div class="hidden">
                <span class="flex justify-center w-full gap-2 text-red-700 items-center font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                    Üzgünüz, öğrenci başka bir öğretmen ile devam etme kararı aldı
                </span>
                </div>
            </div>

        </div>
    </div>


    <div class="grow bg-white rounded-lg shadow-md">
        <div class="bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold">Talebi Kabul Eden Öğretmenler</div>
        <div class="flex flex-col gap-6 p-6">






            <div>
                <div class="bg-white p-6 rounded-t-lg border-t border-l border-r border-gray-100 text-sm">
                    <div class="lg:flex lg:flex-row gap-6">
                        <div class="basis-3/12 xl:basis-2/12 hidden lg:block">
                            <img src="https://netders.com/users/photo_12315_1556105373.jpg" class="rounded-full" alt=""/>
                        </div>
                        <div class="basis-9/12 xl:basis-10/12">
                            <h1 class="text-lg font-semibold text-blue-700 leading-none mb-2">Büşra Akyüz</h1>
                            <p class="font-semibold">İngilizce öğrenmek artık daha kolay.</p>
                            <div class="flex justify-between">
                                <div class="mt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                    150 ₺
                                </div>
                                <div class="mt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                                    </svg>
                                    0 yorum
                                </div>
                                <div class="mt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                    </svg>
                                    İstanbul, Maltepe
                                </div>
                            </div>
                            <div class="mt-4">
                                <span class="font-semibold mb-1 block">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                    </svg>
                                    Öğretmenin mesajı
                                </span>
                                <p>Merhabalar hocam ben Muğla dalamanda yaşıyorum. Oğlum için istiyorum 1.sinifta aslında öğrenme güçlüğü yok ama öğretmeniyle bağ kuramadi okuyup yaziyor ama bir yerden sonra destek alması gerekiyor çünkü okulda işler yolunda gitmediğinden öğretmeni ve arkadaşlarıyla uyum yakaliyamadigi için ders yapmak istemiyor. Dersleri kendi evimizde kadın hocadan istiyoruz. Detayları telefonda görüşürsek sevinirim. Teşekkürler.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="flex justify-between items-center p-4 border border-gray-100 rounded-b-lg text-sm">
                    <div class="flex justify-start w-full gap-2 text-gray-700 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Öğretmen Seçildi
                    </div>
                </div>

            </div>



            <div>
                <div class="bg-white p-6 rounded-t-lg border-t border-l border-r border-gray-100 text-sm">
                    <div class="lg:flex lg:flex-row gap-6">
                        <div class="basis-3/12 xl:basis-2/12 hidden lg:block">
                            <img src="https://netders.com/users/photo_12315_1556105373.jpg" class="rounded-full" alt=""/>
                        </div>
                        <div class="basis-9/12 xl:basis-10/12">
                            <h1 class="text-lg font-semibold text-blue-700 leading-none mb-2">Büşra Akyüz</h1>
                            <p class="font-semibold">İngilizce öğrenmek artık daha kolay.</p>
                            <div class="flex justify-between">
                                <div class="mt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                    150 ₺
                                </div>
                                <div class="mt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                                    </svg>
                                    0 yorum
                                </div>
                                <div class="mt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                    </svg>
                                    İstanbul, Maltepe
                                </div>
                            </div>
                            <div class="mt-4">
                                <span class="font-semibold mb-1 block">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                    </svg>
                                    Öğretmenin mesajı
                                </span>
                                <p>Merhabalar hocam ben Muğla dalamanda yaşıyorum. Oğlum için istiyorum 1.sinifta aslında öğrenme güçlüğü yok ama öğretmeniyle bağ kuramadi okuyup yaziyor ama bir yerden sonra destek alması gerekiyor çünkü okulda işler yolunda gitmediğinden öğretmeni ve arkadaşlarıyla uyum yakaliyamadigi için ders yapmak istemiyor. Dersleri kendi evimizde kadın hocadan istiyoruz. Detayları telefonda görüşürsek sevinirim. Teşekkürler.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="p-4 border border-gray-100 rounded-b-lg text-sm">
                    <button class="flex gap-2 bg-blue-700 hover:bg-blue-900 text-white items-center p-2 px-4 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Öğretmeni Seç
                    </button>
                </div>

            </div>













        </div>






    </div>

    <div class="grow bg-white rounded-lg shadow-md">
        <div class="bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold">Talebe Davet Edilen Öğretmenler</div>
        <div class="flex flex-col gap-6 p-6">






            <div>
                <div class="flex gap-4 bg-white p-6 rounded-t-lg border-t border-l border-r border-gray-100 text-sm">
                    <div class="inline-block min-w-[45px]">
                        <img src="https://netders.com/users/photo_10429_1588383453.jpg" class="rounded-full w-[45px]" alt="" />
                    </div>
                    <div class="inline-block">
                        <h1 class="text-lg font-semibold text-blue-700 leading-none mb-2">Büşra Akyüz</h1>
                        <p class="font-semibold">İngilizce öğrenmek artık daha kolay.</p>
                    </div>
                </div>
                <div class="flex justify-between items-center p-4 border border-gray-100 rounded-b-lg text-sm">
                    <div class="flex justify-start w-full gap-2 text-gray-700 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <Tooltip style="custom" class="text-xs bg-blue-700 border-blue-700 text-white transition-opacity ease-in duration-700 opacity-100">İki saatlik cevap verme süresi başladı</Tooltip>
                        Talebe cevap vermesi bekleniyor
                    </div>
                </div>
            </div>

            <div>
                <div class="flex gap-4 bg-white p-6 rounded-t-lg border-t border-l border-r border-gray-100 text-sm">
                    <div class="inline-block min-w-[45px]">
                        <img src="https://netders.com/users/photo_10429_1588383453.jpg" class="rounded-full w-[45px]" alt="" />
                    </div>
                    <div class="inline-block">
                        <h1 class="text-lg font-semibold text-blue-700 leading-none mb-2">Büşra Akyüz</h1>
                        <p class="font-semibold">İngilizce öğrenmek artık daha kolay.</p>
                    </div>
                </div>
                <div class="flex justify-between items-center p-4 border border-gray-100 rounded-b-lg text-sm">
                    <div class="flex justify-start w-full gap-2 text-gray-700 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                        </svg>
                        <Tooltip style="custom" class="text-xs bg-blue-700 border-blue-700 text-white transition-opacity ease-in duration-700 opacity-100">İki saatlik cevap verme süresi zaman aşımına uğradı</Tooltip>
                        Talebe cevap vermedi
                    </div>
                </div>
            </div>

            <div>
                <div class="flex gap-4 bg-white p-6 rounded-t-lg border-t border-l border-r border-gray-100 text-sm">
                    <div class="inline-block min-w-[45px]">
                        <img src="https://netders.com/users/photo_10429_1588383453.jpg" class="rounded-full w-[45px]" alt="" />
                    </div>
                    <div class="inline-block">
                        <h1 class="text-lg font-semibold text-blue-700 leading-none mb-2">Büşra Akyüz</h1>
                        <p class="font-semibold">İngilizce öğrenmek artık daha kolay.</p>
                    </div>
                </div>
                <div class="flex justify-between items-center p-4 border border-gray-100 rounded-b-lg text-sm">
                    <div class="flex justify-start w-full gap-2 text-gray-700 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <Tooltip style="custom" class="text-xs bg-blue-700 border-blue-700 text-white transition-opacity ease-in duration-700 opacity-100">Öğretmenin mesajı talebi kabul eden öğretmenler kısmındadır</Tooltip>
                        Ders vermeyi kabul etti
                    </div>
                </div>
            </div>

            <div>
                <div class="flex gap-4 bg-white p-6 rounded-t-lg border-t border-l border-r border-gray-100 text-sm">
                    <div class="inline-block min-w-[45px]">
                        <img src="https://netders.com/users/photo_10429_1588383453.jpg" class="rounded-full w-[45px]" alt="" />
                    </div>
                    <div class="inline-block">
                        <h1 class="text-lg font-semibold text-blue-700 leading-none mb-2">Büşra Akyüz</h1>
                        <p class="font-semibold">İngilizce öğrenmek artık daha kolay.</p>
                    </div>
                </div>
                <div class="flex justify-between items-center p-4 border border-gray-100 rounded-b-lg text-sm">
                    <div class="flex justify-start w-full gap-2 text-gray-700 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                        </svg>
                        <Tooltip style="custom" class="text-xs bg-blue-700 border-blue-700 text-white transition-opacity ease-in duration-700 opacity-100">İnanılmaz bir yoğunluğum var lütfen kusura bakma. İnanılmaz bir yoğunluğum var lütfen kusura bakma.</Tooltip>
                        Ders vermeyi kabul etmedi
                    </div>
                </div>
            </div>










        </div>

        <div class="flex justify-end bg-[#fbfcff] border-t border-gray-100 p-6 rounded-b-lg">
            <button class="flex gap-2 bg-blue-700 hover:bg-blue-900 text-white items-center p-2 px-6 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline-block">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                </svg>
                Öğretmen Davet Et
            </button>
        </div>

    </div>

    <div class="grow bg-white rounded-lg shadow-md">
        <div class="bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold">İşlem Geçmişi</div>

        <div class="flex flex-auto overflow-x-auto hidden rounded-b-lg" bind:this={tableDiv}>
            <table class="table-auto overflow-x-scroll w-full divide-y divide-gray-100">
                <thead class="bg-gray-50">
                <tr>

                    <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700">TARİH</th>
                    <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700">İŞLEM SAHİBİ</th>
                    <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700">AKSİYON</th>
                    <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700">AÇIKLAMA</th>
                </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-100 text-xs">
                <tr class="hover:bg-gray-50">
                    <td class="py-4 px-6  text-gray-500 whitespace-nowrap">01.11.2022 18:30</td>
                    <td class="py-4 px-6  text-gray-900 whitespace-nowrap">Harun Yahya (Öğrenci)</td>
                    <td class="py-4 px-6  text-gray-900 whitespace-nowrap">Onay Bekliyor</td>
                    <td class="py-4 px-6  text-gray-500 whitespace-nowrap">Talep öğrenci tarafından oluşturuldu.</td>
                </tr>
                <tr class="hover:bg-gray-50">
                    <td class="py-4 px-6  text-gray-500 whitespace-nowrap">01.11.2022 18:30</td>
                    <td class="py-4 px-6  text-gray-900 whitespace-nowrap">Mustafa Çiçek (Moderatör)</td>
                    <td class="py-4 px-6  text-gray-900 whitespace-nowrap">Öğretmen Bekliyor</td>
                    <td class="py-4 px-6  text-gray-500 whitespace-nowrap">Öğrenciyle görüşüldü, evinde, erkek öğretmenden ders almak istiyor. ders almak istiyor.</td>
                </tr>
                <tr class="hover:bg-gray-50">
                    <td class="py-4 px-6  text-gray-500 whitespace-nowrap">01.11.2022 18:30</td>
                    <td class="py-4 px-6  text-gray-900 whitespace-nowrap">Mustafa Çiçek (Moderatör)</td>
                    <td class="py-4 px-6  text-gray-900 whitespace-nowrap">İptal Edildi</td>
                    <td class="py-4 px-6  text-gray-500 whitespace-nowrap">Öğrenci sistemi denemiş.</td>
                </tr>
                <tr class="hover:bg-gray-50">
                    <td class="py-4 px-6  text-gray-500 whitespace-nowrap">01.11.2022 18:30</td>
                    <td class="py-4 px-6  text-gray-900 whitespace-nowrap">Mustafa Çiçek (Moderatör)</td>
                    <td class="py-4 px-6  text-gray-900 whitespace-nowrap">Talep Havuza Gönderildi</td>
                    <td class="py-4 px-6  text-gray-500 whitespace-nowrap">Talep bu alanda hizmet veren tüm öğretmenlere açıldı.</td>
                </tr>
                <tr class="hover:bg-gray-50">
                    <td class="py-4 px-6  text-gray-500 whitespace-nowrap">01.11.2022 18:30</td>
                    <td class="py-4 px-6  text-gray-900 whitespace-nowrap">Mustafa Çiçek (Moderatör)</td>
                    <td class="py-4 px-6  text-gray-900 whitespace-nowrap">Talep Havuzdan Kaldırıldı</td>
                    <td class="py-4 px-6  text-gray-500 whitespace-nowrap">Gerek yok.</td>
                </tr>
                <tr class="hover:bg-gray-50">
                    <td class="py-4 px-6  text-gray-500 whitespace-nowrap">01.11.2022 18:30</td>
                    <td class="py-4 px-6  text-gray-900 whitespace-nowrap">Hasan Çelik (Öğretmen)</td>
                    <td class="py-4 px-6  text-gray-900 whitespace-nowrap">Öğretmen Taleple İlgilendi</td>
                    <td class="py-4 px-6  text-gray-500 whitespace-nowrap">Bu alanda başarılıyım.</td>
                </tr>
                <tr class="hover:bg-gray-50">
                    <td class="py-4 px-6  text-gray-500 whitespace-nowrap">01.11.2022 18:30</td>
                    <td class="py-4 px-6  text-gray-900 whitespace-nowrap">Harun Yahya (Öğrenci)</td>
                    <td class="py-4 px-6  text-gray-900 whitespace-nowrap">Öğretmen Ders Talebine Davet Edildi</td>
                    <td class="py-4 px-6  text-gray-500 whitespace-nowrap">Büşra Akyüz</td>
                </tr>
                <tr class="hover:bg-gray-50">
                    <td class="py-4 px-6  text-gray-500 whitespace-nowrap">01.11.2022 18:30</td>
                    <td class="py-4 px-6  text-gray-900 whitespace-nowrap">Büşra Akyüz (Öğretmen)</td>
                    <td class="py-4 px-6  text-gray-900 whitespace-nowrap">Öğretmen Ders Vermeyi Kabul Etti</td>
                    <td class="py-4 px-6  text-gray-500 whitespace-nowrap">Size en iyi şekilde ders veririm.</td>
                </tr>
                <tr class="hover:bg-gray-50">
                    <td class="py-4 px-6  text-gray-500 whitespace-nowrap">01.11.2022 18:30</td>
                    <td class="py-4 px-6  text-gray-900 whitespace-nowrap">Büşra Akyüz (Öğretmen)</td>
                    <td class="py-4 px-6  text-gray-900 whitespace-nowrap">Öğretmen Ders Talebine Cevap Vermedi</td>
                    <td class="py-4 px-6  text-gray-500 whitespace-nowrap">Davet 1 saatlik zaman aşımına uğradı.</td>
                </tr>
                <tr class="hover:bg-gray-50">
                    <td class="py-4 px-6  text-gray-500 whitespace-nowrap">01.11.2022 18:30</td>
                    <td class="py-4 px-6  text-gray-900 whitespace-nowrap">Büşra Akyüz (Öğretmen)</td>
                    <td class="py-4 px-6  text-gray-900 whitespace-nowrap">Öğretmen Ders Talebini Kabul Etmedi</td>
                    <td class="py-4 px-6  text-gray-500 whitespace-nowrap">Çok yoğunum maalesef.</td>
                </tr>
                <tr class="hover:bg-gray-50">
                    <td class="py-4 px-6  text-gray-500 whitespace-nowrap">01.11.2022 18:30</td>
                    <td class="py-4 px-6  text-gray-900 whitespace-nowrap">Harun Yahya (Öğrenci)</td>
                    <td class="py-4 px-6  text-gray-900 whitespace-nowrap">Öğretmen Bulundu</td>
                    <td class="py-4 px-6  text-gray-500 whitespace-nowrap">Büşra Akyüz</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
