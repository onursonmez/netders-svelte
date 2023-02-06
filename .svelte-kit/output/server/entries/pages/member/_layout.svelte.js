import { c as create_ssr_component, b as subscribe, d as add_classes, e as escape, h as add_attribute, v as validate_component } from "../../../chunks/index.js";
import { p as page } from "../../../chunks/stores.js";
import "devalue";
import "toastify-js";
const MemberHorizontalNavigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<div class="${"w-full mx-auto mt-8 mb-4 lg:hidden"}"><h2 class="${"sr-only"}">Hesab\u0131m</h2>
    <ol class="${"flex justify-around text-sm text-center"}"><li${add_classes(($page.url.pathname === "/member/account" ? "text-blue-600" : "").trim())}><a href="${"/member/account"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"}"></path></svg>
                <span class="${"hidden md:inline-block ml-1 text-xs"}">Ki\u015Fisel Bilgiler</span></a></li>

        <li${add_classes(($page.url.pathname === "/member/about" ? "text-blue-600" : "").trim())}><a href="${"/member/about"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"}"></path></svg>
                <span class="${"hidden md:inline-block ml-1 text-xs"}">Hakk\u0131nda</span></a></li>

         <li${add_classes(($page.url.pathname === "/member/request" ? "text-blue-600" : "").trim())}><a href="${"/member/request"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"}"></path></svg>
                <span class="${"hidden md:inline-block ml-1 text-xs"}">Ders Talepleri</span></a></li>

        <li${add_classes(($page.url.pathname === "/member/price" ? "text-blue-600" : "").trim())}><a href="${"/member/price"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"}"></path></svg>
                <span class="${"hidden md:inline-block ml-1 text-xs"}">Ders \xDCcretleri</span></a></li>

        <li${add_classes(($page.url.pathname === "/member/location" ? "text-blue-600" : "").trim())}><a href="${"/member/location"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"}"></path><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"}"></path></svg>
                <span class="${"hidden md:inline-block ml-1 text-xs"}">Lokasyonlar</span></a></li>

        <li${add_classes(($page.url.pathname === "/member/preference" ? "text-blue-600" : "").trim())}><a href="${"/member/preference"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"}"></path><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}"></path></svg>
                <span class="${"hidden md:inline-block ml-1 text-xs"}">Tercihler</span></a></li>

         <li class="${[
    "hidden",
    $page.url.pathname === "/member/comment" ? "text-blue-600" : ""
  ].join(" ").trim()}"><a href="${"/member/comment"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"}"></path></svg>
                <span class="${"hidden md:inline-block ml-1 text-xs"}">Yorumlar</span></a></li>

        <li class="${[
    "hidden",
    $page.url.pathname === "/member/message" ? "text-blue-600" : ""
  ].join(" ").trim()}"><a href="${"/member/message"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"}"></path></svg>
                <span class="${"hidden md:inline-block ml-1 text-xs"}">Mesajlar</span></a></li>

         <li class="${[
    "hidden",
    $page.url.pathname === "/member/order" ? "text-blue-600" : ""
  ].join(" ").trim()}"><a href="${"/member/order"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"}"></path></svg>
                <span class="${"hidden md:inline-block ml-1 text-xs"}">Sipari\u015Fler</span></a></li></ol></div>`;
});
const UserImageUpload = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let avatar;
  let submitButton;
  let waitingApproval = false;
  if ($page.data.auth.photo.url) {
    avatar = "https://d1ql1h7f6x0zr6.cloudfront.net/" + $page.data.auth.photo.url;
    waitingApproval = !$page.data.auth.photo.isApproved;
  }
  $$unsubscribe_page();
  return `<div class="${"w-[150px] h-[150px] bg-white bg-cover mx-auto rounded-full cursor-pointer"}" style="${"background-image: url(" + escape(avatar ?? "", true) + ")"}">${!avatar ? `<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-16 h-16 flex items-center mx-auto h-full"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"}"></path><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"}"></path></svg>` : ``}
    <input class="${"hidden"}" type="${"file"}" accept="${".png,.jpg"}"></div>

<form class="${"hidden"}" id="${"uploadForm"}" method="${"POST"}" action="${"?/upload"}"><button type="${"submit"}" class="${"hidden"}"${add_attribute("this", submitButton, 0)}>Y\xFCkle</button></form>

<p class="${"text-center mt-2 text-xs text-gray-400 " + escape(waitingApproval ? "block" : "hidden", true)}">Onay bekliyor</p>`;
});
const MemberVerticalNavigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a, _b, _c, _d;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<ul class="${"flex flex-col gap-1 text-sm"}"><li class="${"pb-2"}">${$page.data.auth.roles.includes("ROLE_TEACHER") ? `<div>${validate_component(UserImageUpload, "UserImageUpload").$$render($$result, {}, {}, {})}</div>` : ``}
        <div class="${"text-center font-semibold mt-2"}">Ho\u015Fgeldin, ${escape($page.data.auth.firstName)}</div>
        <div class="${"text-center mt-1 text-xs"}"><form method="${"POST"}" action="${"/?/logout"}"><button class="${"text-blue-700"}">G\xFCvenli \xC7\u0131k\u0131\u015F</button></form></div></li>
    <li><a href="${"/member/account"}" class="${"block p-2 hover:bg-white w-full rounded-md " + escape(
    $page.url.pathname === "/member/account" ? "text-blue-700 bg-white hover:bg-white shadow-md" : "",
    true
  )}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"}"></path></svg>

            Ki\u015Fisel Bilgiler
        </a></li>
    ${$page.data.auth.roles.includes("ROLE_TEACHER") ? `<li><a href="${"/member/about"}" class="${"block p-2 hover:bg-white w-full rounded-md " + escape(
    $page.url.pathname === "/member/about" ? "text-blue-700 bg-white hover:bg-white shadow-md" : "",
    true
  )}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"}"></path></svg>

            Hakk\u0131nda
        </a></li>` : ``}
    <li><a href="${"/member/request"}" class="${"block p-2 hover:bg-white w-full rounded-md " + escape(
    $page.url.pathname.includes("/member/request") ? "text-blue-700 bg-white hover:bg-white shadow-md" : "",
    true
  )}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"}"></path></svg>

            Ders Talepleri
        </a></li>
    ${$page.data.auth.roles.includes("ROLE_TEACHER") ? `<li><a href="${"/member/price"}" class="${"block p-2 hover:bg-white w-full rounded-md " + escape(
    $page.url.pathname === "/member/price" ? "text-blue-700 bg-white hover:bg-white shadow-md" : "",
    true
  )}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"}"></path></svg>

            Ders \xDCcretleri
        </a></li>
    <li><a href="${"/member/location"}" class="${"block p-2 hover:bg-white w-full rounded-md " + escape(
    $page.url.pathname === "/member/location" ? "text-blue-700 bg-white hover:bg-white shadow-md" : "",
    true
  )}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"}"></path><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"}"></path></svg>

            Ders Verilen Lokasyonlar
        </a></li>
    <li><a href="${"/member/preference"}" class="${"block p-2 hover:bg-white w-full rounded-md " + escape(
    $page.url.pathname === "/member/preference" ? "text-blue-700 bg-white hover:bg-white shadow-md" : "",
    true
  )}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"}"></path><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}"></path></svg>

            Tercihler
        </a></li>
    <li class="${"hidden"}"><a href="${"/member/comment"}" class="${"flex justify-between block p-2 hover:bg-white w-full rounded-md " + escape(
    $page.url.pathname === "/member/comment" ? "text-blue-700 bg-white hover:bg-white shadow-md" : "",
    true
  )}"><span><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"}"></path></svg>

            Yorumlar
            </span>
            <span class="${"hidden inline-block p-1 px-2 leading-none text-center whitespace-nowrap align-baseline text-xs bg-red-600 text-white rounded"}">1</span></a></li>
    <li class="${"hidden"}"><a href="${"/member/message"}" class="${"flex justify-between block p-2 hover:bg-white w-full rounded-md " + escape(
    $page.url.pathname === "/member/message" ? "text-blue-700 bg-white hover:bg-white shadow-md" : "",
    true
  )}"><span><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"}"></path></svg>

            Mesajlar
            </span>
            <span class="${"inline-block p-1 px-2 leading-none text-center whitespace-nowrap align-baseline text-xs bg-red-600 text-white rounded"}">7</span></a></li>
    <li class="${"hidden"}"><a href="${"/member/order"}" class="${"block p-2 hover:bg-white w-full rounded-md " + escape(
    $page.url.pathname === "/member/order" ? "text-blue-700 bg-white hover:bg-white shadow-md" : "",
    true
  )}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"}"></path></svg>

            Sipari\u015Fler
        </a></li>` : ``}
    ${$page.data.auth.roles.includes("ROLE_SUPER_ADMIN") && ((_a = $page.data.photoApproval) == null ? void 0 : _a.total) !== void 0 ? `<li><a href="${"/member/photo-approval"}" class="${"flex items-center w-full p-2 hover:bg-white w-full rounded-md " + escape(
    $page.url.pathname === "/member/photo-approval" ? "text-blue-700 bg-white hover:bg-white shadow-md" : "",
    true
  )}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 mr-1"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg>

                <span class="${"grow"}">Foto\u011Fraf Onay\u0131
                </span>

                <span class="${"text-xs text-white bg-orange-400 rounded-lg px-2"}">${escape((_b = $page.data.photoApproval) == null ? void 0 : _b.total)}</span></a></li>` : ``}

    ${$page.data.auth.roles.includes("ROLE_SUPER_ADMIN") && ((_c = $page.data.userApproval) == null ? void 0 : _c.total) !== void 0 ? `<li><a href="${"/member/user-approval"}" class="${"flex items-center w-full p-2 hover:bg-white w-full rounded-md " + escape(
    $page.url.pathname === "/member/user-approval" ? "text-blue-700 bg-white hover:bg-white shadow-md" : "",
    true
  )}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 mr-1"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg>

                <span class="${"grow"}">\xD6\u011Fretmen Onay\u0131
                </span>

                <span class="${"text-xs text-white bg-orange-400 rounded-lg px-2"}">${escape((_d = $page.data.userApproval) == null ? void 0 : _d.total)}</span></a></li>` : ``}</ul>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(MemberHorizontalNavigation, "MemberHorizontalNavigation").$$render($$result, {}, {}, {})}

<div class="${"flex flex-col lg:flex-row gap-4 mt-4"}"><div class="${"min-w-[220px]"}"><div class="${"hidden lg:block"}">${validate_component(MemberVerticalNavigation, "MemberVerticalNavigation").$$render($$result, {}, {}, {})}</div></div>

    <div class="${"w-full"}">${data.auth.roles.includes("ROLE_TEACHER") && data.auth.status.id === 2 && data.auth.requirement === true ? `<div class="${"p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 shadow-md flex lg:flex-row flex-col gap-2 justify-between items-center"}" role="${"alert"}"><div class="${"text-center lg:text-left"}">Profilin arama sonu\xE7lar\u0131nda yer alm\u0131yor!
            </div>
            <a href="${"/member/requirement"}" class="${"flex gap-2 items-center rounded-full border border-yellow-700 py-1 px-4 hover:bg-yellow-100"}"><span>Nedenini \xF6\u011Fren</span>
                <svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-6 h-6 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"}"></path></svg></a></div>` : ``}

        ${data.auth.roles.includes("ROLE_TEACHER") && data.auth.status.id === 2 && data.auth.requirement === false ? `<div class="${"p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 shadow-md flex lg:flex-row flex-col gap-2 justify-between items-center"}" role="${"alert"}"><div class="${"text-center lg:text-left"}">Profilinin zorunlu eksiklerini tamamland\u0131n. Haz\u0131r oldu\u011Funda incelemeye g\xF6nderebilirsin.
            </div>

            <form method="${"POST"}" action="${"/?/sendApprove"}"><button class="${"flex gap-2 items-center rounded-full border border-blue-700 py-1 px-4 hover:bg-blue-100"}"><span>\u0130ncelemeye g\xF6nder</span>
                <svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-6 h-6 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"}"></path></svg></button></form></div>` : ``}

        ${data.auth.status.id === 3 ? `<div class="${"p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 shadow-md"}" role="${"alert"}">Profilinin incelenme a\u015Famas\u0131ndad\u0131r. En k\u0131sa s\xFCre i\xE7erisinde e-posta ile bilgilendirileceksin.
        </div>` : ``}

        ${slots.default ? slots.default({}) : ``}</div></div>`;
});
export {
  Layout as default
};
