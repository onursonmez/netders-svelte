import { c as create_ssr_component, b as subscribe, v as validate_component, d as add_attribute, f as each, e as escape } from "../../../../../chunks/index.js";
import { M as MemberHorizontalNavigation } from "../../../../../chunks/MemberHorizontalNavigation.js";
import { u as userStore, g as gendersStore } from "../../../../../chunks/userStore.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userStore, $$unsubscribe_userStore;
  let $gendersStore, $$unsubscribe_gendersStore;
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  $$unsubscribe_gendersStore = subscribe(gendersStore, (value) => $gendersStore = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_userStore();
  $$unsubscribe_gendersStore();
  return `${$$result.head += `<!-- HEAD_svelte-juqmny_START -->${$$result.title = `<title>\xD6zel Ders Talebi Olu\u015Ftur</title>`, ""}<!-- HEAD_svelte-juqmny_END -->`, ""}

${validate_component(MemberHorizontalNavigation, "MemberHorizontalNavigation").$$render($$result, {}, {}, {})}

<div class="${"bg-white rounded-lg shadow-md mt-4"}"><div class="${"p-6 max-w-2xl text-center mx-auto"}"><div class="${"font-semibold text-lg"}">Ki\u015Fisel bilgiler</div>

		<div class="${"grid grid-cols-2 gap-4 mt-4"}"><div><span class="${"text-sm mb-1 block text-gray-500"}">Ad\u0131n</span>
				<input type="${"text"}" class="${"w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"${add_attribute("value", $userStore.firstName, 0)}></div>
			<div><span class="${"text-sm mb-1 block text-gray-500"}">Soyad\u0131n</span>
				<input type="${"text"}" class="${"w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"${add_attribute("value", $userStore.lastName, 0)}></div>
			<div><span class="${"text-sm mb-1 block text-gray-500"}">Telefon numaran</span>
				<input type="${"number"}" class="${"w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"${add_attribute("value", $userStore.phone, 0)}></div>
			<div><span class="${"text-sm mb-1 block text-gray-500"}">Cinsiyetin</span>
				<select class="${"w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"><option value="${""}">Se\xE7im yapmad\u0131n</option>${each($gendersStore, (gender) => {
    return `<option${add_attribute("value", gender.id, 0)}>${escape(gender.title)}</option>`;
  })}</select></div></div>

		<button class="${"bg-blue-700 hover:bg-blue-900 px-6 py-2 rounded-full text-white mt-4"}"><span>Kaydet</span></button></div></div>`;
});
export {
  Page as default
};
