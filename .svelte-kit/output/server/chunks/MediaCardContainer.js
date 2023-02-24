import { c as create_ssr_component, e as escape, v as validate_component } from "./index3.js";
import "classnames";
/* empty css                                         */import { T as Tooltip } from "./Tooltip.js";
/* empty css                                     */import "toastify-js";
import "./dayJsStore.js";
import dayjs from "dayjs";
const Clipboard_svelte_svelte_type_style_lang = "";
const MediaCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { user } = $$props;
  let shareUrl = "https://netders.com/" + user.username;
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  return `${``}

<a href="${"/" + escape(user.username, true)}" target="${"_blank"}" rel="${"noreferrer"}"><img class="${"rounded-full mx-auto w-48 h-48"}" src="${escape("https://d1ql1h7f6x0zr6.cloudfront.net/", true) + escape(user.photoUrl, true)}" alt="${""}"></a>
<div class="${"flex flex-col w-full justify-between pl-4 leading-normal mt-2"}"><a href="${"/" + escape(user.username, true)}" target="${"_blank"}" rel="${"noreferrer"}" class="${"block lg:hidden"}"><h5 class="${"mb-2 text-xl font-bold tracking-tight text-blue-700 text-center"}">${escape(user.firstName)} ${escape(user.lastName)}</h5></a>

	<p class="${"mb-2 font-semibold text-gray-800 lg:text-base xl:text-lg dark:text-gray-400 text-center block lg:hidden"}">${escape(user.title)}</p>

	<div class="${"flex flex-row gap-2 justify-between text-gray-500 text-sm mt-1 block lg:hidden"}">${user.minimumPrice > 0 ? `<div><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 inline-block mr-1"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"}"></path></svg>
			${escape(user.minimumPrice)}₺
		</div>` : ``}

		${user.county || user.country ? `<div><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 inline-block mr-1"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"}"></path><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"}"></path></svg>
			${user.county?.id ? `${escape(user.county.title)}, ${escape(user.city.title)}` : `${escape(user.country.title)}`}</div>` : ``}

		<div><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 inline-block mr-1"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"}"></path></svg>
			${escape(user.totalComment ?? 0)} yorum
		</div></div>

	${user.about ? `${user.truncateAbout === true ? `<p class="${"text-sm text-justify leading-relaxed mt-4 block lg:hidden"}">${escape(user.about ? user.about.length > 100 ? user.about.substr(0, 100) + "..." : user.about : "")}</p>` : `<p class="${"text-sm text-justify leading-relaxed mt-4 block lg:hidden"}">${escape(user.about)}</p>`}` : ``}

	${user.showApprovedBadge || user.createdAt || user.showIsOnlineBadge || shareUrl ? `<div class="${"flex items-center justify-center gap-2 mt-4"}">${user.showApprovedBadge ? `<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 outline-none"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg>
			${validate_component(Tooltip, "Tooltip").$$render(
    $$result,
    {
      style: "custom",
      class: "text-xs bg-blue-700 border-blue-700 text-white transition-opacity ease-in duration-700 opacity-100"
    },
    {},
    {
      default: () => {
        return `Onaylı öğretmen`;
      }
    }
  )}` : ``}

		${user.createdAt ? `<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 outline-none"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"}"></path></svg>
			${validate_component(Tooltip, "Tooltip").$$render(
    $$result,
    {
      style: "custom",
      class: "text-xs bg-blue-700 border-blue-700 text-white"
    },
    {},
    {
      default: () => {
        return `${escape(dayjs(new Date(user.createdAt.date)).fromNow())} üye oldu`;
      }
    }
  )}` : ``}

		${user.showIsOnlineBadge ? `<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${["w-5 h-5 outline-none", !user.isOnline ? "text-gray-300" : ""].join(" ").trim()}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M5.636 5.636a9 9 0 1012.728 0M12 3v9"}"></path></svg>
			${validate_component(Tooltip, "Tooltip").$$render(
    $$result,
    {
      style: "custom",
      class: "text-xs bg-blue-700 border-blue-700 text-white"
    },
    {},
    {
      default: () => {
        return `${escape(user.isOnline ? "Çevrimiçi" : "Çevrimdışı")}`;
      }
    }
  )}` : ``}

		${user.showShare ? `<button><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 outline-none"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"}"></path></svg>
				${validate_component(Tooltip, "Tooltip").$$render(
    $$result,
    {
      style: "custom",
      class: "text-xs bg-blue-700 border-blue-700 text-white"
    },
    {},
    {
      default: () => {
        return `Paylaş`;
      }
    }
  )}</button>` : ``}</div>` : ``}

	${user.showRequest ? `<a href="${"/ozel-ders-talebi-olustur/" + escape(user.username, true)}" class="${"bg-blue-700 p-2 rounded-full justify-center text-sm flex text-white mt-4"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 mr-1"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M12 6v12m6-6H6"}"></path></svg>
		Ders Talebinde Bulun
	</a>
	<span class="${"text-xs text-center block mt-1 mb-4 text-gray-400"}">Cevaplama süresi 1 saat</span>` : ``}</div>`;
});
const MediaCardContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { user } = $$props;
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  return `<div class="${"lg:basis-3/12 xl:basis-2/12 min-w-[200px]"}">${validate_component(MediaCard, "MediaCard").$$render($$result, { user }, {}, {})}</div>

<div class="${"lg:basis-9/12 xl:basis-10/12 hidden lg:block"}"><a href="${"/" + escape(user.username, true)}" target="${"_blank"}" rel="${"noreferrer"}"><h1 class="${"mb-2 text-2xl font-bold text-blue-700 tracking-tight leading-none xl:text-3xl"}">${escape(user.firstName)} ${escape(user.lastName)}</h1></a>
    <p class="${"mb-2 font-semibold text-gray-800 lg:text-base xl:text-lg dark:text-gray-400"}">${escape(user.title)}</p>

    ${user.isTeachPhysically ? `<span class="${"bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}" class="${"mr-1 w-3 h-3"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"}"></path></svg>
        Yüz yüze ders veriyor
    </span>` : ``}

    ${user.isTeachRemotely ? `<span class="${"bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"mr-1 w-3 h-3"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"}"></path></svg>
        Uzaktan, webcam ile ders veriyor
    </span>` : ``}

    <div class="${"lg:flex lg:flex-row lg:justify-between mb-3 text-gray-500 text-sm mt-4"}">${user.minimumPrice > 0 ? `<p class="${"flex mb-1"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 mr-1"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"}"></path></svg>
            <span>${escape(user.minimumPrice)}<span class="${"text-xs"}">₺</span></span></p>` : ``}

        <p class="${"flex mb-1"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 mr-1"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"}"></path></svg>
            ${escape(user.totalComment ?? 0)} yorum
        </p>

        ${user.county || user.country ? `<p class="${"flex"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 mr-1"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"}"></path><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"}"></path></svg>
            ${user.county?.id ? `${escape(user.county.title)}, ${escape(user.city.title)}` : `${escape(user.country.title)}`}</p>` : ``}</div>

    ${user.truncateAbout === true ? `<p class="${"text-sm text-justify leading-relaxed"}">${escape(user.about ? user.about.length > 300 ? user.about.substr(0, 300) + "..." : user.about : "")}</p>` : `<p class="${"text-sm text-justify leading-relaxed"}">${escape(user.about)}</p>`}</div>`;
});
export {
  MediaCardContainer as M
};
