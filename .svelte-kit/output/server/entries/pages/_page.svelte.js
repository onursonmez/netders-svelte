import { c as create_ssr_component, v as validate_component, d as add_attribute, b as compute_rest_props, l as createEventDispatcher, e as spread, f as escape_attribute_value, g as escape_object } from "../../chunks/index.js";
import "classnames";
import { B as Button } from "../../chunks/Button.js";
/* empty css                                                    */import { S as Search, U as User } from "../../chunks/User.js";
const student = "http://localhost:5173/_app/immutable/assets/student-51aa6cee.png";
const Greeting = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"dark:bg-gray-900"}"><div class="${"grid lg:grid-cols-12 py-6"}"><div class="${"mr-auto place-self-center lg:col-span-8"}"><h1 class="${"mb-4 text-3xl font-bold text-blue-700 tracking-tight leading-none xl:text-4xl dark:text-white"}">\xD6zel ders almak hi\xE7 bu kadar kolay olmam\u0131\u015Ft\u0131!</h1>
			<p class="${"mb-6 font-light text-gray-800 lg:text-base xl:text-lg dark:text-gray-400"}">Do\u011Frulanm\u0131\u015F profile sahip, alan\u0131nda <strong class="${"font-semibold"}">uzman \xF6\u011Fretmenlerden</strong> online veya y\xFCz y\xFCze \xF6zel ders al\u0131n. Hem de Netders.com g\xFCvencesiyle!</p>
			${validate_component(Search, "Search").$$render(
    $$result,
    {
      class: "border-0 shadow-md",
      placeholder: "Arad\u0131\u011F\u0131n\u0131z \xF6zel ders nedir?"
    },
    {},
    {
      default: () => {
        return `${validate_component(Button, "Button").$$render($$result, { class: "bg-netders" }, {}, {
          default: () => {
            return `\xD6\u011Fretmen ara`;
          }
        })}`;
      }
    }
  )}
			<p class="${"text-xs text-gray-400 pt-2"}">\xD6rne\u011Fin; matematik, ingilizce, fizik gibi, almak istedi\u011Finiz \xF6zel dersin ad\u0131n\u0131 yukar\u0131daki arama alan\u0131na girip, \xF6\u011Fretmen ara tu\u015Funa bas\u0131n\u0131z.</p></div>
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
const bilgisayar = "http://localhost:5173/_app/immutable/assets/home-icon-bilgisayar-28e4a71a.svg";
const dans = "http://localhost:5173/_app/immutable/assets/home-icon-dans-620f1f4c.svg";
const direksiyon = "http://localhost:5173/_app/immutable/assets/home-icon-direksiyon-f6f5e8fc.svg";
const ilkogretim = "http://localhost:5173/_app/immutable/assets/home-icon-ilkogretim-a3b45991.svg";
const kisiselgelisim = "http://localhost:5173/_app/immutable/assets/home-icon-kisiselgelisim-66895feb.svg";
const lise = "http://localhost:5173/_app/immutable/assets/home-icon-lise-864dc187.svg";
const muzik = "http://localhost:5173/_app/immutable/assets/home-icon-muzik-83b799a3.svg";
const oyunhobi = "http://localhost:5173/_app/immutable/assets/home-icon-oyunhobi-8013de93.svg";
const ozelegitim = "http://localhost:5173/_app/immutable/assets/home-icon-ozelegitim-8658b55d.svg";
const sanat = "http://localhost:5173/_app/immutable/assets/home-icon-sanat-cbe89840.svg";
const sinavhazirlik = "http://localhost:5173/_app/immutable/assets/home-icon-sinavhazirlik-df3b54b6.svg";
const spor = "http://localhost:5173/_app/immutable/assets/home-icon-spor-37bdddd9.svg";
const universite = "http://localhost:5173/_app/immutable/assets/home-icon-universite-c1622639.svg";
const yabancidil = "http://localhost:5173/_app/immutable/assets/home-icon-yabancidil-7970e6d9.svg";
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
const Slider_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import '@splidejs/splide/css/skyblue';",
  map: null
};
const Slider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="${"dark:bg-gray-900 mt-4"}"><div><div class="${"block p-6 rounded-lg shadow-md bg-white"}"><h2 class="${"mb-4 text-2xl font-bold tracking-tight leading-none lg:text-3xl dark:text-white"}">Fizik \xF6zel ders verenler</h2>

			<div>${validate_component(Splide_1, "Splide").$$render(
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
        return `${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(User, "User").$$render($$result, {}, {}, {})}`;
          }
        })}`;
      }
    }
  )}</div></div></div>
</section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-t32ptj_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="${"description"}" content="${"Svelte demo app"}"><!-- HEAD_svelte-t32ptj_END -->`, ""}

${validate_component(Greeting, "Greeting").$$render($$result, {}, {}, {})}

${validate_component(Categories, "Categories").$$render($$result, {}, {}, {})}

${validate_component(Slider, "Slider").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
