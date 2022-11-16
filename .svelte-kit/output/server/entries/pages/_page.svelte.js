import { c as create_ssr_component, e as subscribe, b as add_attribute, h as compute_rest_props, i as createEventDispatcher, j as spread, k as escape_attribute_value, l as escape_object, v as validate_component, f as escape, o as is_promise, n as noop, p as each } from "../../chunks/index.js";
import { t as teacherSearchParamsStore } from "../../chunks/userStore.js";
import { g as getUsers } from "../../chunks/user.js";
const student = "/_app/immutable/assets/student-51aa6cee.png";
const Greeting = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_teacherSearchParamsStore;
  $$unsubscribe_teacherSearchParamsStore = subscribe(teacherSearchParamsStore, (value) => value);
  let keyword;
  $$unsubscribe_teacherSearchParamsStore();
  return `<section class="${"dark:bg-gray-900"}"><div class="${"grid lg:grid-cols-12 py-6"}"><div class="${"mr-auto place-self-center lg:col-span-8"}"><h1 class="${"mb-4 text-3xl font-bold text-blue-700 tracking-tight leading-none xl:text-4xl dark:text-white"}">\xD6zel ders almak hi\xE7 bu kadar kolay olmam\u0131\u015Ft\u0131!</h1>
			<p class="${"mb-6 font-light text-gray-800 lg:text-base xl:text-lg dark:text-gray-400"}">Do\u011Frulanm\u0131\u015F profile sahip, alan\u0131nda <strong class="${"font-semibold"}">uzman \xF6\u011Fretmenlerden</strong> online veya y\xFCz y\xFCze \xF6zel ders al\u0131n. Hem de Netders.com g\xFCvencesiyle!</p>

			<form autocomplete="${"off"}"><div class="${"relative"}"><div class="${"flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"}"><svg aria-hidden="${"true"}" class="${"w-5 h-5 text-gray-500 dark:text-gray-400"}" fill="${"none"}" stroke="${"currentColor"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}"></path></svg></div>
					<input type="${"text"}" id="${"default-search"}" class="${"block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 shadow-md rounded-lg border-0"}" placeholder="${"Arad\u0131\u011F\u0131n\u0131z \xF6zel ders nedir?"}"${add_attribute("value", keyword, 0)}>
					<button type="${"submit"}" class="${"text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2"}">ARA</button></div></form>

			<p class="${"text-xs text-gray-400 pt-2"}">\xD6rne\u011Fin; matematik, ingilizce, fizik gibi, almak istedi\u011Finiz \xF6zel dersin ad\u0131n\u0131 yukar\u0131daki arama alan\u0131na girip, ara tu\u015Funa bas\u0131n\u0131z.</p></div>
		<div class="${"hidden lg:col-span-1 lg:flex"}"></div>
		<div class="${"hidden lg:col-span-3 lg:flex"}"><img${add_attribute("src", student, 0)} alt="${""}"></div></div>
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
const css$1 = {
  code: "@import '@splidejs/splide/css/skyblue';",
  map: null
};
const Categories = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section class="${"dark:bg-gray-900"}"><div class="${"block p-6 rounded-lg shadow-md bg-white"}"><h2 class="${"mb-4 text-2xl font-bold tracking-tight leading-none lg:text-3xl dark:text-white"}">\xD6zel ders kategorileri</h2>
		<p class="${"text-gray-700 text-base mb-4"}">Alan\u0131nda tecr\xFCbeli e\u011Fitmenlerden \xF6zel ders alarak, ihtiyac\u0131n olan e\u011Fitime, uygun maliyetlerle ve kolayca sahip olabilirsin.
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
            return `<a href="${"/"}" class="${"text-blue-700 hover:text-blue-900"}"><img${add_attribute("src", bilgisayar, 0)} alt="${"Bilgisayar"}">
						<span>Bilgisayar</span></a>`;
          }
        })}
				${validate_component(SplideSlide, "SplideSlide").$$render($$result, { class: "text-center" }, {}, {
          default: () => {
            return `<a href="${"/"}" class="${"text-blue-700 hover:text-blue-900"}"><img${add_attribute("src", dans, 0)} alt="${"Dans"}">
						<span>Dans</span></a>`;
          }
        })}
				${validate_component(SplideSlide, "SplideSlide").$$render($$result, { class: "text-center" }, {}, {
          default: () => {
            return `<a href="${"/"}" class="${"text-blue-700 hover:text-blue-900"}"><img${add_attribute("src", direksiyon, 0)} alt="${"Direksiyon"}">
						<span>Direksiyon</span></a>`;
          }
        })}
				${validate_component(SplideSlide, "SplideSlide").$$render($$result, { class: "text-center" }, {}, {
          default: () => {
            return `<a href="${"/"}" class="${"text-blue-700 hover:text-blue-900"}"><img${add_attribute("src", ilkogretim, 0)} alt="${"\u0130lk\xF6\u011Fretim Takviye"}">
						<span>\u0130lk\xF6\u011Fretim Takviye</span></a>`;
          }
        })}
				${validate_component(SplideSlide, "SplideSlide").$$render($$result, { class: "text-center" }, {}, {
          default: () => {
            return `<a href="${"/"}" class="${"text-blue-700 hover:text-blue-900"}"><img${add_attribute("src", kisiselgelisim, 0)} alt="${"Ki\u015Fisel Geli\u015Fim"}">
						<span>Ki\u015Fisel Geli\u015Fim</span></a>`;
          }
        })}
				${validate_component(SplideSlide, "SplideSlide").$$render($$result, { class: "text-center" }, {}, {
          default: () => {
            return `<a href="${"/"}" class="${"text-blue-700 hover:text-blue-900"}"><img${add_attribute("src", lise, 0)} alt="${"Lise Takviye"}">
						<span>Lise Takviye</span></a>`;
          }
        })}
				${validate_component(SplideSlide, "SplideSlide").$$render($$result, { class: "text-center" }, {}, {
          default: () => {
            return `<a href="${"/"}" class="${"text-blue-700 hover:text-blue-900"}"><img${add_attribute("src", muzik, 0)} alt="${"M\xFCzik"}">
						<span>M\xFCzik</span></a>`;
          }
        })}
				${validate_component(SplideSlide, "SplideSlide").$$render($$result, { class: "text-center" }, {}, {
          default: () => {
            return `<a href="${"/"}" class="${"text-blue-700 hover:text-blue-900"}"><img${add_attribute("src", oyunhobi, 0)} alt="${"Oyun & Hobi"}">
						<span>Oyun &amp; Hobi</span></a>`;
          }
        })}
				${validate_component(SplideSlide, "SplideSlide").$$render($$result, { class: "text-center" }, {}, {
          default: () => {
            return `<a href="${"/"}" class="${"text-blue-700 hover:text-blue-900"}"><img${add_attribute("src", ozelegitim, 0)} alt="${"\xD6zel E\u011Fitim"}">
						<span>\xD6zel E\u011Fitim</span></a>`;
          }
        })}
				${validate_component(SplideSlide, "SplideSlide").$$render($$result, { class: "text-center" }, {}, {
          default: () => {
            return `<a href="${"/"}" class="${"text-blue-700 hover:text-blue-900"}"><img${add_attribute("src", sanat, 0)} alt="${"Sanat"}">
						<span>Sanat</span></a>`;
          }
        })}
				${validate_component(SplideSlide, "SplideSlide").$$render($$result, { class: "text-center" }, {}, {
          default: () => {
            return `<a href="${"/"}" class="${"text-blue-700 hover:text-blue-900"}"><img${add_attribute("src", sinavhazirlik, 0)} alt="${"S\u0131nav Haz\u0131rl\u0131k"}">
						<span>S\u0131nav Haz\u0131rl\u0131k</span></a>`;
          }
        })}
				${validate_component(SplideSlide, "SplideSlide").$$render($$result, { class: "text-center" }, {}, {
          default: () => {
            return `<a href="${"/"}" class="${"text-blue-700 hover:text-blue-900"}"><img${add_attribute("src", spor, 0)} alt="${"Spor"}">
						<span>Spor</span></a>`;
          }
        })}
				${validate_component(SplideSlide, "SplideSlide").$$render($$result, { class: "text-center" }, {}, {
          default: () => {
            return `<a href="${"/"}" class="${"text-blue-700 hover:text-blue-900"}"><img${add_attribute("src", universite, 0)} alt="${"\xDCniversite Takviye"}">
						<span>\xDCniversite Takviye</span></a>`;
          }
        })}
				${validate_component(SplideSlide, "SplideSlide").$$render($$result, { class: "text-center" }, {}, {
          default: () => {
            return `<a href="${"/"}" class="${"text-blue-700 hover:text-blue-900"}"><img${add_attribute("src", yabancidil, 0)} alt="${"Yabanc\u0131 Dil"}">
						<span>Yabanc\u0131 Dil</span></a>`;
          }
        })}`;
      }
    }
  )}</div></div>
