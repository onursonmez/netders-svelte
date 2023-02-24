import { c as create_ssr_component, a as subscribe, v as validate_component, f as each, e as escape } from "../../../../chunks/index3.js";
import { M as MediaCardContainer } from "../../../../chunks/MediaCardContainer.js";
import "devalue";
import "toastify-js";
import { p as page } from "../../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1j9q2vi_START -->${$$result.title = `<title>Hesabım • Öğretmen Onayı</title>`, ""}<!-- HEAD_svelte-1j9q2vi_END -->`, ""}

<div class="${"lg:flex lg:flex-row gap-6 bg-white p-6 rounded-lg shadow-md mt-4"}">${validate_component(MediaCardContainer, "MediaCardContainer").$$render($$result, { user: { ...data.approvalUser } }, {}, {})}</div>

${data.approvalUserPrices?.items !== null ? `<div class="${"bg-white rounded-lg shadow-md mt-4"}"><div class="${"bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold"}">Ders Ücretleri</div>
        <div class="${"p-6"}"><table class="${"table-fixed w-full text-left text-sm lg:text-base"}"><thead><tr><th class="${"pb-2 font-semibold"}">Ders Adı</th>
                    <th align="${"right"}" class="${"font-semibold"}">Yüz Yüze</th>
                    <th align="${"right"}" class="${"font-semibold"}">Uzaktan (Webcam)</th></tr></thead>
                <tbody>${each(data.approvalUserPrices.items, (price) => {
    return `<tr class="${"border-t border-gray-200"}"><td class="${"py-2"}">${price.slug ? `<a href="${"/ozel-ders-" + escape(price.slug, true)}" target="${"_blank"}" rel="${"noreferrer"}">${escape(price.subject.title)} - ${escape(price.level.title)}</a>` : `${escape(price.subject.title)} - ${escape(price.level.title)}`}</td>
                        <td align="${"right"}">${price.pricePrivate > 0 ? `${escape(price.pricePrivate)}<span class="${"text-xs"}">₺</span>` : `-`}</td>
                        <td align="${"right"}">${price.priceLive > 0 ? `${escape(price.priceLive)}<span class="${"text-xs"}">₺</span>` : `-`}</td>
                    </tr>`;
  })}</tbody></table></div></div>` : ``}

${data.approvalUserLocations?.items !== null ? `<div class="${"bg-white rounded-lg shadow-md mt-4"}"><div class="${"bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold"}">Yüz Yüze Ders Verdiği Lokasyonlar</div>
        <div class="${"flex flex-col gap-4 p-6"}">${each(data.approvalUserLocations.items, (location) => {
    return `<div><span class="${"font-semibold"}">${escape(location.city.title)}</span>
                    <ul class="${"grid grid-cols-1 md:grid-cols-3"}">${each(location.counties, (county) => {
      return `<li>${escape(county.title)}</li>`;
    })}</ul>
                </div>`;
  })}</div></div>` : ``}

<div class="${"bg-white rounded-lg shadow-md mt-4"}"><div class="${"bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold"}">Onayla veya Reddet</div>
    <div class="${"p-6"}"><div><textarea class="${"w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}">${""}</textarea></div>

        <div class="${"flex justify-between mt-4"}"><div><form action="${"?/decline"}"><button class="${"bg-red-700 hover:bg-red-900 py-2 px-4 text-sm md:text-lg md:py-3 md:px-6 text-center rounded-full justify-center text-white block md:inline-block"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 mr-1 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M6 18L18 6M6 6l12 12"}"></path></svg>

                        Reddet
                    </button></form></div>
            <div><form action="${"?/approve"}"><button class="${"bg-blue-700 hover:bg-blue-900 py-2 px-4 text-sm md:text-lg md:py-3 md:px-6 text-center rounded-full justify-center text-white block md:inline-block"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 mr-1 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M4.5 12.75l6 6 9-13.5"}"></path></svg>
                        Onayla
                    </button></form></div></div></div></div>`;
});
export {
  Page as default
};
