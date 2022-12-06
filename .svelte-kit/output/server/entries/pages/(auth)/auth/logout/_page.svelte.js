import { c as create_ssr_component, d as add_attribute } from "../../../../../chunks/index.js";
const Bye = "/_app/immutable/assets/bye-688e24e7.png";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex text-center h-screen my-auto items-center justify-center"}"><div><div class="${"mt-2 text-7xl font-bold"}">Good bye!</div>
        <img${add_attribute("src", Bye, 0)} width="${"300"}" class="${"mx-auto my-12"}">
        <div class="${"text-2xl font-bold"}">Hesab\u0131ndan ba\u015Far\u0131yla \xE7\u0131k\u0131\u015F yapt\u0131n.</div>
        <div class="${"mt-2"}">En yak\u0131n zamanda tekrar g\xF6r\xFC\u015Fmek dile\u011Fiyle.</div>
        <a href="${"/"}" class="${"bg-blue-700 hover:bg-blue-900 py-2 px-4 text-sm md:text-lg md:py-3 md:px-6 text-center rounded-full justify-center text-white mt-4 block md:inline-block"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 mr-1 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"}"></path></svg>

            Ana Sayfa
        </a></div></div>`;
});
export {
  Page as default
};