</section>`;
});
const UserVertical = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { loginAt } = $$props;
  let { firstName } = $$props;
  let { genderId } = $$props;
  let { genderName } = $$props;
  let { lastName } = $$props;
  let { about } = $$props;
  let { cityId } = $$props;
  let { cityName } = $$props;
  let { countyId } = $$props;
  let { countyName } = $$props;
  let { minimumPrice } = $$props;
  let { isOnline } = $$props;
  let { title } = $$props;
  let { countryId } = $$props;
  let { countryName } = $$props;
  let { username } = $$props;
  let { isTeachRemotely } = $$props;
  let { isTeachPhysically } = $$props;
  let { searchPoint } = $$props;
  const getPhotoEmptyUserAvatar = (genderName2) => {
    if (genderName2 == "Erkek")
      return "img/icon-male.png";
    if (genderName2 == "Kad\u0131n")
      return "img/icon-female.png";
    return "img/icon-male.png";
  };
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.loginAt === void 0 && $$bindings.loginAt && loginAt !== void 0)
    $$bindings.loginAt(loginAt);
  if ($$props.firstName === void 0 && $$bindings.firstName && firstName !== void 0)
    $$bindings.firstName(firstName);
  if ($$props.genderId === void 0 && $$bindings.genderId && genderId !== void 0)
    $$bindings.genderId(genderId);
  if ($$props.genderName === void 0 && $$bindings.genderName && genderName !== void 0)
    $$bindings.genderName(genderName);
  if ($$props.lastName === void 0 && $$bindings.lastName && lastName !== void 0)
    $$bindings.lastName(lastName);
  if ($$props.about === void 0 && $$bindings.about && about !== void 0)
    $$bindings.about(about);
  if ($$props.cityId === void 0 && $$bindings.cityId && cityId !== void 0)
    $$bindings.cityId(cityId);
  if ($$props.cityName === void 0 && $$bindings.cityName && cityName !== void 0)
    $$bindings.cityName(cityName);
  if ($$props.countyId === void 0 && $$bindings.countyId && countyId !== void 0)
    $$bindings.countyId(countyId);
  if ($$props.countyName === void 0 && $$bindings.countyName && countyName !== void 0)
    $$bindings.countyName(countyName);
  if ($$props.minimumPrice === void 0 && $$bindings.minimumPrice && minimumPrice !== void 0)
    $$bindings.minimumPrice(minimumPrice);
  if ($$props.isOnline === void 0 && $$bindings.isOnline && isOnline !== void 0)
    $$bindings.isOnline(isOnline);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.countryId === void 0 && $$bindings.countryId && countryId !== void 0)
    $$bindings.countryId(countryId);
  if ($$props.countryName === void 0 && $$bindings.countryName && countryName !== void 0)
    $$bindings.countryName(countryName);
  if ($$props.username === void 0 && $$bindings.username && username !== void 0)
    $$bindings.username(username);
  if ($$props.isTeachRemotely === void 0 && $$bindings.isTeachRemotely && isTeachRemotely !== void 0)
    $$bindings.isTeachRemotely(isTeachRemotely);
  if ($$props.isTeachPhysically === void 0 && $$bindings.isTeachPhysically && isTeachPhysically !== void 0)
    $$bindings.isTeachPhysically(isTeachPhysically);
  if ($$props.searchPoint === void 0 && $$bindings.searchPoint && searchPoint !== void 0)
    $$bindings.searchPoint(searchPoint);
  return `<a href="${"/u/" + escape(username, true)}" target="${"_blank"}"><div class="${"flex flex-col gap-2 items-center w-full p-4 border border-blue-100 rounded-md"}"><img class="${"h-32 rounded-full"}" src="${escape("https://netders.com/", true) + escape(getPhotoEmptyUserAvatar(genderName), true)}" alt="${""}">
		<div class="${"flex flex-col w-full justify-between pl-4 leading-normal"}"><h5 class="${"mb-2 text-xl font-bold tracking-tight text-blue-700 text-center"}">${escape(firstName)} ${escape(lastName)}</h5>

			<div class="${"flex flex-col gap-2 justify-between text-gray-500 text-sm"}"><div><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 inline-block mr-1"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"}"></path></svg>
					${escape(minimumPrice)}\u20BA
				</div>

				<div><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 inline-block mr-1"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"}"></path><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"}"></path></svg>
					${escape(cityName)}, ${escape(countyName)}</div>

				<div><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 inline-block mr-1"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M5.636 5.636a9 9 0 1012.728 0M12 3v9"}"></path></svg>
					${escape(isOnline ? "\xC7evrimi\xE7i" : "\xC7evrimd\u0131\u015F\u0131")}</div></div></div></div></a>`;
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
                  return `${validate_component(UserVertical, "UserVertical").$$render($$result, Object.assign(user), {}, {})}
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
                  return `${validate_component(UserVertical, "UserVertical").$$render($$result, Object.assign(user), {}, {})}
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
                  return `${validate_component(UserVertical, "UserVertical").$$render($$result, Object.assign(user), {}, {})}
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
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-t32ptj_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="${"description"}" content="${"Svelte demo app"}"><!-- HEAD_svelte-t32ptj_END -->`, ""}

${validate_component(Greeting, "Greeting").$$render($$result, {}, {}, {})}

${validate_component(Categories, "Categories").$$render($$result, {}, {}, {})}

${validate_component(UserSlider, "UserSlider").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
