import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component, f as each } from "../../../chunks/index3.js";
/* empty css                                                   */import { g as gendersStore } from "../../../chunks/userStore.js";
import { s as searchParamsModel } from "../../../chunks/searchModel.js";
import "toastify-js";
import "../../../chunks/index.js";
import { w as writable } from "../../../chunks/index2.js";
import { p as page } from "../../../chunks/stores.js";
import { M as MediaCardContainer } from "../../../chunks/MediaCardContainer.js";
import { i as itemFilter, S as Select } from "../../../chunks/selectUtil.js";
const citiesStore = writable([]);
const countiesStore = writable([]);
const subjectsStore = writable([]);
const levelsStore = writable([]);
const categoriesStore = writable([]);
const lessonTypesStore = writable([
  { id: 1, title: "Yüz Yüze" },
  { id: 2, title: "Uzaktan (Webcam)" }
]);
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_levelsStore;
  let $countiesStore, $$unsubscribe_countiesStore;
  let $page, $$unsubscribe_page;
  let $categoriesStore, $$unsubscribe_categoriesStore;
  let $$unsubscribe_subjectsStore;
  let $citiesStore, $$unsubscribe_citiesStore;
  let $$unsubscribe_lessonTypesStore;
  let $$unsubscribe_gendersStore;
  $$unsubscribe_levelsStore = subscribe(levelsStore, (value) => value);
  $$unsubscribe_countiesStore = subscribe(countiesStore, (value) => $countiesStore = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_categoriesStore = subscribe(categoriesStore, (value) => $categoriesStore = value);
  $$unsubscribe_subjectsStore = subscribe(subjectsStore, (value) => value);
  $$unsubscribe_citiesStore = subscribe(citiesStore, (value) => $citiesStore = value);
  $$unsubscribe_lessonTypesStore = subscribe(lessonTypesStore, (value) => value);
  $$unsubscribe_gendersStore = subscribe(gendersStore, (value) => value);
  let { data } = $$props;
  let loading = false;
  let pageData = {
    ...searchParamsModel,
    ...data.routeResponse
  };
  let searchData = {
    ...searchParamsModel,
    ...data.routeResponse
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-fxl0xl_START -->${$$result.title = `<title>${escape(pageData.county?.title ? pageData.county.city.title + " " + pageData.county.title + " " : pageData.city?.title ? pageData.city.title + " " : "")}${escape(pageData.subject?.title ? pageData.subject.title + " " : "")}${escape(pageData.category?.title ? pageData.category.title + " " : pageData.level?.title ? pageData.level.title + " " : "")}Özel Ders Veren Öğretmenler - ${escape(data.users.total)} Öğretmen - Ortalama fiyat ${escape(data.users.minimumPrice)}₺</title>`, ""}<meta name="${"description"}" content="${escape(
      pageData.county?.title ? pageData.county.city.title + " ili, " + pageData.county.title + " ilçesinde " : pageData.city?.title ? pageData.city.title + " " : "",
      true
    ) + escape(
      pageData.subject?.title ? pageData.subject.title + " konusunda " : "",
      true
    ) + escape(
      pageData.category?.title ? pageData.category.title + " " : pageData.level?.title ? pageData.level.title + " " : "",
      true
    ) + "özel ders veren " + escape(data.users.total, true) + " öğretmen." + escape(
      pageData.category?.title ? " " + pageData.category.title + " özel ders ortalama " + data.users.minimumPrice + "₺ fiyatlarla." : " Ortalama " + data.users.minimumPrice + "₺ fiyatlarla.",
      true
    )}">${$page.url.searchParams.get("page") || $page.url.searchParams.get("amp") || $page.url.searchParams.get("sort_point") || $page.url.searchParams.get("sort_price") ? `<meta name="${"robots"}" content="${"noindex"}">` : ``}<!-- HEAD_svelte-fxl0xl_END -->`, ""}

${``}

