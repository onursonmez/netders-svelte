import { c as create_ssr_component, b as subscribe, d as add_attribute, i as compute_rest_props, j as createEventDispatcher, k as spread, l as escape_attribute_value, o as escape_object, v as validate_component, p as is_promise, n as noop, f as each, e as escape } from "../../chunks/index.js";
import { t as teacherSearchParamsStore } from "../../chunks/userStore.js";
import { g as getUsers } from "../../chunks/user.js";
import { U as UserVertical } from "../../chunks/UserVertical.js";
/* empty css                */import { H as Header, c as coloredBar } from "../../chunks/colored-bar.js";
const student = "/_app/immutable/assets/student-5bcaf7c1.webp 714w";
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
		<div class="${"hidden lg:col-span-3 lg:flex"}"><img${add_attribute("srcset", student, 0)} type="${"image/webp"}" alt="${""}"></div></div>
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
const bilgisayar = "/_app/immutable/assets/home-icon-bilgisayar-28e4a71a.svg";
const dans = "/_app/immutable/assets/home-icon-dans-620f1f4c.svg";
const direksiyon = "/_app/immutable/assets/home-icon-direksiyon-f6f5e8fc.svg";
const ilkogretim = "/_app/immutable/assets/home-icon-ilkogretim-a3b45991.svg";
const kisiselgelisim = "/_app/immutable/assets/home-icon-kisiselgelisim-66895feb.svg";
const lise = "/_app/immutable/assets/home-icon-lise-864dc187.svg";
const muzik = "/_app/immutable/assets/home-icon-muzik-83b799a3.svg";
const oyunhobi = "/_app/immutable/assets/home-icon-oyunhobi-8013de93.svg";
const ozelegitim = "/_app/immutable/assets/home-icon-ozelegitim-8658b55d.svg";
const sanat = "/_app/immutable/assets/home-icon-sanat-cbe89840.svg";
const sinavhazirlik = "/_app/immutable/assets/home-icon-sinavhazirlik-df3b54b6.svg";
const spor = "/_app/immutable/assets/home-icon-spor-37bdddd9.svg";
const universite = "/_app/immutable/assets/home-icon-universite-c1622639.svg";
const yabancidil = "/_app/immutable/assets/home-icon-yabancidil-7970e6d9.svg";
const Categories_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "@import '@splidejs/splide/css/skyblue';",
  map: null
};
const Categories = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<section class="${"dark:bg-gray-900"}"><div class="${"block p-6 rounded-lg shadow-md bg-white"}"><h2 class="${"mb-4 text-2xl font-bold tracking-tight leading-none lg:text-3xl dark:text-white"}">\xD6zel ders kategorileri</h2>
		<p class="${"text-gray-700 text-base mb-4"}">Alan\u0131nda tecr\xFCbeli \xF6\u011Fretmenlerden \xF6zel ders alarak, ihtiyac\u0131n olan do\u011Fru e\u011Fitimi, en uygun fiyatlarla alabilirsin.
		</p>

		<div>${validate_component(Splide_1, "Splide").$$render(
    $$result,
    {
      options: {
        arrows: true,
        gap: "1em",
        type: "loop",
        interval: 3e3,
        autoplay: true,
        perPage: 6,
        updateOnMove: true,
        breakpoints: {
          1024: { perPage: 3 },
          767: { perPage: 2 },
          640: { perPage: 1 }
        },
        perMove: 1,
        pagination: false
      },
      "aria-label": "Kategoriler"
    },
    {},
    {
      default: () => {
        return `${validate_component(SplideSlide, "SplideSlide").$$render($$result, { class: "text-center" }, {}, {
          default: () => {
            return `<a href="${"/ozel-ders-ilanlari-verenler/bilgisayar"}" class="${"text-blue-700 hover:text-blue-900"}"><img${add_attribute("src", bilgisayar, 0)} alt="${"Bilgisayar"}">
						<span>Bilgisayar</span></a>`;
          }
        })}
				${validate_component(SplideSlide, "SplideSlide").$$render($$result, { class: "text-center" }, {}, {
          default: () => {
            return `<a href="${"/ozel-ders-ilanlari-verenler/dans"}" class="${"text-blue-700 hover:text-blue-900"}"><img${add_attribute("src", dans, 0)} alt="${"Dans"}">
						<span>Dans</span></a>`;
          }
        })}
				${validate_component(SplideSlide, "SplideSlide").$$render($$result, { class: "text-center" }, {}, {
          default: () => {
            return `<a href="${"/ozel-ders-ilanlari-verenler/direksiyon"}" class="${"text-blue-700 hover:text-blue-900"}"><img${add_attribute("src", direksiyon, 0)} alt="${"Direksiyon"}">
						<span>Direksiyon</span></a>`;
          }
        })}
				${validate_component(SplideSlide, "SplideSlide").$$render($$result, { class: "text-center" }, {}, {
          default: () => {
            return `<a href="${"/ozel-ders-ilanlari-verenler/ilkogretim-takviye"}" class="${"text-blue-700 hover:text-blue-900"}"><img${add_attribute("src", ilkogretim, 0)} alt="${"\u0130lk\xF6\u011Fretim Takviye"}">
						<span>\u0130lk\xF6\u011Fretim Takviye</span></a>`;
          }
        })}
				${validate_component(SplideSlide, "SplideSlide").$$render($$result, { class: "text-center" }, {}, {
          default: () => {
            return `<a href="${"/ozel-ders-ilanlari-verenler/kisisel-gelisim"}" class="${"text-blue-700 hover:text-blue-900"}"><img${add_attribute("src", kisiselgelisim, 0)} alt="${"Ki\u015Fisel Geli\u015Fim"}">
						<span>Ki\u015Fisel Geli\u015Fim</span></a>`;
          }
        })}
				${validate_component(SplideSlide, "SplideSlide").$$render($$result, { class: "text-center" }, {}, {
          default: () => {
            return `<a href="${"/ozel-ders-ilanlari-verenler/lise-takviye"}" class="${"text-blue-700 hover:text-blue-900"}"><img${add_attribute("src", lise, 0)} alt="${"Lise Takviye"}">
						<span>Lise Takviye</span></a>`;
          }
        })}
				${validate_component(SplideSlide, "SplideSlide").$$render($$result, { class: "text-center" }, {}, {
          default: () => {
            return `<a href="${"/ozel-ders-ilanlari-verenler/muzik"}" class="${"text-blue-700 hover:text-blue-900"}"><img${add_attribute("src", muzik, 0)} alt="${"M\xFCzik"}">
						<span>M\xFCzik</span></a>`;
          }
        })}
				${validate_component(SplideSlide, "SplideSlide").$$render($$result, { class: "text-center" }, {}, {
          default: () => {
            return `<a href="${"/ozel-ders-ilanlari-verenler/oyun-ve-hobi"}" class="${"text-blue-700 hover:text-blue-900"}"><img${add_attribute("src", oyunhobi, 0)} alt="${"Oyun & Hobi"}">
						<span>Oyun &amp; Hobi</span></a>`;
          }
        })}
				${validate_component(SplideSlide, "SplideSlide").$$render($$result, { class: "text-center" }, {}, {
          default: () => {
            return `<a href="${"/ozel-ders-ilanlari-verenler/ozel-egitim"}" class="${"text-blue-700 hover:text-blue-900"}"><img${add_attribute("src", ozelegitim, 0)} alt="${"\xD6zel E\u011Fitim"}">
						<span>\xD6zel E\u011Fitim</span></a>`;
          }
        })}
				${validate_component(SplideSlide, "SplideSlide").$$render($$result, { class: "text-center" }, {}, {
          default: () => {
            return `<a href="${"/ozel-ders-ilanlari-verenler/sanat"}" class="${"text-blue-700 hover:text-blue-900"}"><img${add_attribute("src", sanat, 0)} alt="${"Sanat"}">
						<span>Sanat</span></a>`;
          }
        })}
				${validate_component(SplideSlide, "SplideSlide").$$render($$result, { class: "text-center" }, {}, {
          default: () => {
            return `<a href="${"/ozel-ders-ilanlari-verenler/sinav-hazirlik"}" class="${"text-blue-700 hover:text-blue-900"}"><img${add_attribute("src", sinavhazirlik, 0)} alt="${"S\u0131nav Haz\u0131rl\u0131k"}">
						<span>S\u0131nav Haz\u0131rl\u0131k</span></a>`;
          }
        })}
				${validate_component(SplideSlide, "SplideSlide").$$render($$result, { class: "text-center" }, {}, {
          default: () => {
            return `<a href="${"/ozel-ders-ilanlari-verenler/spor"}" class="${"text-blue-700 hover:text-blue-900"}"><img${add_attribute("src", spor, 0)} alt="${"Spor"}">
						<span>Spor</span></a>`;
          }
        })}
				${validate_component(SplideSlide, "SplideSlide").$$render($$result, { class: "text-center" }, {}, {
          default: () => {
            return `<a href="${"/ozel-ders-ilanlari-verenler/universite-takviye"}" class="${"text-blue-700 hover:text-blue-900"}"><img${add_attribute("src", universite, 0)} alt="${"\xDCniversite Takviye"}">
						<span>\xDCniversite Takviye</span></a>`;
          }
        })}
				${validate_component(SplideSlide, "SplideSlide").$$render($$result, { class: "text-center" }, {}, {
          default: () => {
            return `<a href="${"/ozel-ders-ilanlari-verenler/yabanci-dil"}" class="${"text-blue-700 hover:text-blue-900"}"><img${add_attribute("src", yabancidil, 0)} alt="${"Yabanc\u0131 Dil"}">
						<span>Yabanc\u0131 Dil</span></a>`;
          }
        })}`;
      }
    }
  )}</div></div>
