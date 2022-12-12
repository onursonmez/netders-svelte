import { c as create_ssr_component, b as subscribe, e as escape, d as add_attribute, v as validate_component } from "./index.js";
import { I as IconUser } from "./icon-user.js";
import { a as getUserPhoto } from "./user.js";
import { p as page } from "./stores.js";
import "classnames";
import { T as Tooltip } from "./Clipboard.svelte_svelte_type_style_lang.js";
import "toastify-js";
import dayjs from "dayjs";
import tr from "dayjs/locale/tr.js";
import relativeTime from "dayjs/plugin/relativeTime.js";
const IconMale = "/_app/immutable/assets/icon-male-8eb5c734.png";
const IconFemale = "/_app/immutable/assets/icon-female-c8d323ea.png";
const UserVertical = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  dayjs.extend(relativeTime);
  dayjs.locale(tr);
  let { userData } = $$props;
  let photoUrl = IconUser;
  const getUserPhotoInternal = async (userData2) => {
    const res = await getUserPhoto(userData2.username);
    if (res.url) {
      photoUrl = "https://netders.com/" + res.url;
    } else {
      if (userData2.genderName === "Erkek") {
        photoUrl = IconMale;
      }
      if (userData2.genderName === "Kad\u0131n") {
        photoUrl = IconFemale;
      }
    }
  };
  if ($$props.userData === void 0 && $$bindings.userData && userData !== void 0)
    $$bindings.userData(userData);
  {
    if (Object.entries(userData).length > 0) {
      getUserPhotoInternal(userData);
    }
  }
  $$unsubscribe_page();
  return `${``}

${Object.entries(userData).length > 0 ? `<a href="${"/" + escape(userData.username, true)}" target="${"_blank"}" rel="${"noreferrer"}"><img class="${"h-32 rounded-full mx-auto"}"${add_attribute("src", photoUrl, 0)} alt="${""}"></a>
<div class="${"flex flex-col w-full justify-between pl-4 leading-normal mt-2"}">${userData.firstName ? `<a href="${"/" + escape(userData.username, true)}" target="${"_blank"}" rel="${"noreferrer"}"><h5 class="${"mb-2 text-xl font-bold tracking-tight text-blue-700 text-center"}">${escape(userData.firstName)} ${escape(userData.lastName)}</h5></a>` : ``}

	${userData.minimumPrice || userData.cityName || userData.countyName || userData.totalComment ? `<div class="${"flex flex-col gap-2 justify-between text-gray-500 text-sm mt-1"}">${userData.minimumPrice ? `<div><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 inline-block mr-1"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"}"></path></svg>
			${escape(userData.minimumPrice)}\u20BA
		</div>` : ``}

		${userData.cityName && userData.countyName ? `<div><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 inline-block mr-1"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"}"></path><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"}"></path></svg>
			${escape(userData.cityName)}, ${escape(userData.countyName)}</div>` : ``}

		<div><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 inline-block mr-1"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"}"></path></svg>
			${escape(userData.totalComment ?? 0)} yorum
		</div></div>` : ``}

	${userData.badges ? `<div class="${"flex items-center justify-center gap-2 mt-2"}">${userData.badges.showApprovedBadge ? `<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 outline-none"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg>
			${validate_component(Tooltip, "Tooltip").$$render(
    $$result,
    {
      style: "custom",
      class: "text-xs bg-blue-700 border-blue-700 text-white transition-opacity ease-in duration-700 opacity-100"
    },
    {},
    {
      default: () => {
        return `Onayl\u0131 \xF6\u011Fretmen`;
      }
    }
  )}` : ``}

		${userData.badges.showCreatedAtBadge ? `<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 outline-none"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"}"></path></svg>
			${validate_component(Tooltip, "Tooltip").$$render(
    $$result,
    {
      style: "custom",
      class: "text-xs bg-blue-700 border-blue-700 text-white"
    },
    {},
    {
      default: () => {
        return `${escape(dayjs(new Date(userData.createdAt.date)).fromNow())} \xFCye oldu`;
      }
    }
  )}` : ``}

		${userData.badges.showIsOnlineBadge ? `<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${["w-5 h-5 outline-none", !userData.isOnline ? "text-gray-300" : ""].join(" ").trim()}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M5.636 5.636a9 9 0 1012.728 0M12 3v9"}"></path></svg>
			${validate_component(Tooltip, "Tooltip").$$render(
    $$result,
    {
      style: "custom",
      class: "text-xs bg-blue-700 border-blue-700 text-white"
    },
    {},
    {
      default: () => {
        return `${escape(userData.isOnline ? "\xC7evrimi\xE7i" : "\xC7evrimd\u0131\u015F\u0131")}`;
      }
    }
  )}` : ``}

		${userData.badges.showShareBadge ? `<button><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 outline-none"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"}"></path></svg>
				${validate_component(Tooltip, "Tooltip").$$render(
    $$result,
    {
      style: "custom",
      class: "text-xs bg-blue-700 border-blue-700 text-white"
    },
    {},
    {
      default: () => {
        return `Payla\u015F`;
      }
    }
  )}</button>` : ``}</div>` : ``}

	${userData.showRequest ? `<a href="${"/"}" class="${"bg-blue-700 p-2 rounded-full justify-center text-sm flex text-white mt-4"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 mr-1"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M12 6v12m6-6H6"}"></path></svg>
		Ders Talebinde Bulun
	</a>
	<span class="${"text-xs text-center block mt-1 mb-4 text-gray-400"}">Cevaplama s\xFCresi 1 saat</span>` : ``}</div>` : `<div class="${"w-full mx-auto"}"><div class="${"animate-pulse flex space-x-4"}"><div class="${"rounded-full bg-slate-200 h-10 w-10"}"></div>
			<div class="${"flex-1 space-y-6 py-1"}"><div class="${"h-2 bg-slate-200 rounded"}"></div>
				<div class="${"space-y-3"}"><div class="${"grid grid-cols-3 gap-4"}"><div class="${"h-2 bg-slate-200 rounded col-span-2"}"></div>
						<div class="${"h-2 bg-slate-200 rounded col-span-1"}"></div></div>
					<div class="${"h-2 bg-slate-200 rounded"}"></div></div></div></div></div>`}`;
});
export {
  UserVertical as U
};
