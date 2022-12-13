import { c as create_ssr_component, b as subscribe, v as validate_component } from "../../../../chunks/index.js";
import { m as mediaCardModel, M as MediaCardContainer } from "../../../../chunks/commonModel.js";
import "toastify-js";
import { M as MemberHorizontalNavigation, a as MemberVerticalNavigation } from "../../../../chunks/MemberVerticalNavigation.js";
import "../../../../chunks/selectUtil.js";
import "classnames";
import "../../../../chunks/Clipboard.svelte_svelte_type_style_lang.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_userStore;
  $$unsubscribe_userStore = subscribe(userStore, (value) => value);
  $$unsubscribe_userStore();
  return `${$$result.head += `<!-- HEAD_svelte-143as3b_START -->${$$result.title = `<title>Hesab\u0131m</title>`, ""}<!-- HEAD_svelte-143as3b_END -->`, ""}

${validate_component(MemberHorizontalNavigation, "MemberHorizontalNavigation").$$render($$result, {}, {}, {})}

<div class="${"flex gap-4 mt-4"}"><div class="${"min-w-[210px]"}">${validate_component(MemberVerticalNavigation, "MemberVerticalNavigation").$$render($$result, {}, {}, {})}</div>
	<div class="${"grow bg-white rounded-lg shadow-md"}"><div class="${"bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold"}">Ders Talepleri</div>
		<div class="${"p-6 flex gap-2 flex-col"}"><div class="${"lg:flex lg:flex-row gap-6 bg-white p-6 rounded-lg border"}">${validate_component(MediaCardContainer, "MediaCardContainer").$$render($$result, { data: mediaCardModel }, {}, {})}</div></div></div></div>`;
});
export {
  Page as default
};
