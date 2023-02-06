import { c as create_ssr_component, b as subscribe, h as add_attribute, e as escape, i as compute_rest_props, j as createEventDispatcher, k as spread, l as escape_attribute_value, o as escape_object, v as validate_component, p as is_promise, n as noop, f as each } from "../../chunks/index.js";
import { t as teacherSearchParamsStore } from "../../chunks/userStore.js";
import { g as getUsers } from "../../chunks/user.js";
import "classnames";
/* empty css                                                    */import "../../chunks/dayJsStore.js";
const Greeting = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_teacherSearchParamsStore;
  $$unsubscribe_teacherSearchParamsStore = subscribe(teacherSearchParamsStore, (value) => value);
  let keyword;
  $$unsubscribe_teacherSearchParamsStore();
  return `<section class="${"dark:bg-gray-900"}"><div class="${"grid lg:grid-cols-12 py-6"}"><div class="${"mr-auto place-self-center lg:col-span-8"}"><h1 class="${"mb-4 text-3xl font-bold text-blue-700 tracking-tight leading-none xl:text-4xl dark:text-white"}">\xD6zel ders almak hi\xE7 bu kadar kolay olmam\u0131\u015Ft\u0131!</h1>
			<p class="${"mb-6 font-light text-gray-800 lg:text-base xl:text-lg dark:text-gray-400"}">Do\u011Frulanm\u0131\u015F profile sahip, alan\u0131nda <strong class="${"font-semibold"}">uzman \xF6\u011Fretmenlerden</strong> online veya y\xFCz y\xFCze \xF6zel ders al. Hem de Netders.com g\xFCvencesiyle!</p>

			<form autocomplete="${"off"}"><div class="${"relative"}"><div class="${"flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"}"><svg aria-hidden="${"true"}" class="${"w-5 h-5 text-gray-500 dark:text-gray-400"}" fill="${"none"}" stroke="${"currentColor"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}"></path></svg></div>
					<input type="${"text"}" id="${"default-search"}" class="${"block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 shadow-md rounded-lg border-0"}" placeholder="${"Arad\u0131\u011F\u0131n \xF6zel ders nedir?"}"${add_attribute("value", keyword, 0)}>
					<button type="${"submit"}" class="${"text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2"}">ARA</button></div></form>

			<p class="${"text-xs text-gray-400 pt-2"}">\xD6rne\u011Fin; matematik, ingilizce, fizik gibi, almak istedi\u011Fin \xF6zel dersin ad\u0131n\u0131 yukar\u0131daki arama alan\u0131na girip, ara tu\u015Funa bas.</p></div>
		<div class="${"hidden lg:col-span-1 lg:flex"}"></div>
		<div class="${"hidden lg:col-span-3 lg:flex"}"><img srcset="${escape("https://d1ql1h7f6x0zr6.cloudfront.net/", true) + "student.png"}" alt="${""}"></div></div>
</section>`;
});
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function forOwn(object, iteratee) {
  if (object) {
    const keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (key !== "__proto__") {
        if (iteratee(object[key], key) === false) {
          break;
        }
      }
    }
  }
  return object;
}
function isObject(subject) {
  return subject !== null && typeof subject === "object";
}
function isEqualDeep(subject1, subject2) {
  if (Array.isArray(subject1) && Array.isArray(subject2)) {
    return subject1.length === subject2.length && !subject1.some((elm, index) => !isEqualDeep(elm, subject2[index]));
  }
  if (isObject(subject1) && isObject(subject2)) {
    const keys1 = Object.keys(subject1);
    const keys2 = Object.keys(subject2);
    return keys1.length === keys2.length && !keys1.some((key) => {
      return !Object.prototype.hasOwnProperty.call(subject2, key) || !isEqualDeep(subject1[key], subject2[key]);
    });
  }
  return subject1 === subject2;
}
function merge(object, source) {
  const merged = object;
  forOwn(source, (value, key) => {
    if (Array.isArray(value)) {
      merged[key] = value.slice();
    } else if (isObject(value)) {
      merged[key] = merge(isObject(merged[key]) ? merged[key] : {}, value);
    } else {
      merged[key] = value;
    }
  });
  return merged;
}
function slice(arrayLike, start, end) {
  return Array.prototype.slice.call(arrayLike, start, end);
}
function apply(func) {
  return func.bind.apply(func, [null].concat(slice(arguments, 1)));
}
function typeOf(type, subject) {
  return typeof subject === type;
}
apply(typeOf, "function");
apply(typeOf, "string");
apply(typeOf, "undefined");
const Splide_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "options", "splide", "extensions", "transition", "hasTrack", "go", "sync"]);
  let { class: className = void 0 } = $$props;
  let { options = {} } = $$props;
  let { splide = void 0 } = $$props;
  let { extensions = void 0 } = $$props;
  let { transition = void 0 } = $$props;
  let { hasTrack = true } = $$props;
  createEventDispatcher();
  let root;
  let prevOptions = merge({}, options);
  function go(control) {
    splide == null ? void 0 : splide.go(control);
  }
  function sync(target) {
    splide == null ? void 0 : splide.sync(target);
  }
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.splide === void 0 && $$bindings.splide && splide !== void 0)
    $$bindings.splide(splide);
  if ($$props.extensions === void 0 && $$bindings.extensions && extensions !== void 0)
    $$bindings.extensions(extensions);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.hasTrack === void 0 && $$bindings.hasTrack && hasTrack !== void 0)
    $$bindings.hasTrack(hasTrack);
  if ($$props.go === void 0 && $$bindings.go && go !== void 0)
    $$bindings.go(go);
  if ($$props.sync === void 0 && $$bindings.sync && sync !== void 0)
    $$bindings.sync(sync);
  {
    if (splide && !isEqualDeep(prevOptions, options)) {
      splide.options = options;
      prevOptions = merge({}, prevOptions);
    }
  }
  return `

<div${spread(
    [
      {
        class: escape_attribute_value(classNames("splide", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", root, 0)}>${hasTrack ? `${validate_component(SplideTrack, "SplideTrack").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}` : `${slots.default ? slots.default({}) : ``}`}</div>`;
});
const SplideTrack = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classNames("splide__track", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}><ul class="${"splide__list"}">${slots.default ? slots.default({}) : ``}</ul></div>`;
});
const SplideSlide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<li${spread(
    [
      {
        class: escape_attribute_value(classNames("splide__slide", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</li>`;
});
const Categories_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "@import '@splidejs/splide/css/skyblue';",
  map: null
};
const Categories = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section><div class="${"block p-6 rounded-lg shadow-md bg-white"}"><h2 class="${"mb-4 text-2xl font-bold tracking-tight leading-none lg:text-3xl dark:text-white"}">\xD6zel ders kategorileri</h2>
		<p class="${"text-gray-700 text-base mb-4"}">Alan\u0131nda tecr\xFCbeli \xF6\u011Fretmenlerden \xF6zel ders alarak, ihtiyac\u0131n olan do\u011Fru e\u011Fitimi, en uygun fiyatlarla alabilirsin.
		</p>

		<div class="${"text-center grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 p-6"}"><a href="${"/ozel-ders-ilanlari-verenler/ilkogretim-takviye"}" class="${"text-blue-700 hover:text-blue-900"}"><img src="${escape("https://d1ql1h7f6x0zr6.cloudfront.net/", true) + "home-icon-ilkogretim.svg"}" alt="${"\u0130lk\xF6\u011Fretim Takviye"}">
				<span>\u0130lk\xF6\u011Fretim Takviye</span></a>
			<a href="${"/ozel-ders-ilanlari-verenler/lise-takviye"}" class="${"text-blue-700 hover:text-blue-900"}"><img src="${escape("https://d1ql1h7f6x0zr6.cloudfront.net/", true) + "home-icon-lise.svg"}" alt="${"Lise Takviye"}">
				<span>Lise Takviye</span></a>
			<a href="${"/ozel-ders-ilanlari-verenler/universite-takviye"}" class="${"text-blue-700 hover:text-blue-900"}"><img src="${escape("https://d1ql1h7f6x0zr6.cloudfront.net/", true) + "home-icon-universite.svg"}" alt="${"\xDCniversite Takviye"}">
				<span>\xDCniversite Takviye</span></a>
			<a href="${"/ozel-ders-ilanlari-verenler/yabanci-dil"}" class="${"text-blue-700 hover:text-blue-900"}"><img src="${escape("https://d1ql1h7f6x0zr6.cloudfront.net/", true) + "home-icon-yabancidil.svg"}" alt="${"Yabanc\u0131 Dil"}">
				<span>Yabanc\u0131 Dil</span></a>
			<a href="${"/ozel-ders-ilanlari-verenler/bilgisayar"}" class="${"text-blue-700 hover:text-blue-900"}"><img src="${escape("https://d1ql1h7f6x0zr6.cloudfront.net/", true) + "home-icon-bilgisayar.svg"}" alt="${"Bilgisayar"}">
				<span>Bilgisayar</span></a>
			<a href="${"/ozel-ders-ilanlari-verenler/dans"}" class="${"text-blue-700 hover:text-blue-900"}"><img src="${escape("https://d1ql1h7f6x0zr6.cloudfront.net/", true) + "home-icon-dans.svg"}" alt="${"Dans"}">
				<span>Dans</span></a>
			<a href="${"/ozel-ders-ilanlari-verenler/direksiyon"}" class="${"text-blue-700 hover:text-blue-900"}"><img src="${escape("https://d1ql1h7f6x0zr6.cloudfront.net/", true) + "home-icon-direksiyon.svg"}" alt="${"Direksiyon"}">
				<span>Direksiyon</span></a>

			<a href="${"/ozel-ders-ilanlari-verenler/kisisel-gelisim"}" class="${"text-blue-700 hover:text-blue-900"}"><img src="${escape("https://d1ql1h7f6x0zr6.cloudfront.net/", true) + "home-icon-kisiselgelisim.svg"}" alt="${"Ki\u015Fisel Geli\u015Fim"}">
				<span>Ki\u015Fisel Geli\u015Fim</span></a>
			<a href="${"/ozel-ders-ilanlari-verenler/muzik"}" class="${"text-blue-700 hover:text-blue-900"}"><img src="${escape("https://d1ql1h7f6x0zr6.cloudfront.net/", true) + "home-icon-muzik.svg"}" alt="${"M\xFCzik"}">
				<span>M\xFCzik</span></a>
			<a href="${"/ozel-ders-ilanlari-verenler/oyun-ve-hobi"}" class="${"text-blue-700 hover:text-blue-900"}"><img src="${escape("https://d1ql1h7f6x0zr6.cloudfront.net/", true) + "home-icon-oyunhobi.svg"}" alt="${"Oyun & Hobi"}">
				<span>Oyun &amp; Hobi</span></a>
			<a href="${"/ozel-ders-ilanlari-verenler/ozel-egitim"}" class="${"text-blue-700 hover:text-blue-900"}"><img src="${escape("https://d1ql1h7f6x0zr6.cloudfront.net/", true) + "home-icon-ozelegitim.svg"}" alt="${"\xD6zel E\u011Fitim"}">
				<span>\xD6zel E\u011Fitim</span></a>
			<a href="${"/ozel-ders-ilanlari-verenler/sanat"}" class="${"text-blue-700 hover:text-blue-900"}"><img src="${escape("https://d1ql1h7f6x0zr6.cloudfront.net/", true) + "home-icon-sanat.svg"}" alt="${"Sanat"}">
				<span>Sanat</span></a>
			<a href="${"/ozel-ders-ilanlari-verenler/sinav-hazirlik"}" class="${"text-blue-700 hover:text-blue-900"}"><img src="${escape("https://d1ql1h7f6x0zr6.cloudfront.net/", true) + "home-icon-sinavhazirlik.svg"}" alt="${"S\u0131nav Haz\u0131rl\u0131k"}">
				<span>S\u0131nav Haz\u0131rl\u0131k</span></a>
			<a href="${"/ozel-ders-ilanlari-verenler/spor"}" class="${"text-blue-700 hover:text-blue-900"}"><img src="${escape("https://d1ql1h7f6x0zr6.cloudfront.net/", true) + "home-icon-spor.svg"}" alt="${"Spor"}">
				<span>Spor</span></a></div></div>
