import { c as create_ssr_component, f as escape, v as validate_component } from "../../../../../chunks/index.js";
import { U as UserCard } from "../../../../../chunks/UserCard.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let userData = {};
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-8oibt4_START -->${$$result.title = `<title>${escape(data.title)}</title>`, ""}<!-- HEAD_svelte-8oibt4_END -->`, ""}

<div class="${"bg-white rounded-lg shadow-md mt-4"}"><div class="${"bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold"}">${escape(data.title)}</div>
	<div class="${"p-6"}">${escape(data.content)}

		<ul class="${"mt-4"}"><li>Ders: ${escape(data.subject.title)}</li>
			<li>Konu: ${escape(data.level.title)}</li>
			${data.pricePrivate ? `<li>Y\xFCz Y\xFCze Ders \xDCcreti: ${escape(data.pricePrivate)}\u20BA</li>` : ``}
			${data.priceLive ? `<li>Uzaktan, Webcam Ders \xDCcreti: ${escape(data.priceLive)}\u20BA</li>` : ``}</ul></div></div>

${Object.entries(userData).length > 0 ? `<div class="${"bg-white rounded-lg shadow-md mt-4"}"><div class="${"bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold"}">${escape(userData.firstName)} ${escape(userData.lastName)} Hakk\u0131nda</div>
		<div class="${"p-6"}"><div class="${"lg:flex lg:flex-row gap-6"}">${validate_component(UserCard, "UserCard").$$render($$result, { userData }, {}, {})}</div></div></div>` : ``}`;
});
export {
  Page as default
};
