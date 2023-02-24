import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index3.js";
import { I as Input } from "../../../../chunks/Input.js";
import "devalue";
import { t as toast } from "../../../../chunks/toast.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  {
    if (form?.errors) {
      Object.entries(form?.errors).forEach((i) => {
        toast(i[1], "warning");
      });
    }
  }
  return `${$$result.head += `<!-- HEAD_svelte-bptpao_START -->${$$result.title = `<title>Şifre Sıfırlama</title>`, ""}<!-- HEAD_svelte-bptpao_END -->`, ""}

<div class="${"max-w-2xl bg-white rounded-lg p-10 mx-auto border border-gray-300 mt-4"}"><div class="${"sm:w-full text-left m-auto lg:m-0"}"><h1 class="${"text-3xl md:text-4xl font-bold mb-4"}">Şifre Sıfırlama</h1>
		<p class="${"mb-4"}">Hesabına giriş yaparken kullandığın e-posta adresini veya telefon numaranı, e-posta adresine gönderilen kodu ve yeni şifreni girerek şifreni sıfırlayabilirsin.</p>
		<p class="${"mb-10 text-sm text-gray-500"}">Şifreni hatırladıysan giriş yapmak için <a class="${"text-blue-700 hover:text-blue-900"}" href="${"/auth/login"}">buraya</a> tıkla.</p>
		<div class="${"w-full"}"><form method="${"POST"}" autocomplete="${"off"}"><div><div class="${"mt-1 rounded-md"}">${validate_component(Input, "Input").$$render(
    $$result,
    {
      name: "login",
      label: "E-posta veya cep telefonu",
      placeholder: "",
      type: "text"
    },
    {},
    {}
  )}</div>

					<div class="${"mt-1 rounded-md"}">${validate_component(Input, "Input").$$render(
    $$result,
    {
      name: "code",
      label: "E-posta adresine gönderilen kod",
      placeholder: "",
      type: "text"
    },
    {},
    {}
  )}</div>

					<div class="${"mt-1 rounded-md"}">${validate_component(Input, "Input").$$render(
    $$result,
    {
      name: "newPassword",
      label: "Yeni şifren",
      placeholder: "",
      type: "password"
    },
    {},
    {}
  )}</div>

					<div class="${"mt-1 rounded-md"}">${validate_component(Input, "Input").$$render(
    $$result,
    {
      name: "newPasswordRepeat",
      label: "Yeni şifren (tekrar)",
      placeholder: "",
      type: "password"
    },
    {},
    {}
  )}</div></div>

				<div class="${"mt-4"}"><span class="${"block w-full rounded-md"}"><button type="${"submit"}" class="${"w-full flex justify-center py-2 px-4 border border-transparent text-md font-medium rounded-md text-white bg-blue-700 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out"}">Şifremi Değiştir
						</button></span></div></form></div></div></div>`;
});
export {
  Page as default
};
