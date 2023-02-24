import { c as create_ssr_component, a as subscribe, e as escape, b as add_classes, d as add_attribute, v as validate_component } from "../../chunks/index3.js";
/* empty css                */import "devalue";
import { p as page, n as navigating } from "../../chunks/stores.js";
import "@builder.io/partytown/integration";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let photoUrl = $page.data.auth?.photo?.url ? "https://d1ql1h7f6x0zr6.cloudfront.net/" + $page.data.auth.photo.url : "https://d1ql1h7f6x0zr6.cloudfront.net/icon-user.png";
  {
    if ($page.data.auth?.photo?.url) {
      photoUrl = "https://d1ql1h7f6x0zr6.cloudfront.net/" + $page.data.auth.photo.url;
    }
  }
  $$unsubscribe_page();
  return `<header><nav class="${"shadow-md bg-white"}"><div class="${"mx-auto max-w-[90%]"}"><div class="${"relative flex h-16 items-center justify-between"}"><div class="${"absolute inset-y-0 left-0 flex items-center lg:hidden"}">
					<button type="${"button"}" class="${"inline-flex items-center justify-center rounded-md text-gray-400 hover:text-blue-700 ring-0"}" aria-controls="${"mobile-menu"}" aria-expanded="${"false"}"><span class="${"sr-only"}">Open main menu</span>

						<svg class="${["h-6 w-6", ""].join(" ").trim()}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}"></path></svg>

						<svg class="${["h-6 w-6", "hidden"].join(" ").trim()}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M6 18L18 6M6 6l12 12"}"></path></svg></button></div>
				<div class="${"flex flex-1 items-center justify-center lg:items-stretch lg:justify-start"}"><div class="${"flex flex-shrink-0 items-center"}"><a href="${"/"}"><img class="${"h-8 w-auto"}" src="${escape("https://d1ql1h7f6x0zr6.cloudfront.net/", true) + "netders-logo-blue.svg"}" alt="${"Netders.com"}"></a></div>
					<div class="${"flex space-x-4 hidden lg:ml-6 lg:block w-full text-center"}"><a href="${"/ozel-ders"}" class="${"px-3 py-2 rounded-md text-sm font-medium hover:text-blue-700"}" aria-current="${"page"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}" class="${"w-5 h-5 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"}"></path></svg>
							Öğretmen Ara
						</a>

						<a href="${"/ozel-ders-talebi-olustur"}" class="${"hidden px-3 py-2 rounded-md text-sm font-medium hover:text-blue-700"}" aria-current="${"page"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}" class="${"w-5 h-5 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"}"></path></svg>
							Ders Talepleri
						</a>

						<a href="${"/nasil-calisir"}" class="${"px-3 py-2 rounded-md text-sm font-medium hover:text-blue-700"}" aria-current="${"page"}">Nasıl Çalışır?</a>

						<a href="${"/yardim"}" class="${"px-3 py-2 rounded-md text-sm font-medium hover:text-blue-700"}" aria-current="${"page"}">Yardım</a>

						<a href="${"/iletisim"}" class="${"px-3 py-2 rounded-md text-sm font-medium hover:text-blue-700"}" aria-current="${"page"}">İletişim</a></div></div>
				<div class="${"absolute inset-y-0 right-0 flex items-center lg:static lg:inset-auto lg:ml-6 lg:pr-0"}"><button type="${"button"}" class="${"hidden rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"}"><span class="${"sr-only"}">View notifications</span>
						
						<svg class="${"h-6 w-6"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"}"></path></svg></button>

					
					<div class="${"relative ml-3"}"><div>${$page.data.auth ? `<button type="${"button"}" class="${"flex rounded-full text-sm"}" id="${"user-menu-button"}" aria-expanded="${"false"}" aria-haspopup="${"true"}"><span class="${"sr-only"}">Open user menu</span>
									<span class="${"h-8 w-8 bg-cover rounded-full border border-gray-200"}" style="${"background-image: url(" + escape(photoUrl, true) + ")"}"></span></button>` : `<button class="${"bg-blue-700 px-6 py-2 rounded-full justify-center text-sm text-white"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"}"></path></svg>

									Giriş
								</button>`}</div>
						${$page.data.auth ? `<div class="${[
    "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
    "hidden"
  ].join(" ").trim()}" role="${"menu"}" aria-orientation="${"vertical"}" aria-labelledby="${"user-menu-button"}" tabindex="${"-1"}"><a href="${"/member/account"}" class="${"block px-4 py-2 text-sm text-gray-700"}" role="${"menuitem"}" tabindex="${"-1"}" id="${"user-menu-item-0"}">Hesabım</a>
								<form method="${"POST"}" action="${"/?/logout"}"><button class="${"block px-4 py-2 text-sm text-gray-700"}">Güvenli Çıkış</button></form></div>` : ``}</div></div></div></div>

		
		<div id="${"mobile-menu"}"${add_classes("hidden".trim())}><div class="${"space-y-1 px-2 pt-2 pb-3"}"><a href="${"/member/account"}" class="${"hover:text-blue-700 block px-3 py-2 rounded-md text-base"}">Hesabım</a>
				<form method="${"POST"}" action="${"/?/logout"}"><button class="${"hover:text-blue-700 block px-3 py-2 rounded-md text-base"}">Güvenli Çıkış</button></form></div></div></nav>
</header>`;
});
const PreloadingIndicator_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".progress-container.svelte-mkb8u0{position:absolute;top:0;left:0;width:100%;height:4px;z-index:999}.progress.svelte-mkb8u0{position:absolute;left:0;top:0;height:100%;background-color:#1A56DB;transition:width 0.4s}.fade.svelte-mkb8u0{position:fixed;width:100%;height:100%;background-color:rgba(255, 255, 255, 0.3);pointer-events:none;z-index:998;animation:svelte-mkb8u0-fade 0.4s}@keyframes svelte-mkb8u0-fade{from{opacity:0}to{opacity:1}}",
  map: null
};
const PreloadingIndicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `${``}

${``}`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: `.app.svelte-95lviu{display:flex;flex-direction:column;min-height:100vh}main.svelte-95lviu{flex:1;display:flex;flex-direction:column;width:100%;max-width:90%;margin:0 auto;box-sizing:border-box}footer.svelte-95lviu{flex:1;display:flex;flex-direction:column;width:100%;max-width:90%;margin:0 auto;box-sizing:border-box}.invite-friend-background.svelte-95lviu{background-color:#ffaa00;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpath fill='%23ffb100' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%23ffb800' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%23ffbe00' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%23ffc500' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%23ffcc00' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%23ffd914' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%23ffe529' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%23ffef3d' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%23fff852' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%23ffff66' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E");background-attachment:fixed;background-size:cover}`,
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $navigating, $$unsubscribe_navigating;
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  let scriptEl;
  $$result.css.add(css);
  $$unsubscribe_navigating();
  return `${$$result.head += `<!-- HEAD_svelte-msp1d8_START --><script>partytown = {
			forward: ['dataLayer.push'],
			resolveUrl: (url) => {
				return url
			}
		}
	<\/script><script${add_attribute("this", scriptEl, 0)}><\/script><script type="${"text/partytown"}" src="${"https://www.googletagmanager.com/gtag/js?id=G-N12QC6M7CQ"}"><\/script><script type="${"text/partytown"}">window.dataLayer = window.dataLayer || []

		function gtag() {
			dataLayer.push(arguments)
		}

		gtag('js', new Date())
		gtag('config', 'G-N12QC6M7CQ', {
			page_path: window.location.pathname
		})
	<\/script><link rel="${"canonical"}"${add_attribute("href", "https://netders.com", 0)}><!-- HEAD_svelte-msp1d8_END -->`, ""}

${$navigating ? `${validate_component(PreloadingIndicator, "PreloadingIndicator").$$render($$result, {}, {}, {})}` : ``}

<div class="${"app svelte-95lviu"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

	<main class="${"svelte-95lviu"}">${slots.default ? slots.default({}) : ``}</main>

	<footer class="${"svelte-95lviu"}"><div class="${"hidden bg-white rounded-lg shadow-md mt-4 p-4 lg:p-8 invite-friend-background lg:text-xl flex flex-col lg:flex-row items-center gap-4 text-center lg:text-left lg:justify-between svelte-95lviu"}"><div>Arkadaşını davet et <span class="${"font-bold text-lg lg:text-2xl animate-pulse"}">50₺</span> indirim kazan.
				<br>
				<span class="${"text-xs"}">Arkadaşının üye olup, ilk geçerli siparişinde indirim kuponu hesabına tanımlanır.</span></div>
			<div><button class="${"bg-blue-700 hover:bg-blue-900 py-2 px-4 text-sm md:text-lg md:py-3 md:px-6 text-center rounded-full justify-center text-white block md:inline-block"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 mr-1 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"}"></path></svg>
					Hemen davet Et
				</button></div></div>

		<section class="${"shadow-md rounded-t-lg bg-white text-center text-base my-4"}"><div class="${"p-6 text-gray-500 text-sm"}">Copyright © 2013 - 2023 Netders.com
			</div>
			<div class="${"shadow-md rounded-b-lg bg-blue-700 p-6 text-white bg-top bg-no-repeat bg-contain"}" style="${"background-image:url('" + escape("https://d1ql1h7f6x0zr6.cloudfront.net/", true) + "colored-bar.jpeg')"}"><ul class="${"lg:flex justify-center mt-4 text-blue-300"}"><li class="${"mx-2 hover:text-white"}"><a href="${"/"}" class="${""}">Ana Sayfa</a></li>
					<li class="${"mx-2 hover:text-white"}"><a href="${"/ozel-ders"}">Öğretmen Ara</a></li>
					<li class="${"mx-2 hover:text-white"}"><a href="${"/nasil-calisir"}">Nasıl Çalışır?</a></li>
					<li class="${"mx-2 hover:text-white"}"><a href="${"/yardim"}">Yardım</a></li>
					<li class="${"mx-2 hover:text-white"}"><a href="${"/iletisim"}">İletişim</a></li></ul>
				<p class="${"pt-4 text-sm"}">Netders.com&#39;a üye olarak <a href="${"/"}" class="${"text-blue-300 hover:text-white"}">Kullanım Koşulları</a>&#39;nı kabul etmiş sayılırsın.</p>
				<img src="${escape("https://d1ql1h7f6x0zr6.cloudfront.net/", true) + "turkiye-white.svg"}" class="${"w-36 mx-auto py-4"}" alt="${""}">
				<ul class="${"flex justify-center text-blue-300"}"><li class="${"mx-2 hover:text-white"}"><a href="${"/kullanim-kosullari"}">Kullanım Koşulları</a></li>
					<li class="${"mx-2 hover:text-white"}"><a href="${"/gizlilik-ilkeleri"}">Gizlilik İlkeleri</a></li></ul></div></section></footer>
</div>`;
});
export {
  Layout as default
};
