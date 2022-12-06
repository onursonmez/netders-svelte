import { c as create_ssr_component, j as createEventDispatcher, d as add_attribute, e as escape } from "./index.js";
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { label } = $$props;
  let { id = "" } = $$props;
  let { type = "text" } = $$props;
  let { placeholder = "" } = $$props;
  let { value = "" } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  return `${label ? `<label class="${"block text-sm font-medium leading-8 text-gray-700"}"${add_attribute("for", id, 0)}>${escape(label)}</label>` : ``}
<input${add_attribute("id", id, 0)}${add_attribute("type", type, 0)}${add_attribute("placeholder", placeholder, 0)}${add_attribute("value", value, 0)} class="${"w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}">`;
});
export {
  Input as I
};
