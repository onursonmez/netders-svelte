import { c as create_ssr_component, v as validate_component, f as each, e as escape, d as add_attribute } from "../../../../chunks/index3.js";
/* empty css                                                      */import { t as toast } from "../../../../chunks/toast.js";
import "../../../../chunks/index.js";
import { i as itemFilter, S as Select } from "../../../../chunks/selectUtil.js";
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
      if (form?.errors) {
        Object.entries(form?.errors).forEach((i) => {
          toast(i[1], "warning");
        });
      }
    }
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-e9wito_START -->${$$result.title = `<title>Hesabım • Ders Ücretleri</title>`, ""}<!-- HEAD_svelte-e9wito_END -->`, ""}

${``}

<div><div class="${"grow bg-white rounded-lg shadow-md"}"><div class="${"bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold"}">Yeni Ders Ücreti</div>

        <form action="${"?/new"}"><div class="${"p-6"}"><div class="${"flex flex-col gap-4"}"><p>Verdiğin derslerin ücretlerini bu sayfadan belirleyebilirsin.</p>
                    <p class="${"text-sm"}">Ders ücreti belirlemek için konu ile ara veya ders adı ile ara kısımlarından birini kullanarak ders seçimi yapmalısın. Ardından ücret bilgisi girişini yaparak Ekle tuşuna basmalısın.</p>

                    <div class="${"grid lg:grid-cols-2 gap-4"}"><div><span class="${"text-sm mb-1 block text-gray-500"}">Konu ile ara</span>
                            ${validate_component(Select, "Select").$$render(
      $$result,
      {
        placeholder: "Seç",
        noOptionsMessage: "Sonuç bulunamadı...",
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

                        <div><span class="${"text-sm mb-1 block text-gray-500"}">Ders adı ile ara</span>
                            ${validate_component(Select, "Select").$$render(
      $$result,
      {
        placeholder: "Seç",
        noOptionsMessage: "Sonuç bulunamadı...",
        items: data.categories.items,
        optionIdentifier: "id",
        labelIdentifier: "title",
        itemFilter,
        value: pageData.category
      },
      {
        value: ($$value) => {
          pageData.category = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>

                    ${pageData.levels && pageData.levels.length > 0 ? `<div><span class="${"text-sm mb-1 block text-gray-500"}">Ders</span>
                        <div class="${"grid lg:grid-cols-2 gap-2"}">${each(pageData.levels, (level) => {
      return `<div><input type="${"checkbox"}" name="${"level"}" id="${"level_" + escape(level.id, true)}"${add_attribute("value", level.id, 0)}${~levels.indexOf(level.id) ? add_attribute("checked", true, 1) : ""}>
                                    ${pageData.category?.id ? `<label for="${"level_" + escape(level.id, true)}">${escape(level.subject.title)} • ${escape(level.title)}</label>` : `<label for="${"level_" + escape(level.id, true)}">${escape(level.title)}</label>`}
                                </div>`;
    })}</div>

                        <div class="${"grid lg:grid-cols-2 gap-4 mt-4"}"><div><span class="${"text-sm mb-1 block text-gray-500"}">Yüzyüze Ders Ücreti</span>
                                <input type="${"number"}" name="${"pricePrivate"}" class="${"w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"></div>

                            <div><span class="${"text-sm mb-1 block text-gray-500"}">Uzaktan (Webcam) Ders Ücreti</span>
                                <input type="${"number"}" name="${"priceLive"}" class="${"w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"></div></div></div>` : ``}</div></div>

            <div class="${"bg-[#fbfcff] border-t border-gray-100 p-6 rounded-b-lg text-right"}">${`<button class="${"bg-blue-700 hover:bg-blue-900 px-6 py-2 rounded-full text-white"}"><span>Ekle</span></button>`}</div></form></div>

    <div class="${"grow bg-white rounded-lg shadow-md mt-4"}"><div class="${"bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold"}">Tanımlı Ders Ücretleri</div>

        <form action="${"?/update_multi"}"><div class="${"p-6"}">${pricesData.items ? `<div class="${"flex flex-col gap-4"}"><p>Ücret belirlediğin derslere tanıtım yazısı yazarak profilini ziyaret eden öğrencilerin sayısını arttırabilirsin. Tanıtım yazısı yazdığın dersler için özel sayfalar oluşturuyoruz ve profilini daha fazla öğrencinin ziyaret etmesini sağlıyoruz.</p>
                    <p>Tanıtım yazısı yazmak istediğin dersin ismine tıklayarak o ders için tanıtım yazısı ekleyebilir veya daha önceden eklemiş olduğun tanıtım yazısını değiştirebilirsin.</p>
                    <p class="${"font-medium"}">Ders tanıtımı yazısındaki sembollerin anlamları aşağıdadır:</p>
                    <p><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg>
                        ders tanıtımı yapılmadı
                    </p>
                    <p><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg>
                        ders tanıtımı onay bekliyor
                    </p>
                    <p><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg>
                        ders tanıtımı yapıldı ve onaylandı
                    </p>


                    <div class="${"w-full overflow-x-auto"}"><table class="${"table-auto svelte-1l52nyw"}"><thead><tr class="${"font-semibold"}"><td class="${"svelte-1l52nyw"}">Ders Adı</td>
                            <td class="${"svelte-1l52nyw"}">Yüzyüze</td>
                            <td class="${"svelte-1l52nyw"}">Uzaktan (Webcam)</td>
                            <td class="${"svelte-1l52nyw"}">Tanıtım</td>
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
    })}</tbody></table></div></div>` : `Tanımlı ders ücreti bulunamadı.`}</div>

            ${pricesData.items ? `<div class="${"bg-[#fbfcff] border-t border-gray-100 p-6 rounded-b-lg text-right"}">${`<button class="${"bg-blue-700 hover:bg-blue-900 px-6 py-2 rounded-full text-white"}"><span>Güncelle</span></button>`}</div>` : ``}</form></div>
</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
