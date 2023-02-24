import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component, d as add_attribute, f as each } from "../../../chunks/index3.js";
import "toastify-js";
import "../../../chunks/index.js";
import { p as page } from "../../../chunks/stores.js";
import "classnames";
/* empty css                                                       */import { T as Tooltip } from "../../../chunks/Tooltip.js";
import { M as MediaCardContainer } from "../../../chunks/MediaCardContainer.js";
const UserComment = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { username } = $$props;
  let commentData = {
    username,
    rate: 5,
    fullName: "",
    email: "",
    comment: ""
  };
  if ($$props.username === void 0 && $$bindings.username && username !== void 0)
    $$bindings.username(username);
  $$unsubscribe_page();
  return `<form class="${"grid grid-cols-2 gap-4 max-w-2xl mx-auto"}"><div class="${"col-span-2 mx-auto emotionRatings flex gap-4"}"><img src="${escape("https://d1ql1h7f6x0zr6.cloudfront.net/", true) + "emotion-1.svg"}" class="${[
    "w-12 h-12 opacity-40 hover:opacity-100 cursor-pointer inline-block",
    "opacity-40"
  ].join(" ").trim()}" alt="${"Çok kötü"}">
        ${validate_component(Tooltip, "Tooltip").$$render(
    $$result,
    {
      style: "custom",
      class: "text-xs bg-red-700 border-red-700 text-white transition-opacity ease-in duration-700 opacity-100"
    },
    {},
    {
      default: () => {
        return `Çok Kötü`;
      }
    }
  )}

        <img src="${escape("https://d1ql1h7f6x0zr6.cloudfront.net/", true) + "emotion-2.svg"}" class="${[
    "w-12 h-12 opacity-40 hover:opacity-100 cursor-pointer inline-block",
    "opacity-40"
  ].join(" ").trim()}" alt="${"Kötü"}">
        ${validate_component(Tooltip, "Tooltip").$$render(
    $$result,
    {
      style: "custom",
      class: "text-xs bg-orange-500 border-orange-500 text-white transition-opacity ease-in duration-700 opacity-100"
    },
    {},
    {
      default: () => {
        return `Kötü`;
      }
    }
  )}

        <img src="${escape("https://d1ql1h7f6x0zr6.cloudfront.net/", true) + "emotion-3.svg"}" class="${[
    "w-12 h-12 opacity-40 hover:opacity-100 cursor-pointer inline-block",
    "opacity-40"
  ].join(" ").trim()}" alt="${"Normal"}">
        ${validate_component(Tooltip, "Tooltip").$$render(
    $$result,
    {
      style: "custom",
      class: "text-xs bg-gray-500 border-gray-500 text-white transition-opacity ease-in duration-700 opacity-100"
    },
    {},
    {
      default: () => {
        return `İyi`;
      }
    }
  )}

        <img src="${escape("https://d1ql1h7f6x0zr6.cloudfront.net/", true) + "emotion-4.svg"}" class="${[
    "w-12 h-12 opacity-40 hover:opacity-100 cursor-pointer inline-block",
    "opacity-40"
  ].join(" ").trim()}" alt="${"İyi"}">
        ${validate_component(Tooltip, "Tooltip").$$render(
    $$result,
    {
      style: "custom",
      class: "text-xs bg-blue-500 border-blue-500 text-white transition-opacity ease-in duration-700 opacity-100"
    },
    {},
    {
      default: () => {
        return `Çok İyi`;
      }
    }
  )}

        <img src="${escape("https://d1ql1h7f6x0zr6.cloudfront.net/", true) + "emotion-5.svg"}" class="${[
    "w-12 h-12 opacity-40 hover:opacity-100 cursor-pointer inline-block",
    ""
  ].join(" ").trim()}" alt="${"Mükemmel"}">
        ${validate_component(Tooltip, "Tooltip").$$render(
    $$result,
    {
      style: "custom",
      class: "text-xs bg-blue-700 border-blue-700 text-white transition-opacity ease-in duration-700 opacity-100"
    },
    {},
    {
      default: () => {
        return `Mükemmel`;
      }
    }
  )}</div>
    <div><span class="${"text-sm mb-1 block text-gray-500"}">Adın soyadın</span>
        <input type="${"text"}" class="${"w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"${add_attribute("value", commentData.fullName, 0)}></div>
    <div><span class="${"text-sm mb-1 block text-gray-500"}">E-posta adresin</span>
        <input type="${"text"}" class="${"w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}"${add_attribute("value", commentData.email, 0)}></div>
    <div class="${"col-span-2"}"><span class="${"text-sm mb-1 block text-gray-500"}">Yorumun</span>
        <textarea class="${"w-full rounded-md border border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-0"}">${""}</textarea></div>
    <div class="${"col-span-2 mx-auto"}"><button class="${"bg-blue-700 hover:bg-blue-900 py-2 px-4 rounded-full justify-center text-sm flex text-white"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 mr-2 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"}"></path></svg>
            Yorumu Gönder
        </button></div></form>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-pd5evx_START -->${$$result.title = `<title>${escape(data.user.firstName)} ${escape(data.user.lastName)} Özel Ders Profil Sayfası ${escape(data.user.city?.title ?? data.user.country?.title)}</title>`, ""}<!-- HEAD_svelte-pd5evx_END -->`, ""}

