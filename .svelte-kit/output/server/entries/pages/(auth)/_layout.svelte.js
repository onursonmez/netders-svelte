import { c as create_ssr_component } from "../../../chunks/index.js";
/* empty css                   */const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-jv4qyi{display:flex;flex-direction:column;min-height:100vh}main.svelte-jv4qyi{flex:1;display:flex;flex-direction:column;width:100%;max-width:90%;margin:0 auto;box-sizing:border-box}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"app svelte-jv4qyi"}"><main class="${"svelte-jv4qyi"}">${slots.default ? slots.default({}) : ``}</main>
</div>`;
});
export {
  Layout as default
};
