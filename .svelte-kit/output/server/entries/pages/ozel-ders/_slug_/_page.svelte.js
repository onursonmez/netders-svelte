import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../chunks/index.js";
import { M as MediaCardContainer } from "../../../../chunks/MediaCardContainer.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-io8rdl_START -->${$$result.title = `<title>${escape(data.price.title)}</title>`, ""}<!-- HEAD_svelte-io8rdl_END -->`, ""}

<div class="${"bg-white rounded-lg shadow-md mt-4"}"><div class="${"bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold"}">${escape(data.price.title)}</div>
	<div class="${"p-6"}">${escape(data.price.content)}

		<ul class="${"mt-4"}"><li>Ders: ${escape(data.price.subject.title)}</li>
			<li>Konu: ${escape(data.price.level.title)}</li>
			${data.price.pricePrivate ? `<li>Y\xFCz Y\xFCze Ders \xDCcreti: ${escape(data.price.pricePrivate)}\u20BA</li>` : ``}
			${data.price.priceLive ? `<li>Uzaktan, Webcam Ders \xDCcreti: ${escape(data.price.priceLive)}\u20BA</li>` : ``}</ul></div></div>

${Object.entries(data.user).length > 0 ? `<div class="${"bg-white rounded-lg shadow-md mt-4"}"><div class="${"bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold"}">${escape(data.user.firstName)} ${escape(data.user.lastName)} Hakk\u0131nda</div>
		<div class="${"p-6"}"><div class="${"lg:flex lg:flex-row gap-6"}">${validate_component(MediaCardContainer, "MediaCardContainer").$$render(
    $$result,
    {
      user: {
        ...data.user,
        showShare: true,
        showApprovedBadge: true,
        showIsOnlineBadge: true,
        showRequest: true
      }
    },
    {},
    {}
  )}</div></div></div>` : ``}`;
});
export {
  Page as default
};