<div class="${"lg:flex lg:flex-row gap-6 bg-white p-6 rounded-lg shadow-md mt-4"}">${validate_component(MediaCardContainer, "MediaCardContainer").$$render(
    $$result,
    {
      user: {
        ...data.user,
        showShare: true,
        showApprovedBadge: true,
        showIsOnlineBadge: true,
        showRequest: true
      }
    },
    {},
    {}
  )}</div>

${data.prices?.items !== null ? `<div class="${"bg-white rounded-lg shadow-md mt-4"}"><div class="${"bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold"}">Ders Ücretleri</div>
        <div class="${"p-6"}"><table class="${"table-fixed w-full text-left text-sm lg:text-base"}"><thead><tr><th class="${"pb-2 font-semibold"}">Ders Adı</th>
                    <th align="${"right"}" class="${"font-semibold"}">Yüz Yüze</th>
                    <th align="${"right"}" class="${"font-semibold"}">Uzaktan (Webcam)</th></tr></thead>
                <tbody>${each(data.prices.items, (price) => {
    return `<tr class="${"border-t border-gray-200"}"><td class="${"py-2"}">${price.slug ? `<a href="${"/ozel-ders-" + escape(price.slug, true)}" target="${"_blank"}" rel="${"noreferrer"}">${escape(price.subject.title)} - ${escape(price.level.title)}</a>` : `${escape(price.subject.title)} - ${escape(price.level.title)}`}</td>
                        <td align="${"right"}">${price.pricePrivate > 0 ? `${escape(price.pricePrivate)}<span class="${"text-xs"}">₺</span>` : `-`}</td>
                        <td align="${"right"}">${price.priceLive > 0 ? `${escape(price.priceLive)}<span class="${"text-xs"}">₺</span>` : `-`}</td>
                    </tr>`;
  })}</tbody></table></div></div>` : ``}

${data.locations?.items !== null ? `<div class="${"bg-white rounded-lg shadow-md mt-4"}"><div class="${"bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold"}">Yüz Yüze Ders Verdiği Lokasyonlar</div>
        <div class="${"flex flex-col gap-4 p-6"}">${each(data.locations.items, (location) => {
    return `<div><span class="${"font-semibold"}">${escape(location.city.title)}</span>
                    <ul class="${"grid grid-cols-1 md:grid-cols-3"}">${each(location.counties, (county) => {
      return `<li>${escape(county.title)}</li>`;
    })}</ul>
                </div>`;
  })}</div></div>` : ``}

${data.comments?.items !== null ? `<div class="${"bg-white rounded-lg shadow-md mt-4"}"><div class="${"bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold"}">Yorumlar</div>
        <div class="${"p-6"}">${each(data.comments.items, (comment, index) => {
    return `<div class="${["flex", index > 0 ? "mt-6" : ""].join(" ").trim()}"><div class="${"flex-none w-12 h-12 rounded-full border border-orange-100 bg-orange-50"}"><div class="${"flex justify-center items-center w-12 h-12"}">${escape(comment.fullName.charAt(0))}</div></div>

                    <div class="${"ml-4 grow"}"><h2 class="${"font-semibold"}">${escape(comment.fullName)}</h2>
                        <p class="${"mt-2 text-sm text-gray-500"}">${each(Array(comment.rate), (_, index2) => {
      return `<span class="${"mr-1"}">⭐</span>`;
    })}</p>
                        <p class="${"mt-2 text-sm text-gray-500"}">${escape(comment.comment)}</p></div>
                </div>`;
  })}</div></div>` : ``}

<div class="${"bg-white rounded-lg shadow-md mt-4"}"><div class="${"bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold"}">Yorum Yap</div>
    <div class="${"p-6"}">${validate_component(UserComment, "UserComment").$$render($$result, { username: data.user.username }, {}, {})}</div></div>`;
});
export {
  Page as default
};
