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
  return `${$$result.head += `<!-- HEAD_svelte-1pq628u_START -->${$$result.title = `<title>Şifremi Unuttum</title>`, ""}<!-- HEAD_svelte-1pq628u_END -->`, ""}

<div class="${"max-w-2xl bg-white rounded-lg p-10 mx-auto border border-gray-300 mt-4"}"><div class="${"sm:w-full text-left m-auto lg:m-0"}"><h1 class="${"text-3xl md:text-4xl font-bold mb-4"}">Şifremi unuttum</h1>
		<p class="${"mb-4"}">Şifre hatırlatma e-postası almak için aşağıdaki alana e-posta adresini veya cep telegonu numaranı gir.</p>
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
  )}</div></div>

				<div class="${"mt-4"}"><span class="${"block w-full rounded-md"}"><button type="${"submit"}" class="${"w-full flex justify-center py-2 px-4 border border-transparent text-md font-medium rounded-md text-white bg-blue-700 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out"}">Şifremi Hatırlat
						</button></span></div></form></div></div></div>`;
});
export {
  Page as default
};
