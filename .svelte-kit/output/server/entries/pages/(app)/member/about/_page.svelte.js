import { c as create_ssr_component, v as validate_component, d as add_attribute, e as escape } from "../../../../../chunks/index.js";
import { M as MemberHorizontalNavigation, a as MemberVerticalNavigation } from "../../../../../chunks/MemberVerticalNavigation.js";
import { a as aboutModel } from "../../../../../chunks/userModel.js";
import "toastify-js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a, _b;
  let { data } = $$props;
  let pageData = aboutModel;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-gc8sqe_START -->${$$result.title = `<title>Hakk\u0131nda</title>`, ""}<!-- HEAD_svelte-gc8sqe_END -->`, ""}

${validate_component(MemberHorizontalNavigation, "MemberHorizontalNavigation").$$render($$result, {}, {}, {})}

<div class="${"flex gap-4 mt-4"}"><div class="${"min-w-[190px]"}">${validate_component(MemberVerticalNavigation, "MemberVerticalNavigation").$$render($$result, {}, {}, {})}</div>
    <div class="${"grow bg-white rounded-lg shadow-md"}"><div class="${"bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold"}">Hakk\u0131nda</div>
        <div class="${"p-6"}"><div class="${"grid grid-cols-1 gap-4"}"><div><span class="${"text-sm block text-gray-500 mb-1"}">Ba\u015Fl\u0131k</span>
                    <input placeholder="${"Seni veya uzmanl\u0131\u011F\u0131n\u0131 anlatan tek c\xFCmlelik bir bilgi yaz"}" maxlength="${"70"}" type="${"text"}" class="${"ring-0 w-full block rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"${add_attribute("value", pageData.title, 0)}>
                    <small class="${"text-gray-400"}">En fazla ${escape(70 - (((_a = pageData.title) == null ? void 0 : _a.length) || 0))} karakter</small></div>
                <div><span class="${"text-sm mb-1 block text-gray-500"}">Hakk\u0131nda</span>
                    <textarea maxlength="${"500"}" placeholder="${"Senin ve uzmanl\u0131\u011F\u0131n hakk\u0131nda detayl\u0131 bilgi yaz"}" rows="${"5"}" class="${"ring-0 w-full block rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}">${""}</textarea>
                    <small class="${"text-gray-400"}">En fazla ${escape(500 - (((_b = pageData.about) == null ? void 0 : _b.length) || 0))} karakter</small></div></div></div>

        <div class="${"bg-[#fbfcff] border-t border-gray-100 p-6 rounded-b-lg text-right"}">${`<button class="${"bg-blue-700 hover:bg-blue-900 px-6 py-2 rounded-full text-white"}"><span>Kaydet</span></button>`}</div></div></div>`;
});
export {
  Page as default
};
