import { c as create_ssr_component, d as add_attribute, e as escape } from "../../../chunks/index3.js";
import { create, only, test, enforce } from "vest";
import "toastify-js";
import "../../../chunks/index.js";
import "devalue";
import "../../../chunks/svelte-imask.js";
const contactValidationSuite = create((data = {}, currentField) => {
  only(currentField);
  test("firstName", "Ad alanı zorunludur", () => {
    enforce(data.firstName).isNotBlank();
  });
  test("lastName", "Soyad alanı zorunludur", () => {
    enforce(data.lastName).isNotBlank();
  });
  test("email", "E-posta alanı zorunludur", () => {
    enforce(data.email).isNotBlank();
  });
  test("phone", "Telefon alanı zorunludur", () => {
    enforce(data.phone).isNotBlank();
  });
  test("message", "Mesaj alanı zorunludur", () => {
    enforce(data.message).isNotBlank();
  });
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let disabledButton;
  let formState = {};
  let contactValidationSuiteResult = contactValidationSuite.get();
  disabledButton = !contactValidationSuiteResult.isValid();
  return `${$$result.head += `<!-- HEAD_svelte-lwuvnj_START -->${$$result.title = `<title>İletişim</title>`, ""}<!-- HEAD_svelte-lwuvnj_END -->`, ""}

<div class="${"bg-white rounded-lg shadow-md mt-4"}"><div class="${"bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold"}">İletişim</div>
	<div class="${"p-6 max-w-2xl mx-auto"}"><form method="${"POST"}"><div class="${"grid lg:grid-cols-2 gap-6 mt-6"}"><div><span class="${"text-sm mb-1 block text-gray-500"}">Adın</span>
				<input type="${"text"}" class="${"w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"${add_attribute("value", formState.firstName, 0)}>
				${contactValidationSuiteResult.getErrors("firstName") ? `<span class="${"text-xs text-red-500"}">${escape(contactValidationSuiteResult.getErrors("firstName"))}</span>` : ``}</div>
			<div><span class="${"text-sm mb-1 block text-gray-500"}">Soyadın</span>
				<input type="${"text"}" class="${"w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"${add_attribute("value", formState.lastName, 0)}>
				${contactValidationSuiteResult.getErrors("lastName") ? `<span class="${"text-xs text-red-500"}">${escape(contactValidationSuiteResult.getErrors("lastName"))}</span>` : ``}</div>
			<div><span class="${"text-sm mb-1 block text-gray-500"}">E-posta adresin</span>
				<input type="${"email"}" class="${"w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"${add_attribute("value", formState.email, 0)}>
				${contactValidationSuiteResult.getErrors("email") ? `<span class="${"text-xs text-red-500"}">${escape(contactValidationSuiteResult.getErrors("email"))}</span>` : ``}</div>
			<div><span class="${"text-sm mb-1 block text-gray-500"}">Telefon numaran</span>
				<input type="${"text"}" class="${"w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"${add_attribute("value", formState.phone, 0)}>
				${contactValidationSuiteResult.getErrors("phone") ? `<span class="${"text-xs text-red-500"}">${escape(contactValidationSuiteResult.getErrors("phone"))}</span>` : ``}</div>
			<div class="${"col-span-2"}"><span class="${"text-sm mb-1 block text-gray-500"}">Mesajın</span>
				<textarea class="${"w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}">${formState.message || ""}</textarea>
				${contactValidationSuiteResult.getErrors("message") ? `<span class="${"text-xs text-red-500"}">${escape(contactValidationSuiteResult.getErrors("message"))}</span>` : ``}</div>
			<div class="${"col-span-2 mx-auto"}"><button ${disabledButton ? "disabled" : ""} class="${"disabled:bg-gray-400 bg-blue-700 hover:bg-blue-900 py-2 px-4 text-sm md:text-lg md:py-3 md:px-6 text-center rounded-full justify-center text-white md:inline-block"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 mr-1 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"}"></path></svg>
					Gönder
				</button></div></div></form></div></div>`;
});
export {
  Page as default
};
