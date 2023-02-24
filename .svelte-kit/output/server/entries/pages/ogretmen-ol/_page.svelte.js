import { c as create_ssr_component, a as subscribe, d as add_attribute, e as escape, v as validate_component } from "../../../chunks/index3.js";
import { create, only, test, enforce, skipWhen } from "vest";
import { a as getUserIsExists } from "../../../chunks/user.js";
import "imask";
import "../../../chunks/svelte-imask.js";
import { g as gendersStore, l as lastNamePrivacyStore } from "../../../chunks/userStore.js";
import { t as toast } from "../../../chunks/toast.js";
import "../../../chunks/index.js";
import { i as itemFilter, S as Select } from "../../../chunks/selectUtil.js";
import "devalue";
const newTeacherPersonalProfileValidationSuite = create((data = {}, currentField) => {
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
  test("gender", "Cinsiyet alanı zorunludur", () => {
    enforce(data.gender).isNotBlank();
  });
  test("privacyLastName", "Soyadı gizliliği alanı zorunludur", () => {
    enforce(data.privacyLastName).isNotBlank();
  });
  if (data.outsideTurkey) {
    test("country", "Ülke alanı zorunludur", () => {
      enforce(data.country).isNotBlank();
    });
  } else {
    test("city", "Şehir alanı zorunludur", () => {
      enforce(data.city).isNotBlank();
    });
    test("county", "İlçe alanı zorunludur", () => {
      enforce(data.county).isNotBlank();
    });
  }
  skipWhen(newTeacherPersonalProfileValidationSuite.get().hasErrors("email"), () => {
    test.memo(
      "email",
      "E-posta adresi kullanılmaktadır",
      () => {
        if (data.email) {
          return doesEmailExist(data.email);
        }
      },
      [data.email]
    );
  });
  skipWhen(newTeacherPersonalProfileValidationSuite.get().hasErrors("phone"), () => {
    test.memo(
      "phone",
      "Telefon numarası kullanılmaktadır",
      () => {
        if (data.phone) {
          return doesPhoneExist(data.phone);
        }
      },
      [data.phone]
    );
  });
});
async function doesEmailExist(email) {
  let user = await getUserIsExists({ email });
  enforce(user).notEquals(true);
}
async function doesPhoneExist(phone) {
  let user = await getUserIsExists({ phone });
  enforce(user).notEquals(true);
}
const newTeacherDetailValidationSuite = create((data = {}, currentField) => {
  only(currentField);
  test("title", "Başlık alanı zorunludur", () => {
    enforce(data.title).isNotBlank();
  });
  test("about", "Hakkında alanı zorunludur", () => {
    enforce(data.about).isNotBlank();
  });
  test("about", "Hakkında alanına en az 100 karakter bilgi girmelisin", () => {
    enforce(data.about).longerThanOrEquals(100);
  });
  skipWhen(newTeacherDetailValidationSuite.get().hasErrors("username"), () => {
    test.memo(
      "username",
      "Kullanıcı adı kullanılmaktadır",
      () => {
        if (data.username) {
          return doesUsernameExist(data.username);
        }
      },
      [data.username]
    );
  });
});
async function doesUsernameExist(username) {
  let user = await getUserIsExists({ username });
  enforce(user).notEquals(true);
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let newTeacherPersonalProfileDisabledButton;
  let newTeacherDetailDisabledButton;
  let $gendersStore, $$unsubscribe_gendersStore;
  let $lastNamePrivacyStore, $$unsubscribe_lastNamePrivacyStore;
  $$unsubscribe_gendersStore = subscribe(gendersStore, (value) => $gendersStore = value);
  $$unsubscribe_lastNamePrivacyStore = subscribe(lastNamePrivacyStore, (value) => $lastNamePrivacyStore = value);
  let { data } = $$props;
  let { form } = $$props;
  let newTeacherPersonalProfileValidationSuiteResult = newTeacherPersonalProfileValidationSuite.get();
  let newTeacherDetailValidationSuiteResult = newTeacherDetailValidationSuite.get();
  let cities = [];
  let counties = [];
  let countries = [];
  let formState = {};
  formState.outsideTurkey = false;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (formState.firstName) {
        let response = [];
        let firstNameArray = formState.firstName.split(" ");
        for (let i = 0; i < firstNameArray.length; i++) {
          response.push(firstNameArray[i].charAt(0).toUpperCase() + firstNameArray[i].slice(1).toLowerCase());
        }
        formState.firstName = response.join(" ");
      }
    }
    {
      if (formState.lastName) {
        let response = [];
        let lastNameArray = formState.lastName.split(" ");
        for (let i = 0; i < lastNameArray.length; i++) {
          response.push(lastNameArray[i].charAt(0).toUpperCase() + lastNameArray[i].slice(1).toLowerCase());
        }
        formState.lastName = response.join(" ");
      }
    }
    {
      if (form?.errors) {
        Object.entries(form?.errors).forEach((i) => {
          toast(i[1], "warning");
        });
      }
    }
    newTeacherPersonalProfileDisabledButton = !newTeacherPersonalProfileValidationSuiteResult.isValid();
    newTeacherDetailDisabledButton = !newTeacherDetailValidationSuiteResult.isValid();
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-syxjqr_START -->${$$result.title = `<title>Öğretmen Ol</title>`, ""}<!-- HEAD_svelte-syxjqr_END -->`, ""}

<div class="${"flex lg:flex-row flex-col gap-4 justify-between mt-4"}"><div class="${"text-center lg:text-left"}"><h1 class="${"font-semibold text-xl"}">Öğretmen Üyeliği</h1></div>
	<div class="${"text-center lg:mx-0 mx-auto"}"><div class="${"flex gap-6 text-xs"}"><div class="${["flex gap-2 items-center", ""].join(" ").trim()}"><div class="${"rounded-full bg-blue-600 text-white w-8 h-8 flex items-center"}"><div class="${"text-center mx-auto"}">1</div></div>
				<div class="${"font-semibold"}">Kişisel Bilgiler</div></div>
			<div class="${["flex gap-2 items-center", "opacity-40"].join(" ").trim()}"><div class="${"rounded-full bg-blue-600 text-white w-8 h-8 flex items-center"}"><div class="${"text-center mx-auto"}">2</div></div>
				<div class="${"font-semibold"}">Detaylı Bilgiler</div></div></div></div></div>

<div class="${["bg-white rounded-lg shadow-md p-4 mt-4", ""].join(" ").trim()}"><div class="${"max-w-2xl mx-auto"}"><div class="${"font-semibold text-center text-lg"}">Kişisel Bilgiler</div>

		<div class="${"grid lg:grid-cols-2 gap-6 mt-6"}"><div><span class="${"text-sm mb-1 block text-gray-500"}">Adın</span>
				<input type="${"text"}" class="${"w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"${add_attribute("value", formState.firstName, 0)}>
				${newTeacherPersonalProfileValidationSuiteResult.getErrors("firstName") ? `<span class="${"text-xs text-red-500"}">${escape(newTeacherPersonalProfileValidationSuiteResult.getErrors("firstName"))}</span>` : ``}</div>
			<div><span class="${"text-sm mb-1 block text-gray-500"}">Soyadın</span>
				<input type="${"text"}" class="${"w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"${add_attribute("value", formState.lastName, 0)}>
				${newTeacherPersonalProfileValidationSuiteResult.getErrors("lastName") ? `<span class="${"text-xs text-red-500"}">${escape(newTeacherPersonalProfileValidationSuiteResult.getErrors("lastName"))}</span>` : ``}</div>
			<div><span class="${"text-sm mb-1 block text-gray-500"}">E-posta adresin</span>
				<input type="${"email"}" class="${"w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"${add_attribute("value", formState.email, 0)}>
				${newTeacherPersonalProfileValidationSuiteResult.getErrors("email") ? `<span class="${"text-xs text-red-500"}">${escape(newTeacherPersonalProfileValidationSuiteResult.getErrors("email"))}</span>` : ``}</div>
			<div><span class="${"text-sm mb-1 block text-gray-500"}">Telefon numaran</span>
				<input type="${"text"}" class="${"w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"${add_attribute("value", formState.phone, 0)}>
				${newTeacherPersonalProfileValidationSuiteResult.getErrors("phone") ? `<span class="${"text-xs text-red-500"}">${escape(newTeacherPersonalProfileValidationSuiteResult.getErrors("phone"))}</span>` : ``}</div>
			<div><span class="${"text-sm mb-1 block text-gray-500"}">Cinsiyetin</span>
				${validate_component(Select, "Select").$$render(
      $$result,
      {
        items: $gendersStore,
        placeholder: "Seç",
        noOptionsMessage: "Sonuç bulunamadı...",
        optionIdentifier: "id",
        labelIdentifier: "title",
        itemFilter,
        value: formState.gender
      },
      {
        value: ($$value) => {
          formState.gender = $$value;
          $$settled = false;
        }
      },
      {}
    )}
				${newTeacherPersonalProfileValidationSuiteResult.getErrors("gender") ? `<span class="${"text-xs text-red-500"}">${escape(newTeacherPersonalProfileValidationSuiteResult.getErrors("gender"))}</span>` : ``}</div>
			<div><span class="${"text-sm mb-1 block text-gray-500"}">Soyadı gizliliği</span>
				${validate_component(Select, "Select").$$render(
      $$result,
      {
        items: $lastNamePrivacyStore,
        placeholder: "Seç",
        noOptionsMessage: "Sonuç bulunamadı...",
        optionIdentifier: "id",
        labelIdentifier: "title",
        itemFilter,
        value: formState.privacyLastName
      },
      {
        value: ($$value) => {
          formState.privacyLastName = $$value;
          $$settled = false;
        }
      },
      {}
    )}
				${newTeacherPersonalProfileValidationSuiteResult.getErrors("privacyLastName") ? `<span class="${"text-xs text-red-500"}">${escape(newTeacherPersonalProfileValidationSuiteResult.getErrors("privacyLastName"))}</span>` : ``}</div>
			${!formState.outsideTurkey ? `<div><span class="${"text-sm mb-1 block text-gray-500"}">Şehir</span>
				${validate_component(Select, "Select").$$render(
      $$result,
      {
        items: cities,
        placeholder: "Seç",
        noOptionsMessage: "Sonuç bulunamadı...",
        optionIdentifier: "id",
        labelIdentifier: "title",
        itemFilter,
        value: formState.city
      },
      {
        value: ($$value) => {
          formState.city = $$value;
          $$settled = false;
        }
      },
      {}
    )}
				${newTeacherPersonalProfileValidationSuiteResult.getErrors("city") ? `<span class="${"text-xs text-red-500"}">${escape(newTeacherPersonalProfileValidationSuiteResult.getErrors("city"))}</span>` : ``}</div>
			<div><span class="${"text-sm mb-1 block text-gray-500"}">İlçe</span>
				${validate_component(Select, "Select").$$render(
      $$result,
      {
        items: counties,
        placeholder: "Seç",
        noOptionsMessage: "Sonuç bulunamadı...",
        optionIdentifier: "id",
        labelIdentifier: "title",
        itemFilter,
        value: formState.county
      },
      {
        value: ($$value) => {
          formState.county = $$value;
          $$settled = false;
        }
      },
      {}
    )}
				${newTeacherPersonalProfileValidationSuiteResult.getErrors("county") ? `<span class="${"text-xs text-red-500"}">${escape(newTeacherPersonalProfileValidationSuiteResult.getErrors("county"))}</span>` : ``}</div>` : `<div><span class="${"text-sm mb-1 block text-gray-500"}">Ülke</span>
				${validate_component(Select, "Select").$$render(
      $$result,
      {
        items: countries,
        placeholder: "Seç",
        noOptionsMessage: "Sonuç bulunamadı...",
        optionIdentifier: "id",
        labelIdentifier: "title",
        itemFilter,
        value: formState.country
      },
      {
        value: ($$value) => {
          formState.country = $$value;
          $$settled = false;
        }
      },
      {}
    )}
				${newTeacherPersonalProfileValidationSuiteResult.getErrors("country") ? `<span class="${"text-xs text-red-500"}">${escape(newTeacherPersonalProfileValidationSuiteResult.getErrors("country"))}</span>` : ``}</div>`}

			<div class="${"lg:col-span-2"}"><label><input type="${"checkbox"}" class="${"rounded-sm ring-0 outline-none"}"${add_attribute("checked", formState.outsideTurkey, 1)}> <span class="${"text-gray-500 text-sm"}">Türkiye&#39;de yaşamıyorum</span></label></div>

			<div class="${"lg:col-span-2 text-center"}"><button ${newTeacherPersonalProfileDisabledButton ? "disabled" : ""} type="${"button"}" class="${"disabled:bg-gray-400 bg-blue-700 hover:bg-blue-900 py-2 px-4 text-sm md:text-lg md:py-3 md:px-6 text-center rounded-full justify-center text-white md:inline-block"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 mr-1 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"}"></path></svg>
					Devam
				</button></div></div></div></div>

<div class="${["bg-white rounded-lg shadow-md p-4 mt-4", "hidden"].join(" ").trim()}"><div class="${"max-w-2xl mx-auto"}"><div class="${"font-semibold text-center text-lg"}">Detaylı Bilgiler</div>

		<div class="${"grid grid-cols-1 gap-6 mt-6"}"><div><span class="${"text-sm mb-1 block text-gray-500"}">Profil başlığın</span>
				<input type="${"text"}" class="${"w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"${add_attribute("value", formState.title, 0)}>
				<span class="${"text-xs block mt-2 text-gray-400"}">Uzmanından Matematik Dersi, İngilizce Öğrenmek Artık Çok Kolay, Şan Hocasından Piyano Dersi örnekleri gibi seni ön plana çıkartacak çarpıcı bir başlık girmelisin.</span>
				${newTeacherDetailValidationSuiteResult.getErrors("title") ? `<span class="${"text-xs text-red-500"}">${escape(newTeacherDetailValidationSuiteResult.getErrors("title"))}</span>` : ``}</div>
			<div><span class="${"text-sm mb-1 block text-gray-500"}">Hakkında</span>
				<textarea maxlength="${"500"}" rows="${"5"}" class="${"w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}">${formState.about || ""}</textarea>
				<span class="${"text-xs block mt-1 text-gray-400"}">Kendin ve eğitiminle ilgili minimum 100 karakter bilgi girmelisin.</span>
				${newTeacherDetailValidationSuiteResult.getErrors("about") ? `<span class="${"text-xs text-red-500"}">${escape(newTeacherDetailValidationSuiteResult.getErrors("about"))}</span>` : ``}</div>

			<div><span class="${"text-sm mb-1 block text-gray-500"}">Netders profil adresin</span>
				<div class="${"flex flex-row items-center"}"><div class="${"rounded-l-md border-t border-l border-b bg-gray-50 h-[42px] px-3 pt-2 border-gray-300"}">netders.com</div>
					<div class="${"grow"}"><input type="${"text"}" class="${"w-full rounded-r-md border-t border-r border-b border-gray-300 hover:border-gray-300 focus:border-gray-300 focus:ring-0"}"${add_attribute("value", formState.username, 0)}></div></div>
				<span class="${"text-xs block mt-2 text-gray-400"}">Profil sayfana özel bir isim belirleyebilirsin. Zorunlu değildir.</span>
				${newTeacherDetailValidationSuiteResult.getErrors("username") ? `<span class="${"text-xs text-red-500"}">${escape(newTeacherDetailValidationSuiteResult.getErrors("username"))}</span>` : ``}</div>

			<div class="${"text-center"}"><form method="${"POST"}"><button type="${"button"}" class="${"mr-4 py-2 px-4 text-sm md:text-lg md:py-3 md:px-6 text-center rounded-full justify-center text-blue-700 md:inline-block"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 mr-1 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"}"></path></svg>
						Geri
					</button>

					<button ${newTeacherDetailDisabledButton ? "disabled" : ""} class="${"disabled:bg-gray-400 bg-blue-700 hover:bg-blue-900 py-2 px-4 text-sm md:text-lg md:py-3 md:px-6 text-center rounded-full justify-center text-white md:inline-block"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 mr-1 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"}"></path></svg>
						Kaydet
					</button></form></div></div></div></div>`;
  } while (!$$settled);
  $$unsubscribe_gendersStore();
  $$unsubscribe_lastNamePrivacyStore();
  return $$rendered;
});
export {
  Page as default
};