</section>`;
});
const UserSlider_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "@import '@splidejs/splide/css/skyblue';",
  map: null
};
const UserSlider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prepareUserData = (userData) => {
    return { ...userData, showRequest: false };
  };
  $$result.css.add(css$1);
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
            return `${each(users.items, (userData) => {
              return `${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="${"flex flex-col gap-2 items-center w-full p-4 border border-blue-100 rounded-md"}">${validate_component(UserVertical, "UserVertical").$$render($$result, { userData: prepareUserData(userData) }, {}, {})}</div>
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
            return `${each(users.items, (userData) => {
              return `${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="${"flex flex-col gap-2 items-center w-full p-4 border border-blue-100 rounded-md"}">${validate_component(UserVertical, "UserVertical").$$render($$result, { userData: prepareUserData(userData) }, {}, {})}</div>
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
            return `${each(users.items, (userData) => {
              return `${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
                default: () => {
                  return `<div class="${"flex flex-col gap-2 items-center w-full p-4 border border-blue-100 rounded-md"}">${validate_component(UserVertical, "UserVertical").$$render($$result, { userData: prepareUserData(userData) }, {}, {})}</div>
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
  }))}</div></div></div>
</section>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: `.app.svelte-95lviu{display:flex;flex-direction:column;min-height:100vh}main.svelte-95lviu{flex:1;display:flex;flex-direction:column;width:100%;max-width:90%;margin:0 auto;box-sizing:border-box}footer.svelte-95lviu{flex:1;display:flex;flex-direction:column;width:100%;max-width:90%;margin:0 auto;box-sizing:border-box}.invite-friend-background.svelte-95lviu{background-color:#ffaa00;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpath fill='%23ffb100' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%23ffb800' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%23ffbe00' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%23ffc500' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%23ffcc00' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%23ffd914' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%23ffe529' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%23ffef3d' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%23fff852' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%23ffff66' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E");background-attachment:fixed;background-size:cover}`,
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1rkmm9l_START -->${$$result.title = `<title>\xD6zel Ders \u0130lanlar\u0131 \u0130le \xD6zel Ders Al Veya \xD6zel Ders Ver</title>`, ""}<meta name="${"description"}" content="${"Binlerce onayl\u0131 alan\u0131nda uzman \xF6\u011Fretmen, \xF6zel ders vermek i\xE7in sab\u0131rs\u0131zlan\u0131yor."}"><!-- HEAD_svelte-1rkmm9l_END -->`, ""}

<div class="${"app svelte-95lviu"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

	<main class="${"svelte-95lviu"}">${validate_component(Greeting, "Greeting").$$render($$result, {}, {}, {})}

		${validate_component(Categories, "Categories").$$render($$result, {}, {}, {})}

		${validate_component(UserSlider, "UserSlider").$$render($$result, {}, {}, {})}</main>

	<footer class="${"svelte-95lviu"}"><div class="${"hidden bg-white rounded-lg shadow-md mt-4 p-4 lg:p-8 invite-friend-background lg:text-xl flex flex-col lg:flex-row items-center gap-4 text-center lg:text-left lg:justify-between svelte-95lviu"}"><div>Arkada\u015F\u0131n\u0131 davet et <span class="${"font-bold text-lg lg:text-2xl animate-pulse"}">50\u20BA</span> indirim kazan.
				<br>
				<span class="${"text-xs"}">Arkada\u015F\u0131n\u0131n \xFCye olup, ilk ge\xE7erli sipari\u015Finde indirim kuponu hesab\u0131na tan\u0131mlan\u0131r.</span></div>
			<div><button class="${"bg-blue-700 hover:bg-blue-900 py-2 px-4 text-sm md:text-lg md:py-3 md:px-6 text-center rounded-full justify-center text-white block md:inline-block"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 mr-1 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"}"></path></svg>
					Hemen davet Et
				</button></div></div>

		<section class="${"shadow-md rounded-t-lg bg-white text-center text-base my-4"}"><div class="${"p-6 text-gray-500 text-sm"}">Copyright \xA9 2013 - 2022 Netders.com
			</div>
			<div class="${"shadow-md rounded-b-lg bg-blue-700 p-6 text-white bg-top bg-no-repeat bg-contain"}" style="${"background-image:url('" + escape(coloredBar, true) + "')"}"><ul class="${"lg:flex justify-center mt-4 text-blue-300"}"><li class="${"mx-2 hover:text-white"}"><a href="${"/"}" class="${""}">Ana Sayfa</a></li>
					<li class="${"mx-2 hover:text-white"}"><a href="${"/"}">\xD6\u011Fretmen Ara</a></li>
					<li class="${"mx-2 hover:text-white"}"><a href="${"/"}">Ders talepleri</a></li>
					<li class="${"mx-2 hover:text-white"}"><a href="${"/"}">Nas\u0131l \xC7al\u0131\u015F\u0131r?</a></li>
					<li class="${"mx-2 hover:text-white"}"><a href="${"/"}">Yard\u0131m</a></li>
					<li class="${"mx-2 hover:text-white"}"><a href="${"/"}">\u0130leti\u015Fim</a></li></ul>
				<p class="${"pt-4 text-sm"}">Netders.com&#39;a \xFCye olarak <a href="${"/"}" class="${"text-blue-300 hover:text-white"}">Kullan\u0131m Ko\u015Fullar\u0131</a>&#39;n\u0131 kabul etmi\u015F say\u0131l\u0131rs\u0131n.</p>
				<img src="${"/images/turkiye-white.svg"}" class="${"w-36 mx-auto py-4"}" alt="${""}">
				<ul class="${"flex justify-center text-blue-300"}"><li class="${"mx-2 hover:text-white"}"><a href="${"/"}">Kullan\u0131m Ko\u015Fullar\u0131</a></li>
					<li class="${"mx-2 hover:text-white"}"><a href="${"/"}">Gizlilik \u0130lkeleri</a></li></ul></div></section></footer>
</div>`;
});
export {
  Page as default
};
