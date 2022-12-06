import { c as create_ssr_component, b as subscribe, d as add_attribute, h as add_classes } from "./index.js";
import { L as Logo } from "./netders-logo-blue.js";
import { I as IconUser } from "./icon-user.js";
import { p as page } from "./stores.js";
import { u as userStore } from "./userStore.js";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userStore, $$unsubscribe_userStore;
  let $$unsubscribe_page;
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  $$unsubscribe_page = subscribe(page, (value) => value);
  let photoUrl = IconUser;
  $$unsubscribe_userStore();
  $$unsubscribe_page();
  return `<header><nav class="${"shadow-md bg-white"}"><div class="${"mx-auto max-w-[90%]"}"><div class="${"relative flex h-16 items-center justify-between"}"><div class="${"absolute inset-y-0 left-0 flex items-center lg:hidden"}">
					<button type="${"button"}" class="${"inline-flex items-center justify-center rounded-md text-gray-400 hover:text-blue-700 ring-0"}" aria-controls="${"mobile-menu"}" aria-expanded="${"false"}"><span class="${"sr-only"}">Open main menu</span>

						<svg class="${["h-6 w-6", ""].join(" ").trim()}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}"></path></svg>

						<svg class="${["h-6 w-6", "hidden"].join(" ").trim()}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M6 18L18 6M6 6l12 12"}"></path></svg></button></div>
				<div class="${"flex flex-1 items-center justify-center lg:items-stretch lg:justify-start"}"><div class="${"flex flex-shrink-0 items-center"}"><a href="${"/"}"><img class="${"h-8 w-auto"}"${add_attribute("src", Logo, 0)} alt="${"Netders.com"}"></a></div>
					<div class="${"flex space-x-4 hidden lg:ml-6 lg:block w-full text-center"}"><a href="${"/ozel-ders-ilanlari-verenler"}" class="${"px-3 py-2 rounded-md text-sm font-medium hover:text-blue-700"}" aria-current="${"page"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}" class="${"w-5 h-5 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"}"></path></svg>
							\xD6\u011Fretmen Ara
						</a>

						<a href="${"/ozel-ders-talebi-olustur"}" class="${"px-3 py-2 rounded-md text-sm font-medium hover:text-blue-700"}" aria-current="${"page"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}" class="${"w-5 h-5 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"}"></path></svg>
							Ders Talepleri
						</a>

						<a href="${"/member/account"}" class="${"px-3 py-2 rounded-md text-sm font-medium hover:text-blue-700"}" aria-current="${"page"}">Nas\u0131l \xC7al\u0131\u015F\u0131rr?</a>

						<a href="${"/detail"}" class="${"px-3 py-2 rounded-md text-sm font-medium hover:text-blue-700"}" aria-current="${"page"}">Yard\u0131m</a>

						<a href="${"/detail"}" class="${"px-3 py-2 rounded-md text-sm font-medium hover:text-blue-700"}" aria-current="${"page"}">\u0130leti\u015Fim</a></div></div>
				<div class="${"absolute inset-y-0 right-0 flex items-center lg:static lg:inset-auto lg:ml-6 lg:pr-0"}"><button type="${"button"}" class="${"hidden rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"}"><span class="${"sr-only"}">View notifications</span>
						
						<svg class="${"h-6 w-6"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"}"></path></svg></button>

					
					<div class="${"relative ml-3"}"><div>${($userStore == null ? void 0 : $userStore.username) ? `<button type="${"button"}" class="${"flex rounded-full text-sm"}" id="${"user-menu-button"}" aria-expanded="${"false"}" aria-haspopup="${"true"}"><span class="${"sr-only"}">Open user menu</span>
									<img class="${"h-8 w-8 rounded-full"}"${add_attribute("src", photoUrl, 0)} alt="${""}"></button>` : `<button class="${"bg-blue-700 px-6 py-2 rounded-full justify-center text-sm text-white"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"}"></path></svg>

									Giri\u015F
								</button>`}</div>
						${($userStore == null ? void 0 : $userStore.username) ? `<div class="${[
    "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
    "hidden"
  ].join(" ").trim()}" role="${"menu"}" aria-orientation="${"vertical"}" aria-labelledby="${"user-menu-button"}" tabindex="${"-1"}"><a href="${"/member/account"}" class="${"block px-4 py-2 text-sm text-gray-700"}" role="${"menuitem"}" tabindex="${"-1"}" id="${"user-menu-item-0"}">Hesab\u0131m</a>
								<a data-sveltekit-prefetch="${"off"}" href="${"/auth/logout"}" class="${"block px-4 py-2 text-sm text-gray-700"}" role="${"menuitem"}" tabindex="${"-1"}" id="${"user-menu-item-2"}">G\xFCvenli \xC7\u0131k\u0131\u015F</a></div>` : ``}</div></div></div></div>

		
		<div id="${"mobile-menu"}"${add_classes("hidden".trim())}><div class="${"space-y-1 px-2 pt-2 pb-3"}">
				<a href="${"/detail"}" class="${"bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"}" aria-current="${"page"}">Dashboard</a>

				<a href="${"/detail"}" class="${"text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"}">Team</a>

				<a href="${"/detail"}" class="${"text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"}">Projects</a>

				<a href="${"/detail"}" class="${"text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"}">Calendar</a></div></div></nav>
</header>`;
});
const coloredBar = "/_app/immutable/assets/colored-bar-011c28ce.jpeg";
export {
  Header as H,
  coloredBar as c
};
