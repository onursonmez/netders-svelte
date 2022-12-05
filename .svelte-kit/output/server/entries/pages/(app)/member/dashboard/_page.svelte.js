import { c as create_ssr_component, e as escape, d as add_attribute, f as each, v as validate_component } from "../../../../../chunks/index.js";
import { S as Student2, R as RangeSlider } from "../../../../../chunks/RangeSlider.js";
import "toastify-js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentStep = 4;
  let lessons = { items: [], total: 0 };
  let locations = { items: [], total: 0 };
  let requestData = {
    keywordLesson: "",
    keywordLocation: "",
    outsideTurkey: false,
    levelId: "",
    countryId: "",
    countyId: "",
    placeOwn: false,
    placeTeacher: false,
    placeRemote: false,
    budget: [50, 200],
    budgetSecret: false,
    genderId: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    responseTypeId: "",
    isAgreementChecked: false
  };
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        locations = { items: [], total: 0 };
      }
    }
    {
      {
        lessons = { items: [], total: 0 };
      }
    }
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-juqmny_START -->${$$result.title = `<title>\xD6zel Ders Talebi Olu\u015Ftur</title>`, ""}<!-- HEAD_svelte-juqmny_END -->`, ""}

<div class="${["max-w-2xl w-full mx-auto mt-8 mb-4", ""].join(" ").trim()}"><h2 class="${"sr-only"}">Ad\u0131mlar</h2>
	<div><div class="${"overflow-hidden rounded-full bg-white"}"><div class="${[
      "h-2 rounded-full bg-blue-500 " + escape("w-" + (currentStep - 1) + "/5", true),
      ""
    ].join(" ").trim()}"></div></div>

		<ol class="${"mt-4 grid grid-cols-5 text-sm font-medium"}"><li class="${[
      "flex items-center justify-center",
      ""
    ].join(" ").trim()}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"h-5 w-5"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"}"></path></svg>
				<span class="${"hidden md:block ml-1"}">Ders</span></li>

			<li class="${[
      "flex items-center justify-center",
      ""
    ].join(" ").trim()}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"h-5 w-5"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"}"></path><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"}"></path></svg>
				<span class="${"hidden md:block ml-1"}">Yer</span></li>

			<li class="${[
      "flex items-center justify-center",
      requestData.placeIds && requestData.genderId && (requestData.budget || requestData.budgetSecret) ? "text-blue-600" : ""
    ].join(" ").trim()}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"h-5 w-5"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"}"></path><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}"></path></svg>
				<span class="${"hidden md:block ml-1"}">Kriter</span></li>

			<li class="${[
      "flex items-center justify-center",
      ""
    ].join(" ").trim()}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"h-5 w-5"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"}"></path></svg>

				<span class="${"hidden md:block ml-1"}">Bilgiler</span></li>

			<li class="${["flex items-center justify-center", ""].join(" ").trim()}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"h-5 w-5"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"}"></path></svg>

				<span class="${"hidden md:block ml-1"}">Bitti</span></li></ol></div></div>

<div class="${["bg-white rounded-lg shadow-md mt-4", "hidden"].join(" ").trim()}"><div class="${"p-6"}"><div class="${"grid md:grid-cols-4"}"><div class="${"hidden md:block"}"><img${add_attribute("src", Student2, 0)} alt="${""}"></div>
			<div class="${"md:col-span-3"}"><h5 class="${"font-semibold text-2xl"}">Do\u011Fru \xF6\u011Fretmene ula\u015Fman\u0131n en kolay kolu</h5>
				<p class="${"mt-1"}">Almak istedi\u011Fin \xF6zel dersle ilgili do\u011Fru \xF6\u011Fretmeni bulam\u0131yor veya buldu\u011Fun \xF6\u011Fretmenlerden emin olam\u0131yorsan, \xF6zel ders talebi b\u0131rakarak kriterlerine en uygun \xF6\u011Fretmenin sana ula\u015Fmas\u0131n\u0131 sa\u011Flayabilirsin.</p>
				<p class="${"font-semibold mt-4"}">Ders talebi b\u0131rakman\u0131n avantajlar\u0131</p>
				<ul class="${"list-none mt-1"}"><li>\u2B50 \xDCcretsizdir. Ders talebi b\u0131rakmak i\xE7in herhangi bir \xFCcret \xF6demezsin.</li>
					<li>\u2B50 Kolayd\u0131r. Sen \xF6\u011Fretmen aramazs\u0131n, \xF6\u011Fretmen sana ula\u015F\u0131r.</li>
					<li>\u2B50 Se\xE7me hakk\u0131n olur. Yaln\u0131zca be\u011Fendi\u011Fin \xF6\u011Fretmenle devam edersin.</li>
					<li>\u2B50 H\u0131zl\u0131d\u0131r. Yakla\u015F\u0131k 1-2 saat i\xE7erisinde arad\u0131\u011F\u0131n \xF6\u011Fretmeni bulursun.</li>
					<li>\u2B50 G\xFCvenlidir. Yaln\u0131zca kriterlerini tam olarak kar\u015F\u0131layan, onayl\u0131 \xF6\u011Fretmenler sana ula\u015Fabilir.</li></ul>


				<button class="${"bg-blue-700 hover:bg-blue-900 py-2 px-4 text-sm md:text-lg md:py-3 md:px-6 text-center rounded-full justify-center text-white mt-6 block md:inline-block"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 mr-1 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M12 6v12m6-6H6"}"></path></svg>
					Ders Talebi Olu\u015Ftur
				</button></div></div></div></div>

<div class="${["bg-white rounded-lg shadow-md mt-2", "hidden"].join(" ").trim()}"><div class="${"p-6 max-w-2xl text-center mx-auto"}"><div class="${"font-semibold text-lg mb-4"}">Almak istedi\u011Fin \xF6zel ders nedir?</div>
		<label for="${"default-search"}" class="${"mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"}">Arama</label>
		<div class="${"relative"}"><div class="${"flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"}"><svg aria-hidden="${"true"}" class="${"w-5 h-5 text-gray-500 dark:text-gray-400"}" fill="${"none"}" stroke="${"currentColor"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}"></path></svg></div>
			<input autocomplete="${"off"}" type="${"text"}" id="${"default-search"}" class="${"block p-4 pl-10 w-full text-sm text-gray-900 border border-gray-300 shadow-md rounded-lg border-0"}" placeholder="${"Almak istedi\u011Fin \xF6zel dersin ad\u0131n\u0131 yazar m\u0131s\u0131n?"}"${add_attribute("value", requestData.keywordLesson, 0)}></div>

		<p class="${"text-xs mt-4 text-gray-400"}">Yukar\u0131daki alana almak istedi\u011Fin \xF6zel dersin ad\u0131n\u0131 yazmal\u0131s\u0131n.</p></div>

	${requestData.keywordLesson.length > 0 ? `<div class="${"grid grid-cols-2 lg:grid-cols-3 gap-4 px-6 pb-6"}"><div class="${"col-span-2 lg:col-span-3 text-center"}">&quot;<span class="${"font-semibold"}">${escape(requestData.keywordLesson)}</span>&quot; aramas\u0131na uygun <span class="${"font-semibold"}">${escape(lessons.total)}</span> sonu\xE7 bulundu.
		</div>
		${lessons.items.length > 0 ? `${each(lessons.items, (lesson) => {
      return `<div class="${"p-4 border rounded-md hover:border-blue-700 cursor-pointer"}"><div class="${"text-sm text-gray-500"}">${escape(lesson.subjectTitle)}</div>
				<div>${escape(lesson.title)}</div>
			</div>`;
    })}` : ``}</div>

	<div class="${"mb-4 text-sm text-center"}" id="${"moreLessonArea"}"><button class="${"text-white bg-blue-700 hover:bg-blue-800 focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 mr-1 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg>
			Daha fazla ders
		</button></div>` : ``}</div>

<div class="${["bg-white rounded-lg shadow-md mt-2", "hidden"].join(" ").trim()}"><div class="${"p-6 max-w-2xl text-center mx-auto"}"><div class="${"font-semibold text-lg mb-4"}">Nerede ya\u015F\u0131yorsun?</div>
		<label for="${"location-search"}" class="${"mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"}">Arama</label>
		<div class="${"relative"}"><div class="${"flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"}"><svg aria-hidden="${"true"}" class="${"w-5 h-5 text-gray-500 dark:text-gray-400"}" fill="${"none"}" stroke="${"currentColor"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}"></path></svg></div>
			<input autocomplete="${"off"}" type="${"text"}" id="${"location-search"}" class="${"block p-4 pl-10 w-full text-sm text-gray-900 border border-gray-300 shadow-md rounded-lg border-0"}" placeholder="${"Hangi " + escape("\u015Fehirdesin", true) + "?"}"${add_attribute("value", requestData.keywordLocation, 0)}></div>

		<p class="${"text-xs mt-3 text-gray-400"}">Yukar\u0131daki alana bulundu\u011Fun ${escape("\u015Fehrin")} ismini yazmal\u0131s\u0131n.</p>

		<p class="${"mt-4 text-sm"}"><label><input type="${"checkbox"}" class="${"border-gray-500 mr-1 rounded-sm ring-0 outline-none"}"${add_attribute("checked", requestData.outsideTurkey, 1)}> T\xFCrkiye&#39;de ya\u015Fam\u0131yorum
			</label></p></div>

	${locations.items.length > 0 ? `<div class="${"grid grid-cols-2 lg:grid-cols-3 gap-4 px-6 pb-6"}"><div class="${"col-span-2 lg:col-span-3 text-center"}">&quot;<span class="${"font-semibold"}">${escape(requestData.keywordLocation)}</span>&quot; arama sonucuna uygun <span class="${"font-semibold"}">${escape(locations.total)}</span> sonu\xE7 bulundu.
		</div>
		${each(locations.items, (location) => {
      return `<div class="${"p-4 border rounded-md hover:border-blue-700 cursor-pointer"}"><div class="${"text-sm text-gray-400"}">${escape("\u015Eehir")}</div>
				<div>${escape(location.title)}</div>
			</div>`;
    })}</div>
	<div class="${"mb-4 text-sm text-center"}" id="${"moreLocationArea"}"><button class="${"text-white bg-blue-700 hover:bg-blue-800 focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 mr-1 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg>
			Daha fazla lokasyon
		</button></div>` : ``}</div>

<div class="${["bg-white rounded-lg shadow-md mt-2", ""].join(" ").trim()}"><div class="${"p-6 max-w-2xl text-center mx-auto"}"><div class="${"font-semibold text-lg"}">Nerede ders almak istersin?</div>
		<p class="${"text-xs text-gray-400"}">Birden fazla se\xE7im yapabilirsin.</p>
		<div class="${"grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4 mt-2"}"><div><input type="${"checkbox"}" id="${"location-own"}" class="${"hidden peer"}" required${add_attribute("value", requestData.placeOwn, 0)}>
				<label for="${"location-own"}" class="${"inline-flex justify-between items-center py-4 w-full bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"}"><div class="${"w-full"}">Kendi evimde</div></label></div>

			<div><input type="${"checkbox"}" id="${"location-teacher"}" class="${"hidden peer"}" required${add_attribute("value", requestData.placeTeacher, 0)}>
				<label for="${"location-teacher"}" class="${"inline-flex justify-between items-center py-4 w-full bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"}"><div class="${"w-full"}">\xD6\u011Fretmen evinde</div></label></div>

			<div><input type="${"checkbox"}" id="${"location-online"}" class="${"hidden peer"}" required${add_attribute("value", requestData.placeRemote, 0)}>
				<label for="${"location-online"}" class="${"inline-flex justify-between items-center py-4 w-full bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"}"><div class="${"w-full"}">Uzaktan, webcam ile</div></label></div></div>

		<div class="${"mt-4 text-gray-400"}">-\u2022-</div>

		<div class="${"font-semibold text-lg mt-2"}">Kimden ders almak istersin?</div>
		<p class="${"text-xs text-gray-400"}">Yaln\u0131zca bir se\xE7im yapabilirsin.</p>
		<div class="${"grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4 mt-2"}"><div><input type="${"radio"}" id="${"teacher-gender-male"}" value="${"1"}" class="${"hidden peer"}" required${""}>
				<label for="${"teacher-gender-male"}" class="${"inline-flex justify-between items-center py-4 w-full bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"}"><div class="${"w-full"}">Erkek \xD6\u011Fretmen</div></label></div>

			<div><input type="${"radio"}" id="${"teacher-gender-female"}" value="${"2"}" class="${"hidden peer"}" required${""}>
				<label for="${"teacher-gender-female"}" class="${"inline-flex justify-between items-center py-4 w-full bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"}"><div class="${"w-full"}">Kad\u0131n \xD6\u011Fretmen</div></label></div>

			<div><input type="${"radio"}" id="${"teacher-gender-none"}" value="${"3"}" class="${"hidden peer"}" required${""}>
				<label for="${"teacher-gender-none"}" class="${"inline-flex justify-between items-center py-4 w-full bg-white rounded-lg border border-gray-200 cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"}"><div class="${"w-full"}">Farketmez</div></label></div></div>

		<div class="${"mt-4 text-gray-400"}">-\u2022-</div>

		<div class="${"font-semibold text-lg mt-2"}">Bir ders i\xE7in b\xFCt\xE7en nedir?</div>
		<p class="${"text-xs text-gray-400"}">B\xFCt\xE7enin aral\u0131\u011F\u0131n\u0131 se\xE7 veya \xF6\u011Fretmene belirt.</p>
		${`${validate_component(RangeSlider, "RangeSlider").$$render(
      $$result,
      {
        min: 50,
        max: 700,
        pips: "true",
        step: 50,
        values: requestData.budget
      },
      {
        values: ($$value) => {
          requestData.budget = $$value;
          $$settled = false;
        }
      },
      {}
    )}
			<div class="${"font-semibold"}">${escape(requestData.budget[0])} - ${escape(requestData.budget[1])} \u20BA</div>`}

		<label class="${"mt-2 block text-sm"}"><input type="${"checkbox"}" class="${"border-gray-500 mr-1 rounded-sm ring-0 outline-none"}"${add_attribute("checked", requestData.budgetSecret, 1)}> B\xFCt\xE7emi \xF6\u011Fretmene belirtmek istiyorum
		</label>

		<button class="${"bg-blue-700 hover:bg-blue-900 py-2 px-4 text-sm md:text-lg md:py-3 md:px-6 text-center rounded-full justify-center text-white mt-6 block md:inline-block"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 mr-1 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"}"></path></svg>
			Devam et
		</button></div></div>

<div class="${["bg-white rounded-lg shadow-md mt-2", "hidden"].join(" ").trim()}"><div class="${"p-6 max-w-2xl text-center mx-auto"}"><div class="${"font-semibold text-lg"}">Son olarak seni biraz tan\u0131yabilir miyim?</div>

		<div class="${"grid grid-cols-2 gap-4 mt-4"}"><div><span class="${"text-sm mb-1 block text-gray-500"}">Ad\u0131n</span>
				<input type="${"text"}" class="${"w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"${add_attribute("value", requestData.firstName, 0)}></div>
			<div><span class="${"text-sm mb-1 block text-gray-500"}">Soyad\u0131n</span>
				<input type="${"text"}" class="${"w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"${add_attribute("value", requestData.lastName, 0)}></div>
			<div><span class="${"text-sm mb-1 block text-gray-500"}">E-posta adresin</span>
				<input type="${"email"}" class="${"w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"${add_attribute("value", requestData.email, 0)}></div>
			<div><span class="${"text-sm mb-1 block text-gray-500"}">Telefon numaran</span>
				<input type="${"number"}" class="${"w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"${add_attribute("value", requestData.phone, 0)}></div>
			<div class="${"col-span-2"}"><span class="${"text-sm mb-1 block text-gray-500"}">Almak istedi\u011Fin \xF6zel ders ile ilgili mevcut seviyeni, beklentilerini, derse ne zaman ba\u015Flamak istedi\u011Fini, okula gidiyorsan ka\xE7\u0131nc\u0131 s\u0131n\u0131fa gitti\u011Fini yazabilir misin? Bunlar\u0131n d\u0131\u015F\u0131nda ne kadar detay verirsen o kadar do\u011Fru \xF6\u011Fretmenle e\u015Fle\u015Firsin.</span>
				<textarea minlength="${"30"}" rows="${"5"}" class="${"w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}">${""}</textarea>
				<span class="${"text-xs text-gray-400"}">Minimum 30 karakter yazmal\u0131s\u0131n.</span></div></div>

		<button class="${"bg-blue-700 hover:bg-blue-900 py-2 px-4 text-sm md:text-lg md:py-3 md:px-6 text-center rounded-full justify-center text-white mt-4 block md:inline-block"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 mr-1 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"}"></path></svg>
			G\xF6nder
		</button></div></div>

<div class="${["bg-white rounded-lg shadow-md mt-2", "hidden"].join(" ").trim()}"><div class="${"p-6 max-w-2xl text-center mx-auto"}"><div class="${"font-semibold text-lg"}">\u0130\u015Fte bu kadar! \xD6zel ders talebin ba\u015Far\u0131yla al\u0131nd\u0131.</div>
		<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-64 h-64 mx-auto animate-pulse text-green-500"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg>
		<p>Talebin edit\xF6rlerimiz taraf\u0131ndan incelenme a\u015Famas\u0131ndad\u0131r.</p>
		<p class="${"text-gray-400 text-sm"}">En k\u0131sa s\xFCre i\xE7erisinde bizden alacaks\u0131n \u{1F603}</p>

		<a href="${"/"}" class="${"bg-blue-700 hover:bg-blue-900 py-2 px-4 text-sm md:text-lg md:py-3 md:px-6 text-center rounded-full justify-center text-white mt-4 block md:inline-block"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 mr-1 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"}"></path></svg>

			Ana Sayfa
		</a></div></div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
