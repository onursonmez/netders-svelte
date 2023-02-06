import { c as create_ssr_component, v as validate_component, f as each, e as escape, h as add_attribute } from "../../../../chunks/index.js";
/* empty css                                                      */import { t as toast } from "../../../../chunks/toast.js";
import { S as Select } from "../../../../chunks/Select.js";
import { i as itemFilter } from "../../../../chunks/selectUtil.js";
import "devalue";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "table.svelte-1l52nyw.svelte-1l52nyw{width:100%}table.svelte-1l52nyw td.svelte-1l52nyw{padding:10px;border-bottom:1px solid #dedede;white-space:nowrap}table.svelte-1l52nyw td.svelte-1l52nyw:nth-child(1),table.svelte-1l52nyw td.svelte-1l52nyw:nth-child(2){min-width:200px}table.svelte-1l52nyw td.svelte-1l52nyw:nth-child(4),table.svelte-1l52nyw td.svelte-1l52nyw:nth-child(5){text-align:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  let pageData = [];
  let levels = [];
  let pricesData = data.prices;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (form == null ? void 0 : form.errors) {
        Object.entries(form == null ? void 0 : form.errors).forEach((i) => {
          toast(i[1], "warning");
        });
      }
    }
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-e9wito_START -->${$$result.title = `<title>Hesab\u0131m \u2022 Ders \xDCcretleri</title>`, ""}<!-- HEAD_svelte-e9wito_END -->`, ""}

${``}

<div><div class="${"grow bg-white rounded-lg shadow-md"}"><div class="${"bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold"}">Yeni Ders \xDCcreti</div>

        <form action="${"?/new"}"><div class="${"p-6"}"><div class="${"flex flex-col gap-4"}"><p>Verdi\u011Fin derslerin \xFCcretlerini bu sayfadan belirleyebilirsin. Ders \xFCcreti belirlemek i\xE7in konu se\xE7imi, ders se\xE7imi ve \xFCcret bilgisi giri\u015Fini yaparak Ekle tu\u015Funa basmal\u0131s\u0131n.</p>

                    <div><span class="${"text-sm mb-1 block text-gray-500"}">Konu</span>
                        ${validate_component(Select, "Select").$$render(
      $$result,
      {
        placeholder: "Se\xE7",
        noOptionsMessage: "Sonu\xE7 bulunamad\u0131...",
        items: data.subjects.items,
        optionIdentifier: "id",
        labelIdentifier: "title",
        itemFilter,
        value: pageData.subject
      },
      {
        value: ($$value) => {
          pageData.subject = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>

                    ${pageData.levels && pageData.levels.length > 0 ? `<div><span class="${"text-sm mb-1 block text-gray-500"}">Ders</span>
                        <div class="${"grid lg:grid-cols-2 gap-2"}">${each(pageData.levels, (level) => {
      return `<div><input type="${"checkbox"}" name="${"level"}" id="${"level_" + escape(level.id, true)}"${add_attribute("value", level.id, 0)}${~levels.indexOf(level.id) ? add_attribute("checked", true, 1) : ""}>
                                    <label for="${"level_" + escape(level.id, true)}">${escape(level.title)}</label>
                                </div>`;
    })}</div>

                        <div class="${"grid lg:grid-cols-2 gap-4 mt-4"}"><div><span class="${"text-sm mb-1 block text-gray-500"}">Y\xFCzy\xFCze Ders \xDCcreti</span>
                                <input type="${"number"}" name="${"pricePrivate"}" class="${"w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"></div>

                            <div><span class="${"text-sm mb-1 block text-gray-500"}">Uzaktan (Webcam) Ders \xDCcreti</span>
                                <input type="${"number"}" name="${"priceLive"}" class="${"w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"></div></div></div>` : ``}</div></div>

            <div class="${"bg-[#fbfcff] border-t border-gray-100 p-6 rounded-b-lg text-right"}">${`<button class="${"bg-blue-700 hover:bg-blue-900 px-6 py-2 rounded-full text-white"}"><span>Ekle</span></button>`}</div></form></div>

    <div class="${"grow bg-white rounded-lg shadow-md mt-4"}"><div class="${"bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold"}">Tan\u0131ml\u0131 Ders \xDCcretleri</div>

        <form action="${"?/update_multi"}"><div class="${"p-6"}">${pricesData.items ? `<div class="${"flex flex-col gap-4"}"><p>\xDCcret belirledi\u011Fin derslere tan\u0131t\u0131m yaz\u0131s\u0131 yazarak profilini ziyaret eden \xF6\u011Frencilerin say\u0131s\u0131n\u0131 artt\u0131rabilirsin. Tan\u0131t\u0131m yaz\u0131s\u0131 yazd\u0131\u011F\u0131n dersler i\xE7in \xF6zel sayfalar olu\u015Fturuyoruz ve profilini daha fazla \xF6\u011Frencinin ziyaret etmesini sa\u011Fl\u0131yoruz.</p>
                    <p>Tan\u0131t\u0131m yaz\u0131s\u0131 yazmak istedi\u011Fin dersin ismine t\u0131klayarak o ders i\xE7in tan\u0131t\u0131m yaz\u0131s\u0131 ekleyebilir veya daha \xF6nceden eklemi\u015F oldu\u011Fun tan\u0131t\u0131m yaz\u0131s\u0131n\u0131 de\u011Fi\u015Ftirebilirsin.</p>
                    <p class="${"font-medium"}">Ders tan\u0131t\u0131m\u0131 yaz\u0131s\u0131ndaki sembollerin anlamlar\u0131 a\u015Fa\u011F\u0131dad\u0131r:</p>
                    <p><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg>
                        ders tan\u0131t\u0131m\u0131 yap\u0131lmad\u0131
                    </p>
                    <p><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg>
                        ders tan\u0131t\u0131m\u0131 onay bekliyor
                    </p>
                    <p><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg>
                        ders tan\u0131t\u0131m\u0131 yap\u0131ld\u0131 ve onayland\u0131
                    </p>


                    <div class="${"w-full overflow-x-auto"}"><table class="${"table-auto svelte-1l52nyw"}"><thead><tr class="${"font-semibold"}"><td class="${"svelte-1l52nyw"}">Ders Ad\u0131</td>
                            <td class="${"svelte-1l52nyw"}">Y\xFCzy\xFCze</td>
                            <td class="${"svelte-1l52nyw"}">Uzaktan (Webcam)</td>
                            <td class="${"svelte-1l52nyw"}">Tan\u0131t\u0131m</td>
                            <td class="${"svelte-1l52nyw"}">Sil</td></tr></thead>
                        <tbody>${each(pricesData.items, (price) => {
      return `<tr><td class="${"svelte-1l52nyw"}"><button type="${"button"}" class="${"text-blue-700"}">${escape(price.subject.title)} &gt; ${escape(price.level.title)}
                                </button></td>
                            <td class="${"svelte-1l52nyw"}"><input type="${"text"}" name="${"pricePrivate_" + escape(price.id, true)}"${add_attribute("value", price.pricePrivate, 0)} class="${"ring-0 w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"></td>
                            <td class="${"svelte-1l52nyw"}"><input type="${"text"}" name="${"priceLive_" + escape(price.id, true)}"${add_attribute("value", price.priceLive, 0)} class="${"ring-0 w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"></td>
                            <td class="${"svelte-1l52nyw"}">${price.title ? `${price.status.id === 1 ? `<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg>` : `<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg>`}` : `<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg>`}</td>
                            <td class="${"svelte-1l52nyw"}"><button name="${"delete"}"${add_attribute("value", price.id, 0)}><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 mx-auto"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"}"></path></svg>
                                </button></td>
                        </tr>`;
    })}</tbody></table></div></div>` : `Tan\u0131ml\u0131 ders \xFCcreti bulunamad\u0131.`}</div>

            ${pricesData.items ? `<div class="${"bg-[#fbfcff] border-t border-gray-100 p-6 rounded-b-lg text-right"}">${`<button class="${"bg-blue-700 hover:bg-blue-900 px-6 py-2 rounded-full text-white"}"><span>G\xFCncelle</span></button>`}</div>` : ``}</form></div>
</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
