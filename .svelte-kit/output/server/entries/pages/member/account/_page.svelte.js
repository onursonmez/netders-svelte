import { c as create_ssr_component, b as subscribe, h as add_attribute, v as validate_component } from "../../../../chunks/index.js";
/* empty css                                                      */import { p as page } from "../../../../chunks/stores.js";
import "devalue";
import { t as toast } from "../../../../chunks/toast.js";
import { g as gendersStore } from "../../../../chunks/userStore.js";
import { a as aboutModel } from "../../../../chunks/userModel.js";
import { S as Select } from "../../../../chunks/Select.js";
import { i as itemFilter } from "../../../../chunks/selectUtil.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  let $gendersStore, $$unsubscribe_gendersStore;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_gendersStore = subscribe(gendersStore, (value) => $gendersStore = value);
  let { data } = $$props;
  let { form } = $$props;
  let pageData = aboutModel;
  let email, password;
  let cities = [];
  let counties = [];
  let countries = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
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
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-7f2b9k_START -->${$$result.title = `<title>Hesab\u0131m \u2022 Ki\u015Fisel Bilgiler</title>`, ""}<!-- HEAD_svelte-7f2b9k_END -->`, ""}

${``}

<div><div class="${"grow bg-white rounded-lg shadow-md"}"><form method="${"POST"}" action="${"?/save"}"><div class="${"bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold"}">Ki\u015Fisel Bilgiler</div>
            <div class="${"p-6"}"><div class="${"grid grid-cols-1 lg:grid-cols-2 gap-4"}"><div><span class="${"text-sm mb-1 block text-gray-500"}">Ad</span>
                        <input name="${"firstName"}" type="${"text"}" class="${"ring-0 w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"${add_attribute("value", pageData.firstName, 0)}></div>
                    <div><span class="${"text-sm mb-1 block text-gray-500"}">Soyad</span>
                        <input name="${"lastName"}" type="${"text"}" class="${"w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"${add_attribute("value", pageData.lastName, 0)}></div>
                    <div><span class="${"text-sm mb-1 block text-gray-500"}">Telefon</span>
                        <input name="${"phone"}" type="${"number"}" class="${"w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"${add_attribute("value", pageData.phone, 0)}></div>
                    <div><span class="${"text-sm mb-1 block text-gray-500"}">Cinsiyet</span>
                        ${validate_component(Select, "Select").$$render(
      $$result,
      {
        placeholder: "Se\xE7",
        noOptionsMessage: "Sonu\xE7 bulunamad\u0131...",
        items: $gendersStore,
        optionIdentifier: "id",
        labelIdentifier: "title",
        itemFilter,
        value: pageData.gender
      },
      {
        value: ($$value) => {
          pageData.gender = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>

                    ${!pageData.outsideTurkey ? `<div><span class="${"text-sm mb-1 block text-gray-500"}">\u015Eehir</span>
                            ${validate_component(Select, "Select").$$render(
      $$result,
      {
        placeholder: "Se\xE7",
        noOptionsMessage: "Sonu\xE7 bulunamad\u0131...",
        items: cities,
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

                        <div><span class="${"text-sm mb-1 block text-gray-500"}">\u0130l\xE7e</span>
                            ${validate_component(Select, "Select").$$render(
      $$result,
      {
        placeholder: "Se\xE7",
        noOptionsMessage: "Sonu\xE7 bulunamad\u0131...",
        items: counties,
        optionIdentifier: "id",
        labelIdentifier: "title",
        itemFilter,
        value: pageData.county
      },
      {
        value: ($$value) => {
          pageData.county = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>` : ``}

                    ${pageData.outsideTurkey ? `<div><span class="${"text-sm mb-1 block text-gray-500"}">\xDClke</span>
                            ${validate_component(Select, "Select").$$render(
      $$result,
      {
        placeholder: "Se\xE7",
        noOptionsMessage: "Sonu\xE7 bulunamad\u0131...",
        items: countries,
        optionIdentifier: "id",
        labelIdentifier: "title",
        itemFilter,
        value: pageData.country
      },
      {
        value: ($$value) => {
          pageData.country = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>` : ``}

                    <div class="${"lg:col-span-2"}"><label><input type="${"checkbox"}" class="${"rounded-sm ring-0 outline-none"}"${add_attribute("checked", pageData.outsideTurkey, 1)}> <span class="${"text-gray-500 text-sm"}">T\xFCrkiye&#39;de ya\u015Fam\u0131yorum</span></label></div></div></div>

            <div class="${"bg-[#fbfcff] border-t border-gray-100 p-6 rounded-b-lg text-right"}">${`<button class="${"bg-blue-700 hover:bg-blue-900 px-6 py-2 rounded-full text-white"}">G\xFCncelle
                    </button>`}</div></form></div>

    <div class="${"grow bg-white rounded-lg shadow-md mt-4"}"><form method="${"POST"}" action="${"?/updateEmail"}"><div class="${"bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold"}">E-posta De\u011Fi\u015Ftir</div>
            <div class="${"p-6"}"><p class="${"mb-4"}">E-posta adresini de\u011Fi\u015Ftirmek i\xE7in yeni e-posta adresini ve Netders.com \u015Fifreni girmelisin. Bilgilerin do\u011Fruysa yeni e-posta adresine alt\u0131 haneli bir kod g\xF6nderilecek ve bir sonraki ekranda bu kodu girmen istenecektir.</p>
                <div class="${"grid lg:grid-cols-3 gap-4"}"><div><span class="${"text-sm mb-1 block text-gray-500"}">Mevcut e-posta</span>
                        <input name="${"currentEmail"}" type="${"text"}" class="${"ring-0 w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}" disabled${add_attribute("value", pageData.email, 0)}></div>
                    <div><span class="${"text-sm mb-1 block text-gray-500"}">Yeni e-posta</span>
                        <input name="${"email"}" type="${"text"}" class="${"ring-0 w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"${add_attribute("value", email, 0)}></div>
                    <div><span class="${"text-sm mb-1 block text-gray-500"}">\u015Eifre</span>
                        <input name="${"password"}" type="${"password"}" class="${"ring-0 w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"${add_attribute("value", password, 0)}></div></div></div>
            <div class="${"bg-[#fbfcff] border-t border-gray-100 p-6 rounded-b-lg text-right"}">${`<button class="${"bg-blue-700 hover:bg-blue-900 px-6 py-2 rounded-full text-white"}">E-posta de\u011Fi\u015Ftir
                    </button>`}</div></form></div>

    <div class="${"grow bg-white rounded-lg shadow-md mt-4"}"><form method="${"POST"}" action="${"?/updatePassword"}"><div class="${"bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold"}">\u015Eifre De\u011Fi\u015Ftir</div>
            <div class="${"p-6"}"><div class="${"grid lg:grid-cols-3 gap-4"}"><div><span class="${"text-sm mb-1 block text-gray-500"}">Mevcut \u015Fifre</span>
                        <input name="${"password"}" type="${"password"}" class="${"ring-0 w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"></div>
                    <div><span class="${"text-sm mb-1 block text-gray-500"}">Yeni \u015Fifre</span>
                        <input name="${"newPassword"}" type="${"password"}" class="${"ring-0 w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"></div>
                    <div><span class="${"text-sm mb-1 block text-gray-500"}">Yeni \u015Fifre (tekrar)</span>
                        <input name="${"newPasswordRepeat"}" type="${"password"}" class="${"ring-0 w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"></div></div></div>
            <div class="${"bg-[#fbfcff] border-t border-gray-100 p-6 rounded-b-lg text-right"}">${`<button class="${"bg-blue-700 hover:bg-blue-900 px-6 py-2 rounded-full text-white"}">\u015Eifre de\u011Fi\u015Ftir
                    </button>`}</div></form></div>

    <div class="${"grow bg-white rounded-lg shadow-md mt-4"}"><form method="${"POST"}" action="${"?/cancel"}"><div class="${"bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold"}">\xDCyelik \u0130ptali</div>
            <div class="${"p-6"}"><p>A\u015Fa\u011F\u0131daki alana mevcut \u015Fifreni ve \xFCyelik iptal nedenini girerek \xFCyeli\u011Fini iptal edebilirsin. \xDCyelik iptali ger\xE7ekle\u015Fti\u011Fi anda arama sonu\xE7lar\u0131nda profiliniz g\xF6z\xFCkmez ve profil sayfan\u0131z kapat\u0131l\u0131r. 24 saat i\xE7erisinde Netders.com&#39;da yer alan profil foto\u011Fraf\u0131n\u0131z otomatik olarak silinir. Arama motorlar\u0131nda profilinizin g\xF6z\xFCkmemesi ortalama 1-2 hafta s\xFCrebilir.</p>
                <div class="${"grid grid-cols-1 gap-4 mt-4"}"><div><span class="${"text-sm mb-1 block text-gray-500"}">Mevcut \u015Fifre</span>
                        <input name="${"password"}" type="${"password"}" class="${"ring-0 w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"></div>
                    <div><span class="${"text-sm mb-1 block text-gray-500"}">\u0130ptal nedeni</span>
                        <textarea name="${"reason"}" class="${"ring-0 w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"></textarea></div></div></div>
            <div class="${"bg-[#fbfcff] border-t border-gray-100 p-6 rounded-b-lg text-right"}">${`<button class="${"bg-red-700 hover:bg-red-900 px-6 py-2 rounded-full text-white"}">\xDCyeli\u011Fimi iptal et
                    </button>`}</div></form></div></div>`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_gendersStore();
  return $$rendered;
});
export {
  Page as default
};
