import { c as create_ssr_component, b as subscribe, e as escape, d as add_attribute, f as each } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const errorImage = "/_app/immutable/assets/error-c0815c25.svg";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<div class="${"flex text-center h-screen my-auto items-center justify-center"}"><div><div class="${"mt-2 text-7xl font-bold"}">${escape($page.status)}</div>
    <img${add_attribute("src", errorImage, 0)} width="${"300"}" class="${"mx-auto my-12"}">

    ${$page.error.message ? `<div class="${"text-2xl font-bold"}">Hay aksi! Teknik bir hata olu\u015Ftu.</div>
    <div class="${"mt-2"}">Teknik ekibimiz konunun \xE7\xF6z\xFCm\xFC i\xE7in \xE7al\u0131\u015Fmalar\u0131n\u0131 s\xFCrd\xFCr\xFCyor. En k\u0131sa s\xFCre i\xE7erisinde problemin \xE7\xF6z\xFClece\u011Fini bildirmek isteriz.</div>
    <div class="${"mt-2 text-xs text-gray-300"}">${escape($page.error.message)}</div>` : `${$page.error ? `${each(Object.values($page.error), (error) => {
    return `<div class="${"mt-2"}">${escape(error)}</div>`;
  })}` : ``}`}</div></div>`;
});
export {
  Error as default
};