</section>`;
});
const SliderCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a, _b;
  let { user } = $$props;
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  return `<a href="${"/" + escape(user.username, true)}" target="${"_blank"}" rel="${"noreferrer"}"><img class="${"rounded-full mx-auto w-48 h-48"}" src="${escape("https://d1ql1h7f6x0zr6.cloudfront.net/", true) + escape(user.photoUrl, true)}" alt="${""}"></a>
<div class="${"flex flex-col w-full justify-between pl-4 leading-normal mt-2"}"><a href="${"/" + escape(user.username, true)}" target="${"_blank"}" rel="${"noreferrer"}"><h5 class="${"mb-2 text-xl font-bold tracking-tight text-blue-700 text-center"}">${escape(user.firstName)} ${escape(user.lastName)}</h5></a>

	<p class="${"mb-2 font-semibold text-gray-800 text-center min-h-[60px]"}">${escape((_a = user.title) == null ? void 0 : _a.substring(0, 50))}</p>

	<div class="${"flex flex-col gap-2 justify-between text-gray-500 text-sm mt-1"}">${user.minimumPrice > 0 ? `<div><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 inline-block mr-1"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"}"></path></svg>
			${escape(user.minimumPrice)}\u20BA
		</div>` : ``}

		${user.county || user.country ? `<div><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 inline-block mr-1"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"}"></path><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"}"></path></svg>
			${((_b = user.county) == null ? void 0 : _b.id) ? `${escape(user.county.title)}, ${escape(user.city.title)}` : `${escape(user.country.title)}`}</div>` : ``}

		<div><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 inline-block mr-1"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"}"></path></svg>
			${escape(user.totalComment ?? 0)} yorum
		</div></div>

	${user.showRequest ? `<a href="${"/ozel-ders-talebi-olustur/" + escape(user.username, true)}" class="${"bg-blue-700 p-2 rounded-full justify-center text-sm flex text-white mt-4"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 mr-1"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M12 6v12m6-6H6"}"></path></svg>
		Ders Talebinde Bulun
	</a>
	<span class="${"text-xs text-center block mt-1 mb-4 text-gray-400"}">Cevaplama s\xFCresi 1 saat</span>` : ``}</div>`;
});
const UserSlider_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import '@splidejs/splide/css/skyblue';",
  map: null
};
const UserSlider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="${"dark:bg-gray-900 mt-4"}"><div><div class="${"block p-6 rounded-lg shadow-md bg-white"}"><h2 class="${"mb-4 text-2xl font-bold tracking-tight leading-none lg:text-3xl dark:text-white"}">Matematik \xD6zel Ders Verenler</h2>
			<div>${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
					Y\xFCkleniyor...
				`;
    }
    return function(users) {
      return `
				${validate_component(Splide_1, "Splide").$$render(
        $$result,
        {
          options: {
            arrows: true,
            gap: "1em",
            type: "loop",
            interval: 3e3,
            autoplay: true,
            perPage: 4,
            updateOnMove: true,
            breakpoints: {
              1024: { perPage: 3 },
              767: { perPage: 2 },
              640: { perPage: 1 }
            },
            perMove: 1,
            pagination: false
          },
          "aria-label": "Matematik \xF6zel ders verenler"
        },
        {},
        {
          default: () => {
            return `${each(users.items, (user) => {
              return `${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="${"flex flex-col gap-2 items-center w-full p-4 border border-blue-100 rounded-md"}">${validate_component(SliderCard, "SliderCard").$$render($$result, { user: { ...user, showRequest: true } }, {}, {})}</div>
						`;
                }
              })}`;
            })}`;
          }
        }
      )}
				`;
    }(__value);
  }(getUsers({
    "page": 1,
    "pageSize": 12,
    "keyword": "matematik"
  }))}</div></div></div></section>

<section class="${"dark:bg-gray-900 mt-4"}"><div><div class="${"block p-6 rounded-lg shadow-md bg-white"}"><h2 class="${"mb-4 text-2xl font-bold tracking-tight leading-none lg:text-3xl dark:text-white"}">\u0130ngilizce \xD6zel Ders Verenler</h2>
			<div>${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
					Y\xFCkleniyor...
				`;
    }
    return function(users) {
      return `
					${validate_component(Splide_1, "Splide").$$render(
        $$result,
        {
          options: {
            arrows: true,
            gap: "1em",
            type: "loop",
            interval: 3e3,
            autoplay: true,
            perPage: 4,
            updateOnMove: true,
            breakpoints: {
              1024: { perPage: 3 },
              767: { perPage: 2 },
              640: { perPage: 1 }
            },
            perMove: 1,
            pagination: false
          },
          "aria-label": "\u0130ngilizce \xF6zel ders verenler"
        },
        {},
        {
          default: () => {
            return `${each(users.items, (user) => {
              return `${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="${"flex flex-col gap-2 items-center w-full p-4 border border-blue-100 rounded-md"}">${validate_component(SliderCard, "SliderCard").$$render($$result, { user: { ...user, showRequest: true } }, {}, {})}</div>
							`;
                }
              })}`;
            })}`;
          }
        }
      )}
				`;
    }(__value);
  }(getUsers({
    "page": 1,
    "pageSize": 12,
    "keyword": "ingilizce"
  }))}</div></div></div></section>

<section class="${"dark:bg-gray-900 mt-4"}"><div><div class="${"block p-6 rounded-lg shadow-md bg-white"}"><h2 class="${"mb-4 text-2xl font-bold tracking-tight leading-none lg:text-3xl dark:text-white"}">Fizik \xD6zel Ders Verenler</h2>
			<div>${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
					Y\xFCkleniyor...
				`;
    }
    return function(users) {
      return `
					${validate_component(Splide_1, "Splide").$$render(
        $$result,
        {
          options: {
            arrows: true,
            gap: "1em",
            type: "loop",
            interval: 3e3,
            autoplay: true,
            perPage: 4,
            updateOnMove: true,
            breakpoints: {
              1024: { perPage: 3 },
              767: { perPage: 2 },
              640: { perPage: 1 }
            },
            perMove: 1,
            pagination: false
          },
          "aria-label": "Fizik \xF6zel ders verenler"
        },
        {},
        {
          default: () => {
            return `${each(users.items, (user) => {
              return `${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="${"flex flex-col gap-2 items-center w-full p-4 border border-blue-100 rounded-md"}">${validate_component(SliderCard, "SliderCard").$$render($$result, { user: { ...user, showRequest: true } }, {}, {})}</div>
							`;
                }
              })}`;
            })}`;
          }
        }
      )}
				`;
    }(__value);
  }(getUsers({
    "page": 1,
    "pageSize": 12,
    "keyword": "fizik"
  }))}</div></div></div></section>

<section class="${"dark:bg-gray-900 mt-4"}"><div><div class="${"block p-6 rounded-lg shadow-md bg-white"}"><h2 class="${"mb-4 text-2xl font-bold tracking-tight leading-none lg:text-3xl dark:text-white"}">Okuma Yazma \xD6zel Ders Verenler</h2>
			<div>${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
					Y\xFCkleniyor...
				`;
    }
    return function(users) {
      return `
					${validate_component(Splide_1, "Splide").$$render(
        $$result,
        {
          options: {
            arrows: true,
            gap: "1em",
            type: "loop",
            interval: 3e3,
            autoplay: true,
            perPage: 4,
            updateOnMove: true,
            breakpoints: {
              1024: { perPage: 3 },
              767: { perPage: 2 },
              640: { perPage: 1 }
            },
            perMove: 1,
            pagination: false
          },
          "aria-label": "Okuma Yazma \xF6zel ders verenler"
        },
        {},
        {
          default: () => {
            return `${each(users.items, (user) => {
              return `${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="${"flex flex-col gap-2 items-center w-full p-4 border border-blue-100 rounded-md"}">${validate_component(SliderCard, "SliderCard").$$render($$result, { user: { ...user, showRequest: true } }, {}, {})}</div>
							`;
                }
              })}`;
            })}`;
          }
        }
      )}
				`;
    }(__value);
  }(getUsers({
    "page": 1,
    "pageSize": 12,
    "keyword": "okuma"
  }))}</div></div></div>
</section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-f9uhx_START -->${$$result.title = `<title>\xD6zel Ders \u0130lanlar\u0131 \u0130le \xD6zel Ders Al Veya \xD6zel Ders Ver</title>`, ""}<meta name="${"description"}" content="${"\xD6zel ders ilanlar\u0131 ile kolayca \xF6zel ders al\u0131n veya \xF6zel ders verin."}"><!-- HEAD_svelte-f9uhx_END -->`, ""}

${validate_component(Greeting, "Greeting").$$render($$result, {}, {}, {})}

${validate_component(Categories, "Categories").$$render($$result, {}, {}, {})}

${validate_component(UserSlider, "UserSlider").$$render($$result, {}, {}, {})}

<div class="${"bg-white rounded-lg shadow-md mt-4 p-4 lg:p-8 flex flex-col lg:flex-row items-center gap-4 text-center lg:text-left lg:justify-between"}"><div><span class="${"block font-semibold text-lg"}">Farkl\u0131 kriterlerde bir \xF6\u011Fretmen mi ar\u0131yorsun?</span>
        <span class="${"block"}">T\xFCm \xF6\u011Fretmenler aras\u0131ndan detayl\u0131 arama yapabilirsin.</span></div>
    <div><a href="${"/ozel-ders-ilanlari-verenler"}" class="${"bg-blue-700 hover:bg-blue-900 py-2 px-4 text-sm md:text-lg md:py-3 md:px-6 text-center rounded-full justify-center text-white block md:inline-block"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}" class="${"w-5 h-5 mr-1 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"}"></path></svg>
            \xD6\u011Fretmen ara
        </a></div></div>`;
});
export {
  Page as default
};
