import { c as create_ssr_component, d as add_attribute, v as validate_component, e as escape } from "../../../../chunks/index3.js";
import { I as Input } from "../../../../chunks/Input.js";
import { t as toast } from "../../../../chunks/toast.js";
import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  let loginData = {
    login: "tavhane@gmail.com",
    password: "deneme123*",
    rememberMe: false
  };
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (form?.errors) {
        Object.entries(form?.errors).forEach((i) => {
          toast(i[1], "warning");
        });
      }
    }
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-qnxa8i_START -->${$$result.title = `<title>Giriş</title>`, ""}<!-- HEAD_svelte-qnxa8i_END -->`, ""}

<div class="${"flex max-w-6xl mx-auto mt-4"}"><div class="${"grow"}"><div class="${"bg-white rounded-lg p-10 sm:m-auto md:m-auto lg:m-0"}" style="${"border: solid 1px #CACED0; min-height: 524px;"}"><div class="${"sm:w-full text-left m-auto lg:m-0"}"><h1 class="${"text-3xl md:text-4xl font-bold mb-4"}">Hesabına giriş yap</h1>
				<p class="${"mb-4"}">Henüz üye değil misin? Özel ders almak için <a class="${"text-blue-700 hover:text-blue-900"}" href="${"/ozel-ders-talebi-olustur"}">buraya</a>, öğretmen olmak için <a class="${"text-blue-700 hover:text-blue-900"}" href="${"/ogretmen-ol"}">buraya</a> tıklayın.</p>
				<div class="${"mb-4"}"><ul class="${"flex flex-row justify-center gap-4 font-semibold cursor-pointer"}"><li${add_attribute(
      "class",
      "border-b-2 border-blue-700 text-blue-700",
      0
    )}>E-posta</li>
						<li${add_attribute(
      "class",
      "",
      0
    )}>Telefon</li></ul></div>
				<div class="${"w-full"}"><form method="${"POST"}"><div><div class="${"mt-1 rounded-md"}">${validate_component(Input, "Input").$$render(
      $$result,
      {
        name: "login",
        id: "login",
        label: "E-posta",
        placeholder: "",
        type: "text",
        value: loginData.login
      },
      {
        value: ($$value) => {
          loginData.login = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>

						<div class="${"relative mt-2"}">${validate_component(Input, "Input").$$render(
      $$result,
      {
        name: "password",
        id: "password",
        label: "Şifre",
        placeholder: "",
        type: "password",
        value: loginData.password
      },
      {
        value: ($$value) => {
          loginData.password = $$value;
          $$settled = false;
        }
      },
      {}
    )}
							<div class="${"absolute bottom-1 right-1 p-1 bg-white cursor-pointer"}">${`<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-6 h-6 text-gray-400"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"}"></path></svg>`}</div></div>

						<div class="${"mt-2 flex flex-col md:flex-row justify-between"}"><div class="${"flex items-center"}"><input id="${"remember-me"}" type="${"checkbox"}" class="${"form-checkbox h-4 w-4 tw-blue transition duration-150 ease-in-out"}"${add_attribute("checked", loginData.rememberMe, 1)}>
								<label for="${"remember-me"}" class="${"ml-2 block text-sm leading-5 text-gray-900"}">Beni hatırla
								</label></div>

							<div class="${"text-sm leading-5 mt-4 md:mt-0"}"><a href="${"/auth/forgot"}" class="${"font-medium tw-blue focus:outline-none no-underline transition ease-in-out duration-150"}">Şifremi unuttum
								</a></div></div>

						<div class="${"mt-10"}"><button type="${"submit"}" class="${"w-full flex justify-center py-2 px-4 border border-transparent text-md font-medium rounded-md text-white bg-blue-700 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out"}">Giriş
							</button></div></form></div></div></div></div>
	<div class="${"flex-none ml-1 hidden lg:block"}"><img style="${"height: 524px;"}" src="${escape("https://d1ql1h7f6x0zr6.cloudfront.net/", true) + "login-screen.png"}" alt="${""}"></div></div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
