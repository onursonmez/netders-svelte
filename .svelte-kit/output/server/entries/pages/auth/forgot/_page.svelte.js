import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { I as Input } from "../../../../chunks/Input.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let login;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1pq628u_START -->${$$result.title = `<title>\u015Eifremi Unuttum</title>`, ""}<!-- HEAD_svelte-1pq628u_END -->`, ""}

<div class="${"max-w-2xl bg-white rounded-lg p-10 mx-auto border border-gray-300 mt-4"}"><div class="${"sm:w-full text-left m-auto lg:m-0"}"><h1 class="${"text-3xl md:text-4xl font-bold mb-4"}">\u015Eifremi unuttum</h1>
		<p class="${"mb-4"}">\u015Eifre hat\u0131rlatma e-postas\u0131 almak i\xE7in a\u015Fa\u011F\u0131daki alana e-posta adresini gir.</p>
		<p class="${"mb-10 text-sm text-gray-500"}">\u015Eifreni hat\u0131rlad\u0131ysan giri\u015F yapmak i\xE7in <a class="${"text-blue-700 hover:text-blue-900"}" href="${"/auth/login"}">buraya</a> t\u0131kla.</p>
		<div class="${"w-full"}"><form><div><div class="${"mt-1 rounded-md"}">${validate_component(Input, "Input").$$render(
      $$result,
      {
        id: "login",
        label: "E-posta",
        placeholder: "",
        type: "text",
        value: login
      },
      {
        value: ($$value) => {
          login = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>

				<div class="${"mt-10"}"><span class="${"block w-full rounded-md"}"><button type="${"submit"}" class="${"w-full flex justify-center py-2 px-4 border border-transparent text-md font-medium rounded-md text-white bg-blue-700 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out"}">\u015Eifremi Hat\u0131rlat
						</button></span></div></form></div></div></div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
