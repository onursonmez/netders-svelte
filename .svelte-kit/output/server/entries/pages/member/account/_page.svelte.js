import { c as create_ssr_component, a as subscribe, d as add_attribute, v as validate_component } from "../../../../chunks/index3.js";
/* empty css                                                      */import { p as page } from "../../../../chunks/stores.js";
import "devalue";
import { t as toast } from "../../../../chunks/toast.js";
import { g as gendersStore } from "../../../../chunks/userStore.js";
import { a as aboutModel } from "../../../../chunks/userModel.js";
import "../../../../chunks/index.js";
import { i as itemFilter, S as Select } from "../../../../chunks/selectUtil.js";
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
      if (form?.errors) {
        Object.entries(form?.errors).forEach((i) => {
          toast(i[1], "warning");
        });
      }
    }
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-7f2b9k_START -->${$$result.title = `<title>Hesabım • Kişisel Bilgiler</title>`, ""}<!-- HEAD_svelte-7f2b9k_END -->`, ""}

${``}

<div><div class="${"grow bg-white rounded-lg shadow-md"}"><form method="${"POST"}" action="${"?/save"}"><div class="${"bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold"}">Kişisel Bilgiler</div>
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
        placeholder: "Seç",
        noOptionsMessage: "Sonuç bulunamadı...",
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

                    ${!pageData.outsideTurkey ? `<div><span class="${"text-sm mb-1 block text-gray-500"}">Şehir</span>
                            ${validate_component(Select, "Select").$$render(
      $$result,
      {
        placeholder: "Seç",
        noOptionsMessage: "Sonuç bulunamadı...",
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

                        <div><span class="${"text-sm mb-1 block text-gray-500"}">İlçe</span>
                            ${validate_component(Select, "Select").$$render(
      $$result,
      {
        placeholder: "Seç",
        noOptionsMessage: "Sonuç bulunamadı...",
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

                    ${pageData.outsideTurkey ? `<div><span class="${"text-sm mb-1 block text-gray-500"}">Ülke</span>
                            ${validate_component(Select, "Select").$$render(
      $$result,
      {
        placeholder: "Seç",
        noOptionsMessage: "Sonuç bulunamadı...",
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

                    <div class="${"lg:col-span-2"}"><label><input type="${"checkbox"}" class="${"rounded-sm ring-0 outline-none"}"${add_attribute("checked", pageData.outsideTurkey, 1)}> <span class="${"text-gray-500 text-sm"}">Türkiye&#39;de yaşamıyorum</span></label></div></div></div>

            <div class="${"bg-[#fbfcff] border-t border-gray-100 p-6 rounded-b-lg text-right"}">${`<button class="${"bg-blue-700 hover:bg-blue-900 px-6 py-2 rounded-full text-white"}">Güncelle
                    </button>`}</div></form></div>

    <div class="${"grow bg-white rounded-lg shadow-md mt-4"}"><form method="${"POST"}" action="${"?/updateEmail"}"><div class="${"bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold"}">E-posta Değiştir</div>
            <div class="${"p-6"}"><p class="${"mb-4"}">E-posta adresini değiştirmek için yeni e-posta adresini ve Netders.com şifreni girmelisin. Bilgilerin doğruysa yeni e-posta adresine altı haneli bir kod gönderilecek ve bir sonraki ekranda bu kodu girmen istenecektir.</p>
                <div class="${"grid lg:grid-cols-3 gap-4"}"><div><span class="${"text-sm mb-1 block text-gray-500"}">Mevcut e-posta</span>
                        <input name="${"currentEmail"}" type="${"text"}" class="${"ring-0 w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}" disabled${add_attribute("value", pageData.email, 0)}></div>
                    <div><span class="${"text-sm mb-1 block text-gray-500"}">Yeni e-posta</span>
                        <input name="${"email"}" type="${"text"}" class="${"ring-0 w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"${add_attribute("value", email, 0)}></div>
                    <div><span class="${"text-sm mb-1 block text-gray-500"}">Şifre</span>
                        <input name="${"password"}" type="${"password"}" class="${"ring-0 w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"${add_attribute("value", password, 0)}></div></div></div>
            <div class="${"bg-[#fbfcff] border-t border-gray-100 p-6 rounded-b-lg text-right"}">${`<button class="${"bg-blue-700 hover:bg-blue-900 px-6 py-2 rounded-full text-white"}">E-posta değiştir
                    </button>`}</div></form></div>

    <div class="${"grow bg-white rounded-lg shadow-md mt-4"}"><form method="${"POST"}" action="${"?/updatePassword"}"><div class="${"bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold"}">Şifre Değiştir</div>
            <div class="${"p-6"}"><div class="${"grid lg:grid-cols-3 gap-4"}"><div><span class="${"text-sm mb-1 block text-gray-500"}">Mevcut şifre</span>
                        <input name="${"password"}" type="${"password"}" class="${"ring-0 w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"></div>
                    <div><span class="${"text-sm mb-1 block text-gray-500"}">Yeni şifre</span>
                        <input name="${"newPassword"}" type="${"password"}" class="${"ring-0 w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"></div>
                    <div><span class="${"text-sm mb-1 block text-gray-500"}">Yeni şifre (tekrar)</span>
                        <input name="${"newPasswordRepeat"}" type="${"password"}" class="${"ring-0 w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"></div></div></div>
            <div class="${"bg-[#fbfcff] border-t border-gray-100 p-6 rounded-b-lg text-right"}">${`<button class="${"bg-blue-700 hover:bg-blue-900 px-6 py-2 rounded-full text-white"}">Şifre değiştir
                    </button>`}</div></form></div>

    <div class="${"grow bg-white rounded-lg shadow-md mt-4"}"><form method="${"POST"}" action="${"?/cancel"}"><div class="${"bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold"}">Üyelik İptali</div>
            <div class="${"p-6"}"><p>Aşağıdaki alana mevcut şifreni ve üyelik iptal nedenini girerek üyeliğini iptal edebilirsin. Üyelik iptali gerçekleştiği anda arama sonuçlarında profiliniz gözükmez ve profil sayfanız kapatılır. 24 saat içerisinde Netders.com&#39;da yer alan profil fotoğrafınız otomatik olarak silinir. Arama motorlarında profilinizin gözükmemesi ortalama 1-2 hafta sürebilir.</p>
                <div class="${"grid grid-cols-1 gap-4 mt-4"}"><div><span class="${"text-sm mb-1 block text-gray-500"}">Mevcut şifre</span>
                        <input name="${"password"}" type="${"password"}" class="${"ring-0 w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"></div>
                    <div><span class="${"text-sm mb-1 block text-gray-500"}">İptal nedeni</span>
                        <textarea name="${"reason"}" class="${"ring-0 w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"></textarea></div></div></div>
            <div class="${"bg-[#fbfcff] border-t border-gray-100 p-6 rounded-b-lg text-right"}">${`<button class="${"bg-red-700 hover:bg-red-900 px-6 py-2 rounded-full text-white"}">Üyeliğimi iptal et
                    </button>`}</div></form></div></div>`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_gendersStore();
  return $$rendered;
});
export {
  Page as default
};
