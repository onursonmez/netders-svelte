import { c as create_ssr_component, v as validate_component, f as escape } from "../../../../chunks/index.js";
import { U as UserVertical } from "../../../../chunks/UserVertical.js";
import "toastify-js";
const UserCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { userData } = $$props;
  let userProfileData = {
    username: userData.username,
    createdAt: userData.createdAt,
    isOnline: userData.isOnline,
    showRequest: true,
    badges: {
      showApprovedBadge: true,
      showCreatedAtBadge: true,
      showIsOnlineBadge: true,
      showShareBadge: true
    }
  };
  if ($$props.userData === void 0 && $$bindings.userData && userData !== void 0)
    $$bindings.userData(userData);
  return `<div class="${"lg:basis-3/12 xl:basis-2/12 mb-4 lg:mb-0"}">${validate_component(UserVertical, "UserVertical").$$render($$result, { userData: userProfileData }, {}, {})}</div>
<div class="${"lg:lg:basis-9/12 xl:basis-10/12 mb-4 lg:mb-0"}"><h1 class="${"mb-2 text-2xl font-bold text-blue-700 tracking-tight leading-none xl:text-3xl dark:text-white"}">${escape(userData.firstName)} ${escape(userData.lastName)}</h1>
    <p class="${"mb-2 font-semibold text-gray-800 lg:text-base xl:text-lg dark:text-gray-400"}">${escape(userData.title)}</p>

    ${userData.isTeachPhysically ? `<span class="${"bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}" class="${"mr-1 w-3 h-3"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"}"></path></svg>
        Y\xFCz y\xFCze ders veriyor
    </span>` : ``}

    ${userData.isTeachRemotely ? `<span class="${"bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"mr-1 w-3 h-3"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"}"></path></svg>
        Uzaktan, webcam ile ders veriyor
    </span>` : ``}

    <div class="${"lg:flex lg:flex-row lg:justify-between mb-3 text-gray-500 text-sm mt-4"}"><p class="${"flex mb-1"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 mr-1"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"}"></path></svg>
            <span>${escape(userData.minimumPrice)}<span class="${"text-xs"}">\u20BA</span></span></p>
        <p class="${"flex mb-1"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 mr-1"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"}"></path></svg>
            ${escape(userData.totalComment)} yorum
        </p>
        <p class="${"flex"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 mr-1"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"}"></path><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"}"></path></svg>
            ${escape(userData.cityName)}, ${escape(userData.countyName)}</p></div>
    <p class="${"text-sm text-justify leading-relaxed"}">${escape(userData.about)}</p></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let userData = {};
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-8oibt4_START -->${$$result.title = `<title>${escape(data.title)}</title>`, ""}<!-- HEAD_svelte-8oibt4_END -->`, ""}

<div class="${"bg-white rounded-lg shadow-md mt-4"}"><div class="${"bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold"}">${escape(data.title)}</div>
	<div class="${"p-6"}">${escape(data.content)}

		<ul class="${"mt-4"}"><li>Ders: ${escape(data.subject.title)}</li>
			<li>Konu: ${escape(data.level.title)}</li>
			${data.pricePrivate ? `<li>Y\xFCz Y\xFCze Ders \xDCcreti: ${escape(data.pricePrivate)}\u20BA</li>` : ``}
			${data.priceLive ? `<li>Uzaktan, Webcam Ders \xDCcreti: ${escape(data.priceLive)}\u20BA</li>` : ``}</ul></div></div>

${Object.entries(userData).length > 0 ? `<div class="${"bg-white rounded-lg shadow-md mt-4"}"><div class="${"bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold"}">${escape(userData.firstName)} ${escape(userData.lastName)} Hakk\u0131nda</div>
		<div class="${"p-6"}"><div class="${"lg:flex lg:flex-row gap-6"}">${validate_component(UserCard, "UserCard").$$render($$result, { userData }, {}, {})}</div></div></div>` : ``}`;
});
export {
  Page as default
};
