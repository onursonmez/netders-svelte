import { c as create_ssr_component, h as getContext, d as add_attribute, i as escape, b as compute_rest_props, e as spread, g as escape_object, f as escape_attribute_value, p as each, l as createEventDispatcher, v as validate_component, o as compute_slots } from "../../../chunks/index.js";
import classNames from "classnames";
import { B as Button } from "../../../chunks/Button.js";
/* empty css                                                       */import { I as Input, S as Search, U as User } from "../../../chunks/User.js";
import { F as Frame } from "../../../chunks/Frame.js";
const CloseButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const background = getContext("background");
  let { color = "default" } = $$props;
  let { name = "Close" } = $$props;
  let { size = "md" } = $$props;
  const colors = {
    dark: "hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",
    gray: "focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-300",
    red: "focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-300",
    yellow: "focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-300",
    green: "focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-300",
    indigo: "focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-300",
    purple: "focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-300",
    pink: "focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-300",
    blue: "focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-300",
    default: "focus:ring-gray-300 "
  };
  const sizing = {
    xs: "m-0.5 rounded focus:ring-1 p-0.5",
    sm: "m-0.5 rounded focus:ring-1 p-0.5",
    md: "rounded-lg focus:ring-2 p-1.5"
  };
  let buttonClass = "";
  const svgSizes = {
    xs: "w-3 h-3",
    sm: "w-3.5 h-3.5",
    md: "w-5 h-5"
  };
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  buttonClass = classNames(
    "ml-auto focus:outline-none whitespace-normal",
    sizing[size],
    colors[color],
    color === "default" && (background ? "hover:bg-gray-100 dark:hover:bg-gray-600" : "hover:bg-gray-100 dark:hover:bg-gray-700"),
    $$props.class
  );
  return `<button type="${"button"}"${add_attribute("class", buttonClass, 0)} aria-label="${"Close"}">${slots.default ? slots.default({}) : `
		<span class="${"sr-only"}">${escape(name)}</span>
		<svg${add_attribute("class", svgSizes[size], 0)} fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg>
	`}</button>`;
});
const Label = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color", "defaultClass", "show"]);
  let { color = "gray" } = $$props;
  let { defaultClass = "text-sm font-medium block" } = $$props;
  let { show = true } = $$props;
  let node;
  const colorClasses = {
    gray: "text-gray-900 dark:text-gray-300",
    green: "text-green-700 dark:text-green-500",
    red: "text-red-700 dark:text-red-500",
    disabled: "text-gray-400 dark:text-gray-500"
  };
  let labelClass;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  {
    {
      const control = node == null ? void 0 : node.control;
      color = (control == null ? void 0 : control.disabled) ? "disabled" : color;
    }
  }
  labelClass = classNames(defaultClass, colorClasses[color], $$props.class);
  return `${show ? `
	<label${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(labelClass)
      }
    ],
    {}
  )}${add_attribute("this", node, 0)}>${slots.default ? slots.default({}) : ``}</label>` : `${slots.default ? slots.default({}) : ``}`}`;
});
const common = "block w-full";
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "items",
    "value",
    "placeholder",
    "underline",
    "size",
    "defaultClass",
    "underlineClass"
  ]);
  let { items = [] } = $$props;
  let { value } = $$props;
  let { placeholder = "Choose option ..." } = $$props;
  let { underline = false } = $$props;
  let { size = "md" } = $$props;
  let { defaultClass = "text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" } = $$props;
  let { underlineClass = "text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer" } = $$props;
  const sizes = {
    sm: "text-sm p-2",
    md: "text-sm p-2.5",
    lg: "text-base py-3 px-4"
  };
  let selectClass;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.underline === void 0 && $$bindings.underline && underline !== void 0)
    $$bindings.underline(underline);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.underlineClass === void 0 && $$bindings.underlineClass && underlineClass !== void 0)
    $$bindings.underlineClass(underlineClass);
  selectClass = classNames(common, underline ? underlineClass : defaultClass, sizes[size], underline && "!px-0", $$restProps.class);
  return `<select${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(selectClass)
      }
    ],
    {}
  )}><option disabled selected value="${""}">${escape(placeholder)}</option>${each(items, ({ value: value2, name }) => {
    return `<option${add_attribute("value", value2, 0)}>${escape(name)}</option>`;
  })}</select>`;
});
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { open = false } = $$props;
  let { title = "" } = $$props;
  let { size = "md" } = $$props;
  let { placement = "center" } = $$props;
  let { autoclose = true } = $$props;
  let { permanent = false } = $$props;
  let { backdropClasses = "bg-gray-900 bg-opacity-50 dark:bg-opacity-80" } = $$props;
  const dispatch = createEventDispatcher();
  const getPlacementClasses = () => {
    switch (placement) {
      case "top-left":
        return ["justify-start", "items-start"];
      case "top-center":
        return ["justify-center", "items-start"];
      case "top-right":
        return ["justify-end", "items-start"];
      case "center-left":
        return ["justify-start", "items-center"];
      case "center":
        return ["justify-center", "items-center"];
      case "center-right":
        return ["justify-end", "items-center"];
      case "bottom-left":
        return ["justify-start", "items-end"];
      case "bottom-center":
        return ["justify-center", "items-end"];
      case "bottom-right":
        return ["justify-end", "items-end"];
      default:
        return ["justify-center", "items-center"];
    }
  };
  const sizes = {
    xs: "max-w-md",
    sm: "max-w-lg",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-7xl"
  };
  let mainClass;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.autoclose === void 0 && $$bindings.autoclose && autoclose !== void 0)
    $$bindings.autoclose(autoclose);
  if ($$props.permanent === void 0 && $$bindings.permanent && permanent !== void 0)
    $$bindings.permanent(permanent);
  if ($$props.backdropClasses === void 0 && $$bindings.backdropClasses && backdropClasses !== void 0)
    $$bindings.backdropClasses(backdropClasses);
  {
    dispatch(open ? "open" : "hide");
  }
  mainClass = classNames("flex overflow-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full", backdropClasses, ...getPlacementClasses(), $$props.class);
  return `${open ? `<div tabindex="${"-1"}"${add_attribute("class", mainClass, 0)} aria-modal="${"true"}" role="${"dialog"}"><div class="${"flex p-4 w-full " + escape(sizes[size], true) + " h-full md:h-auto max-h-screen"}">
      ${validate_component(Frame, "Frame").$$render(
    $$result,
    {
      rounded: true,
      shadow: true,
      class: "relative flex flex-col w-full h-full md:h-auto"
    },
    {},
    {
      default: () => {
        return `
        ${$$slots.header || title ? `<div class="${"flex justify-between items-center p-4 rounded-t border-b dark:border-gray-600"}">${slots.header ? slots.header({}) : `
              <h3 class="${"text-xl font-semibold text-gray-900 dark:text-white p-0"}">${escape(title)}</h3>
            `}
            ${!permanent ? `${validate_component(CloseButton, "CloseButton").$$render($$result, { name: "Close modal" }, {}, {})}` : ``}</div>` : `${!permanent ? `${validate_component(CloseButton, "CloseButton").$$render(
          $$result,
          {
            name: "Close modal",
            class: "absolute top-3 right-2.5"
          },
          {},
          {}
        )}` : ``}`}
        
        <div id="${"modal"}" class="${"p-6 space-y-6 flex-1 overflow-y-auto overscroll-contain"}">${slots.default ? slots.default({}) : ``}</div>
        
        ${$$slots.footer ? `<div class="${"flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600"}">${slots.footer ? slots.footer({}) : ``}</div>` : ``}`;
      }
    }
  )}</div></div>` : ``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let formModal = false;
  let cities = [
    { value: 1, name: "Hepsi" },
    { value: 2, name: "\u0130stanbul" },
    { value: 3, name: "Ankara" }
  ];
  let counties = [
    { value: 1, name: "Hepsi" },
    { value: 2, name: "Adalar" },
    { value: 3, name: "Maltepe" }
  ];
  let courseTypes = [
    { value: 1, name: "Hepsi" },
    { value: 2, name: "Y\xFCz Y\xFCze" },
    { value: 3, name: "Online" }
  ];
  let subjects = [
    { value: 1, name: "Hepsi" },
    { value: 2, name: "\u0130lk\xF6\u011Fretim Takviye" },
    { value: 3, name: "Lise Takviye" }
  ];
  let levels = [
    { value: 1, name: "Hepsi" },
    { value: 2, name: "Hayat Bilgisi" },
    { value: 3, name: "\u0130ngilizce" }
  ];
  let teacherGender = [
    { value: 1, name: "Hepsi" },
    { value: 2, name: "Erkek" },
    { value: 3, name: "Kad\u0131n" }
  ];
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-cpm0jt_START -->${$$result.title = `<title>Search</title>`, ""}<meta name="${"description"}" content="${"Search in this app"}"><!-- HEAD_svelte-cpm0jt_END -->`, ""}

