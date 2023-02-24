import { c as create_ssr_component, d as add_attribute, e as escape } from "../../../../chunks/index3.js";
import { t as toast } from "../../../../chunks/toast.js";
import { a as aboutModel } from "../../../../chunks/userModel.js";
import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  let pageData = aboutModel;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  {
    if (form?.errors) {
      Object.entries(form?.errors).forEach((i) => {
        toast(i[1], "warning");
      });
    }
  }
  return `${$$result.head += `<!-- HEAD_svelte-1w1zlx9_START -->${$$result.title = `<title>Hesabım • Hakkında</title>`, ""}<!-- HEAD_svelte-1w1zlx9_END -->`, ""}

<div><div class="${"grow bg-white rounded-lg shadow-md"}"><div class="${"bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold"}">Hakkında</div>

        <form><div class="${"p-6"}"><p>Başlık ve hakkında metni öğrencilerin senin hakkında daha detaylı bilgi alması için gerekli olan en kritik bilgidir. Lütfen bu iki alanı doldururken aceleye getirme. Kendin ve uzmanlığın hakkında etkileyici bir bilgi vermen, öğrencilerin profiline olan ilgisini arttıracaktır.</p>
                <div class="${"grid grid-cols-1 gap-4 mt-4"}"><div><span class="${"text-sm block text-gray-500 mb-1"}">Başlık</span>
                        <input name="${"title"}" placeholder="${"Seni veya uzmanlığını anlatan tek cümlelik bir bilgi yaz"}" maxlength="${"70"}" type="${"text"}" class="${"ring-0 w-full block rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"${add_attribute("value", pageData.title, 0)}>
                        <small class="${"text-gray-400"}">En fazla ${escape(70 - (pageData.title?.length || 0))} karakter</small></div>
                    <div><span class="${"text-sm mb-1 block text-gray-500"}">Hakkında</span>
                        <textarea name="${"about"}" maxlength="${"500"}" placeholder="${"Senin ve uzmanlığın hakkında detaylı bilgi yaz"}" rows="${"5"}" class="${"ring-0 w-full block rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}">${""}</textarea>
                        <small class="${"text-gray-400"}">En fazla ${escape(500 - (pageData.about?.length || 0))} karakter</small></div></div></div>

            <div class="${"bg-[#fbfcff] border-t border-gray-100 p-6 rounded-b-lg text-right"}">${`<button class="${"bg-blue-700 hover:bg-blue-900 px-6 py-2 rounded-full text-white"}"><span>Kaydet</span></button>`}</div></form></div></div>`;
});
export {
  Page as default
};
