import { c as create_ssr_component } from "../../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1ffa9iq_START -->${$$result.title = `<title>Hesab\u0131m \u2022 Eksikler</title>`, ""}<!-- HEAD_svelte-1ffa9iq_END -->`, ""}

<div class="${"w-full"}"><div class="${"grow bg-white rounded-lg shadow-md"}"><div class="${"bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold"}">Eksik Bilgiler</div>
        <div class="${"p-6"}"><p>Profilinin arama sonu\xE7lar\u0131nda g\xF6z\xFCkebilmesi i\xE7in a\u015Fa\u011F\u0131daki eksik bilgileri tamamlaman gerekiyor.</p>
            <div class="${"flex flex-col"}"><div>${data.requirement.includes("title") ? `<div class="${"mt-4 p-4 mb-4 text-sm rounded-lg border border-gray-200 flex lg:flex-row flex-col gap-2 justify-between items-center"}" role="${"alert"}"><div class="${"text-center lg:text-left"}">Profilin i\xE7in ba\u015Fl\u0131k bilgisi eksiktir.
                        </div>
                        <a href="${"/member/about"}" class="${"flex gap-2 items-center rounded-full border border-gray-700 py-1 px-4 hover:bg-gray-100"}"><span>Sorunu gider</span>
                            <svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-6 h-6 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"}"></path></svg></a></div>` : ``}
                    ${data.requirement.includes("about") ? `<div class="${"mt-4 p-4 mb-4 text-sm rounded-lg border border-gray-200 flex lg:flex-row flex-col gap-2 justify-between items-center"}" role="${"alert"}"><div class="${"text-center lg:text-left"}">Profilin i\xE7in hakk\u0131nda bilgisi eksiktir.
                        </div>
                        <a href="${"/member/about"}" class="${"flex gap-2 items-center rounded-full border border-gray-700 py-1 px-4 hover:bg-gray-100"}"><span>Sorunu gider</span>
                            <svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-6 h-6 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"}"></path></svg></a></div>` : ``}
                    ${data.requirement.includes("price") ? `<div class="${"mt-4 p-4 mb-4 text-sm rounded-lg border border-gray-200 flex lg:flex-row flex-col gap-2 justify-between items-center"}" role="${"alert"}"><div class="${"text-center lg:text-left"}">Profilin i\xE7in ders \xFCcreti bilgisi eksiktir.
                        </div>
                        <a href="${"/member/price"}" class="${"flex gap-2 items-center rounded-full border border-gray-700 py-1 px-4 hover:bg-gray-100"}"><span>Sorunu gider</span>
                            <svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-6 h-6 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"}"></path></svg></a></div>` : ``}</div></div></div></div></div>`;
});
export {
  Page as default
};
