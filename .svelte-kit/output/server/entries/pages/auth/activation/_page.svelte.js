import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../../../chunks/index.js";
import { I as Input } from "../../../../chunks/Input.js";
import { L as Logo } from "../../../../chunks/netders-logo-blue.js";
import "toastify-js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let email = data.email;
  let code = data.code;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-8o100v_START -->${$$result.title = `<title>E-posta Aktivasyonu</title>`, ""}<!-- HEAD_svelte-8o100v_END -->`, ""}

<div class="${"mx-auto my-8"}"><a href="${"/"}"><img${add_attribute("src", Logo, 0)} width="${"200"}" height="${"200"}"></a></div>
<div class="${[
      "max-w-2xl bg-white rounded-lg p-10 mx-auto border border-gray-300",
      "hidden"
    ].join(" ").trim()}"><div class="${"sm:w-full text-left m-auto lg:m-0"}"><div class="${"p-6 max-w-2xl text-center mx-auto"}"><div class="${"font-semibold text-lg"}">Aktivasyon ba\u015Far\u0131l\u0131!</div>
			<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-64 h-64 mx-auto animate-pulse text-green-500"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg>
			<p>E-posta aktivasyon i\u015Flemi ba\u015Far\u0131yla tamamland\u0131.</p>
			<p class="${"text-gray-400 text-sm"}">Yapmak istedi\u011Fin i\u015Flemlere art\u0131k devam edebilirsin \u{1F603}</p>

			<a href="${"/"}" class="${"bg-blue-700 hover:bg-blue-900 py-2 px-4 text-sm md:text-lg md:py-3 md:px-6 text-center rounded-full justify-center text-white mt-4 block md:inline-block"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 mr-1 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"}"></path></svg>

				Ana Sayfa
			</a></div></div></div>

<div class="${[
      "max-w-2xl bg-white rounded-lg p-10 mx-auto border border-gray-300 mt-4",
      ""
    ].join(" ").trim()}"><div class="${"sm:w-full text-left m-auto lg:m-0"}"><h1 class="${"text-3xl md:text-4xl font-bold mb-3"}">E-posta aktivasyonu</h1>
		<p class="${"mb-2"}">E-posta adresine g\xF6nderilen bilgileri a\u015Fa\u011F\u0131daki alanlara girerek Aktive Et butonuna t\u0131kla.</p>
		<div class="${"w-full"}"><form><div><div class="${"mt-1"}">${validate_component(Input, "Input").$$render(
      $$result,
      {
        id: "email",
        label: "E-posta",
        placeholder: "",
        type: "text",
        value: email
      },
      {
        value: ($$value) => {
          email = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>
				<div><div class="${"mt-1"}">${validate_component(Input, "Input").$$render(
      $$result,
      {
        id: "login",
        label: "Kod",
        placeholder: "",
        type: "text",
        value: code
      },
      {
        value: ($$value) => {
          code = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>

				<div class="${"mt-10"}"><span class="${"block w-full rounded-md"}"><button type="${"submit"}" class="${"w-full flex justify-center py-2 px-4 border border-transparent text-md font-medium rounded-md text-white bg-blue-700 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out"}">Aktive Et
									</button></span></div></form></div></div></div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
