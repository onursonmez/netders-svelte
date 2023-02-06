import { c as create_ssr_component, b as subscribe, e as escape, f as each } from "../../chunks/index.js";
/* empty css                */import { p as page } from "../../chunks/stores.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<div class="${"flex justify-center text-center py-8"}"><div><div class="${"mt-2 text-7xl font-bold"}">${escape($page.status)}</div>
    <img src="${escape("https://d1ql1h7f6x0zr6.cloudfront.net/", true) + "error.svg"}" width="${"300"}" class="${"mx-auto my-12"}" alt="${""}">

    ${$page.error.message ? `<div class="${"text-2xl font-bold"}">Hay aksi! Teknik bir hata olu\u015Ftu.</div>
    <div class="${"mt-2"}">Teknik ekibimiz konunun \xE7\xF6z\xFCm\xFC i\xE7in \xE7al\u0131\u015Fmalar\u0131n\u0131 s\xFCrd\xFCr\xFCyor. En k\u0131sa s\xFCre i\xE7erisinde problemin \xE7\xF6z\xFClece\u011Fini bildirmek isteriz.</div>
    <div class="${"mt-2 text-xs text-gray-300"}">${escape($page.error.message)}</div>` : `${$page.error ? `${each(Object.values($page.error), (error) => {
    return `<div class="${"mt-2"}">${escape(error)}</div>`;
  })}` : ``}`}</div></div>`;
});
export {
  Error as default
};