${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        size: "md",
        class: "!h-screen",
        open: formModal
      },
      {
        open: ($$value) => {
          formModal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<form class="${"flex flex-col space-y-6"}" action="${"/"}"><h3 class="${"text-xl font-medium text-gray-900 dark:text-white p-0"}">Geli\u015Fmi\u015F Arama</h3>
		<div class="${"grid gap-4 mb-6 md:grid-cols-2"}">${validate_component(Label, "Label").$$render($$result, { class: "space-y-1" }, {}, {
            default: () => {
              return `<span>Anahtar Kelime</span>
				${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  name: "keywork",
                  placeholder: "20"
                },
                {},
                {}
              )}`;
            }
          })}
			${validate_component(Label, "Label").$$render($$result, { class: "space-y-1" }, {}, {
            default: () => {
              return `<span>B\xFCt\xE7e (\u20BA)</span>
				${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  name: "burget",
                  placeholder: "500"
                },
                {},
                {}
              )}`;
            }
          })}
			${validate_component(Label, "Label").$$render($$result, { class: "space-y-1" }, {}, {
            default: () => {
              return `<span>\u015Eehir</span>
				${validate_component(Select, "Select").$$render(
                $$result,
                {
                  id: "select-sm",
                  size: "md",
                  items: cities,
                  placeholder: "L\xFCtfen se\xE7iniz"
                },
                {},
                {}
              )}`;
            }
          })}
			${validate_component(Label, "Label").$$render($$result, { class: "space-y-1" }, {}, {
            default: () => {
              return `<span>\u0130l\xE7e</span>
				${validate_component(Select, "Select").$$render(
                $$result,
                {
                  id: "select-sm",
                  size: "md",
                  items: counties,
                  placeholder: "L\xFCtfen se\xE7iniz",
                  disabled: true
                },
                {},
                {}
              )}`;
            }
          })}
			${validate_component(Label, "Label").$$render($$result, { class: "space-y-1" }, {}, {
            default: () => {
              return `<span>Ders Alan\u0131</span>
				${validate_component(Select, "Select").$$render(
                $$result,
                {
                  id: "select-sm",
                  size: "md",
                  items: subjects,
                  placeholder: "L\xFCtfen se\xE7iniz"
                },
                {},
                {}
              )}`;
            }
          })}
			${validate_component(Label, "Label").$$render($$result, { class: "space-y-1" }, {}, {
            default: () => {
              return `<span>Konu</span>
				${validate_component(Select, "Select").$$render(
                $$result,
                {
                  id: "select-sm",
                  size: "md",
                  items: levels,
                  placeholder: "L\xFCtfen se\xE7iniz",
                  disabled: true
                },
                {},
                {}
              )}`;
            }
          })}
			${validate_component(Label, "Label").$$render($$result, { class: "space-y-1" }, {}, {
            default: () => {
              return `<span>Ders Verme \u015Eekli</span>
				${validate_component(Select, "Select").$$render(
                $$result,
                {
                  id: "select-sm",
                  size: "md",
                  items: courseTypes,
                  placeholder: "L\xFCtfen se\xE7iniz"
                },
                {},
                {}
              )}`;
            }
          })}
			${validate_component(Label, "Label").$$render($$result, { class: "space-y-1" }, {}, {
            default: () => {
              return `<span>\xD6\u011Fretmen</span>
				${validate_component(Select, "Select").$$render(
                $$result,
                {
                  id: "select-sm",
                  size: "md",
                  items: teacherGender,
                  placeholder: "L\xFCtfen se\xE7iniz"
                },
                {},
                {}
              )}`;
            }
          })}</div>
		${validate_component(Button, "Button").$$render($$result, { type: "submit", class: "w-full1" }, {}, {
            default: () => {
              return `Ara`;
            }
          })}</form>`;
        }
      }
    )}

<section class="${"dark:bg-gray-900 text-center"}"><div class="${"flex py-6"}"><div class="${"mx-auto"}"><h1 class="${"mb-4 text-3xl font-bold text-blue-700 tracking-tight leading-none xl:text-4xl dark:text-white"}">\u0130stanbul Matematik <span class="${"text-gray-800"}">\xD6zel Ders Verenler</span></h1>
			<p class="${"mb-6 font-light text-gray-800 lg:text-base xl:text-lg dark:text-gray-400"}">\u0130stanbul \xF6zel ders verenler taraf\u0131ndan olu\u015Fturulan Matematik \xF6zel ders ilanlar\u0131 a\u015Fa\u011F\u0131dad\u0131r</p>
			${validate_component(Search, "Search").$$render(
      $$result,
      {
        class: "border-0 shadow-md",
        placeholder: "Ne ar\u0131yorsunuz?"
      },
      {},
      {
        default: () => {
          return `${validate_component(Button, "Button").$$render($$result, { class: "bg-netders" }, {}, {
            default: () => {
              return `Ara`;
            }
          })}`;
        }
      }
    )}
			<p class="${"mt-4 text-sm text-gray-800"}">veya daha <a href="${"/"}" class="${"text-blue-700 hover:text-blue-900 font-bold"}">Detayl\u0131 Arama</a> yapabilirsiniz.</p>
			<div class="${"flex flex-wrap gap-2 mt-4"}"><div class="${"bg-white p-2 pl-3 rounded-full text-xs font-bold"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 inline-block text-gray-400"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"}"></path></svg>
					<span>Y\xFCz y\xFCze</span>
					<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-6 h-6 inline-block text-blue-700"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg></div>
				<div class="${"bg-white p-2 pl-3 rounded-full text-xs font-bold"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 inline-block text-gray-400"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"}"></path><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"}"></path></svg>
					<span>\u0130stanbul, Kad\u0131k\xF6y</span>
					<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-6 h-6 inline-block text-blue-700"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg></div>
				<div class="${"bg-white p-2 pl-3 rounded-full text-xs font-bold"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 inline-block text-gray-400"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"}"></path></svg>
					<span>\u0130lk\xF6\u011Fretim Takviye, Yabanc\u0131 Dil</span>
					<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-6 h-6 inline-block text-blue-700"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg></div>
				<div class="${"bg-white p-2 pl-3 rounded-full text-xs font-bold"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 inline-block text-gray-400"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"}"></path></svg>
					<span>200 \u20BA</span>
					<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-6 h-6 inline-block text-blue-700"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg></div>
				<div class="${"bg-white p-2 pl-3 rounded-full text-xs font-bold"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 inline-block text-gray-400"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"}"></path></svg>
					<span>Her ikisi</span>
					<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-6 h-6 inline-block text-blue-700"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg></div></div></div></div></section>

<div class="${"py-4 text-sm"}">Arama sonu\xE7lar\u0131na uygun <strong>2310</strong> e\u011Fitmen bulundu.</div>

<div class="${"grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4"}">${validate_component(User, "User").$$render($$result, {}, {}, {})}
	${validate_component(User, "User").$$render($$result, {}, {}, {})}
	${validate_component(User, "User").$$render($$result, {}, {}, {})}
	${validate_component(User, "User").$$render($$result, {}, {}, {})}
	${validate_component(User, "User").$$render($$result, {}, {}, {})}
	${validate_component(User, "User").$$render($$result, {}, {}, {})}
	${validate_component(User, "User").$$render($$result, {}, {}, {})}
	${validate_component(User, "User").$$render($$result, {}, {}, {})}</div>

<div class="${"py-4 text-sm text-center"}">${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 mr-1"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg>


		Daha fazla \xF6\u011Fretmen
	`;
      }
    })}</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
