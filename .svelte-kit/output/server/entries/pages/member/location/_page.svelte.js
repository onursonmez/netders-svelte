import { c as create_ssr_component, v as validate_component, f as each, e as escape, d as add_attribute } from "../../../../chunks/index3.js";
import { t as toast } from "../../../../chunks/toast.js";
import "../../../../chunks/index.js";
import { i as itemFilter, S as Select } from "../../../../chunks/selectUtil.js";
import "devalue";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "table.svelte-4ith6z.svelte-4ith6z{width:100%}table.svelte-4ith6z td.svelte-4ith6z{padding:10px;border-bottom:1px solid #dedede;white-space:nowrap}table.svelte-4ith6z td.svelte-4ith6z:nth-child(1){min-width:200px}table.svelte-4ith6z td.svelte-4ith6z:nth-child(2){text-align:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  let pageData = [];
  pageData.locations = data.locations;
  pageData.selectedCounties = [];
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
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-2k3ebi_START -->${$$result.title = `<title>Hesabım • Ders Verilen Lokasyonlar</title>`, ""}<!-- HEAD_svelte-2k3ebi_END -->`, ""}


<div><div class="${"grow bg-white rounded-lg shadow-md"}"><div class="${"bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold"}">Yeni Ders Verilen Lokasyon</div>

        <form action="${"?/new"}"><div class="${"p-6"}"><div class="${"flex flex-col gap-4"}"><p>Yüz yüze ders vermek için gidebileceğin lokasyonları bu alandan belirleyebilirsin. Eklemek için önce şehir sonra ilçe seçip Ekle tuşuna basmalısın. Yalnızca Uzaktan (Webcam) ile ders veriyorsan herhangi bir lokasyon seçmene gerek yoktur.</p>
                    <div><span class="${"text-sm mb-1 block text-gray-500"}">Şehir</span>
                        ${validate_component(Select, "Select").$$render(
      $$result,
      {
        placeholder: "Seç",
        noOptionsMessage: "Sonuç bulunamadı...",
        items: data.cities.items,
        optionIdentifier: "id",
        labelIdentifier: "title",
        itemFilter,
        value: pageData.city
      },
      {
        value: ($$value) => {
          pageData.city = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>

                    ${pageData.counties ? `<div><span class="${"text-sm mb-1 block text-gray-500"}">İlçe</span>
                        <div class="${"grid lg:grid-cols-2 gap-2"}">${each(pageData.counties, (county) => {
      return `<div><input type="${"checkbox"}" id="${"county_" + escape(county.id, true)}"${add_attribute("value", county.id, 0)}${~pageData.selectedCounties.indexOf(county.id) ? add_attribute("checked", true, 1) : ""}>
                                    <label for="${"county_" + escape(county.id, true)}">${escape(county.title)}</label>
                                </div>`;
    })}</div></div>` : ``}</div></div>

            <div class="${"bg-[#fbfcff] border-t border-gray-100 p-6 rounded-b-lg text-right"}">${`<button class="${"bg-blue-700 hover:bg-blue-900 px-6 py-2 rounded-full text-white"}"><span>Ekle</span></button>`}</div></form></div>

    <div class="${"grow bg-white rounded-lg shadow-md mt-4"}"><div class="${"bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold"}">Tanımlı Ders Verilen Lokasyonlar</div>
        <div class="${"p-6"}">${pageData.locations?.items !== null ? `<div class="${"flex flex-col gap-4"}"><div class="${"w-full overflow-x-auto"}"><table class="${"table-auto svelte-4ith6z"}"><thead><tr class="${"font-semibold"}"><td class="${"svelte-4ith6z"}">Lokasyon Adı</td>
                        <td class="${"svelte-4ith6z"}">Sil</td></tr></thead>
                    <tbody>${each(pageData.locations.items, (location) => {
      return `<tr><td class="${"svelte-4ith6z"}">${escape(location.city.title)} &gt; ${escape(location.county.title)}</td>
                        <td class="${"svelte-4ith6z"}"><form action="${"?/delete"}"><button><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 mx-auto"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"}"></path></svg></button>
                            </form></td>
                    </tr>`;
    })}</tbody></table></div></div>` : `Tanımlı ders verilen lokasyon bulunamadı.`}</div></div>
</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