<section class="${"dark:bg-gray-900 text-center"}"><div class="${"mx-auto w-auto py-6 max-w-4xl"}"><h1 class="${"mb-4 text-3xl font-bold text-blue-700 tracking-tight leading-none xl:text-4xl dark:text-white"}">${escape(pageData.county?.title ? pageData.county.city.title + " " + pageData.county.title + " " : pageData.city?.title ? pageData.city.title + " " : "")}${escape(pageData.subject?.title ? pageData.subject.title + " " : "")}${escape(pageData.category?.title ? pageData.category.title + " " : pageData.level?.title ? pageData.level.title + " " : "")}Özel Ders</h1>
			<h3 class="${"mb-4 font-light text-gray-800 lg:text-base xl:text-lg dark:text-gray-400"}">${escape(pageData.county?.title ? pageData.county.city.title + " " + pageData.county.title + " " : pageData.city?.title ? pageData.city.title + " " : "")}${escape(pageData.subject?.title ? pageData.subject.title + " " : "")}${escape(pageData.category?.title ? pageData.category.title + " " : pageData.level?.title ? pageData.level.title + " " : "")}Özel Ders Veren ${escape(data.users.total)} Öğretmen. ${escape(pageData.category?.title ? pageData.category.title + " Özel Ders " : "")} Ortalama ${escape(data.users.minimumPrice)}₺ Fiyatlarla.</h3>

			<div class="${"grid grid-cols-3 gap-4 text-left"}"><div><span class="${"text-sm mb-1 block text-gray-500"}">Şehir</span>
					${validate_component(Select, "Select").$$render(
      $$result,
      {
        placeholder: "Seç",
        noOptionsMessage: "Sonuç bulunamadı...",
        items: $citiesStore,
        optionIdentifier: "id",
        labelIdentifier: "title",
        isClearable: "false",
        itemFilter,
        value: searchData.city
      },
      {
        value: ($$value) => {
          searchData.city = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>

				<div><span class="${"text-sm mb-1 block text-gray-500"}">İlçe</span>
					${validate_component(Select, "Select").$$render(
      $$result,
      {
        placeholder: "Seç",
        noOptionsMessage: "Sonuç bulunamadı...",
        items: $countiesStore,
        optionIdentifier: "id",
        labelIdentifier: "title",
        itemFilter,
        value: searchData.county
      },
      {
        value: ($$value) => {
          searchData.county = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>

				<div><span class="${"text-sm mb-1 block text-gray-500"}">Ders</span>
					${validate_component(Select, "Select").$$render(
      $$result,
      {
        placeholder: "Seç",
        noOptionsMessage: "Sonuç bulunamadı...",
        items: $categoriesStore,
        optionIdentifier: "id",
        labelIdentifier: "title",
        itemFilter,
        value: searchData.category
      },
      {
        value: ($$value) => {
          searchData.category = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>

			<p class="${"text-sm text-gray-800 mt-4"}"><button class="${"text-blue-700 hover:text-blue-900 font-bold"}">Detaylı Arama</button></p>

			<div class="${"flex justify-center flex-wrap gap-2"}">${pageData.city ? `<div class="${"bg-white p-2 pl-3 rounded-full text-xs font-bold mt-4"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 inline-block text-gray-400"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"}"></path><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"}"></path></svg>
					<span>${escape(pageData.city?.title)}</span>
					<button><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-6 h-6 inline-block text-blue-700"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg></button></div>` : ``}

				${pageData.county ? `<div class="${"bg-white p-2 pl-3 rounded-full text-xs font-bold mt-4"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 inline-block text-gray-400"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"}"></path><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"}"></path></svg>
						<span>${escape(pageData.county?.title)}</span>
						<button><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-6 h-6 inline-block text-blue-700"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg></button></div>` : ``}

				${pageData.category ? `<div class="${"bg-white p-2 pl-3 rounded-full text-xs font-bold mt-4"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 inline-block text-gray-400"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"}"></path></svg>
						<span>${escape(pageData.category?.title)}</span>
						<button><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-6 h-6 inline-block text-blue-700"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg></button></div>` : `${pageData.subject ? `<div class="${"bg-white p-2 pl-3 rounded-full text-xs font-bold mt-4"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 inline-block text-gray-400"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"}"></path></svg>
						<span>${escape(pageData.subject?.title)}</span>
						<button><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-6 h-6 inline-block text-blue-700"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg></button></div>` : ``}

				${pageData.level ? `<div class="${"bg-white p-2 pl-3 rounded-full text-xs font-bold mt-4"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 inline-block text-gray-400"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"}"></path></svg>
						<span>${escape(pageData.level?.title)}</span>
						<button><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-6 h-6 inline-block text-blue-700"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg></button></div>` : ``}`}

				${pageData.keyword ? `<div class="${"bg-white p-2 pl-3 rounded-full text-xs font-bold mt-4"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 inline-block text-gray-400"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"}"></path></svg>
						<span>${escape(pageData.keyword)}</span>
						<button><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-6 h-6 inline-block text-blue-700"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg></button></div>` : ``}

				${pageData.budget ? `<div class="${"bg-white p-2 pl-3 rounded-full text-xs font-bold mt-4"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 inline-block text-gray-400"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"}"></path></svg>
						<span>${escape(pageData.budget)} ₺</span>
						<button><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-6 h-6 inline-block text-blue-700"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg></button></div>` : ``}

				${pageData.lessonType ? `<div class="${"bg-white p-2 pl-3 rounded-full text-xs font-bold mt-4"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 inline-block text-gray-400"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"}"></path></svg>
						<span>${escape(pageData.lessonType?.title)}</span>
						<button><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-6 h-6 inline-block text-blue-700"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg></button></div>` : ``}

				${pageData.gender ? `<div class="${"bg-white p-2 pl-3 rounded-full text-xs font-bold mt-4"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 inline-block text-gray-400"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"}"></path></svg>
					<span>${escape(pageData.gender?.title)}</span>
					<button><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-6 h-6 inline-block text-blue-700"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg></button></div>` : ``}</div></div></section>

${`<div class="${"py-4 text-sm"}">Arama sonuçlarına uygun <strong>${escape(data.users.total)}</strong> eğitmen bulundu.</div>`}

<div class="${"grid grid-cols-1 gap-4"}">${`${data.users?.items ? `${each(data.users.items, (user) => {
      return `<div class="${"lg:flex lg:flex-row gap-6 bg-white p-6 rounded-lg shadow-md mt-4"}">${validate_component(MediaCardContainer, "MediaCardContainer").$$render(
        $$result,
        {
          user: {
            ...user,
            showApprovedBadge: true,
            showIsOnlineBadge: true,
            showRequest: true,
            truncateAbout: true
          }
        },
        {},
        {}
      )}
		</div>`;
    })}` : ``}`}</div>

${data.users.total > 0 && !loading ? `${`<div class="${"pt-4 text-sm text-center"}"><button class="${"text-white bg-blue-700 hover:bg-blue-800 focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 mr-1 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg>
		Daha fazla öğretmen
	</button></div>`}` : ``}`;
  } while (!$$settled);
  $$unsubscribe_levelsStore();
  $$unsubscribe_countiesStore();
  $$unsubscribe_page();
  $$unsubscribe_categoriesStore();
  $$unsubscribe_subjectsStore();
  $$unsubscribe_citiesStore();
  $$unsubscribe_lessonTypesStore();
  $$unsubscribe_gendersStore();
  return $$rendered;
});
export {
  Page as default
};
