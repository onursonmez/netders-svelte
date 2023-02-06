import { c as create_ssr_component, f as each, e as escape, h as add_attribute, v as validate_component } from "../../../../chunks/index.js";
import "classnames";
/* empty css                                                          */import { T as Tooltip } from "../../../../chunks/Tooltip.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1cnadp8_START -->${$$result.title = `<title>Hesab\u0131m \u2022 Ders Talepleri</title>`, ""}<!-- HEAD_svelte-1cnadp8_END -->`, ""}

<div class="${"w-full flex flex-col gap-4"}">${((_a = data.request) == null ? void 0 : _a.total) > 0 ? `${each(data.request.items, (request) => {
    return `<div class="${"bg-white rounded-lg shadow-md"}"><div class="${"bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg font-semibold text-lg"}"><a href="${"/member/request/" + escape(request.uuid, true)}"><h1 class="${"text-lg font-semibold text-blue-700 leading-none my-2"}">${escape(request.subjectTitle)} \u2192 ${escape(request.levelTitle)}</h1>
                </a></div>
            <div class="${"p-6"}"><div class="${"lg:flex lg:flex-row gap-6"}"><div class="${"basis-3/12 xl:basis-2/12 hidden lg:block"}"><a href="${"/member/request/" + escape(request.uuid, true)}"><img src="${escape("https://d1ql1h7f6x0zr6.cloudfront.net/", true) + escape(request.subjectImageUrl, true)}"${add_attribute("alt", request.subjectTitle, 0)}>
                            </a></div>
                        <div class="${"basis-9/12 xl:basis-10/12"}"><div><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"}"></path></svg>
                                ${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        style: "custom",
        class: "text-xs bg-blue-700 border-blue-700 text-white"
      },
      {},
      {
        default: () => {
          return `Durum`;
        }
      }
    )}
                                ${escape(request.statusTitle)}</div>
                            <div class="${"mt-2"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"}"></path><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"}"></path></svg>
                                ${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        style: "custom",
        class: "text-xs bg-blue-700 border-blue-700 text-white"
      },
      {},
      {
        default: () => {
          return `Bulundu\u011Fu Lokasyon`;
        }
      }
    )}
                                ${request.countyTitle ? `${escape(request.countyTitle)}, ${escape(request.cityTitle)}` : `${escape(request.countryTitle)}`}</div>
                            <div class="${"mt-2"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"}"></path></svg>
                                ${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        style: "custom",
        class: "text-xs bg-blue-700 border-blue-700 text-white"
      },
      {},
      {
        default: () => {
          return `\u0130stedi\u011Fi \xD6\u011Fretmen`;
        }
      }
    )}
                                ${request.genderTitle ? `${escape(request.genderTitle)} \xF6\u011Fretmen` : `Kad\u0131n veya Erkek \xF6\u011Fretmen`}</div>
                            <div class="${"mt-2"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"}"></path></svg>
                                ${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        style: "custom",
        class: "text-xs bg-blue-700 border-blue-700 text-white"
      },
      {},
      {
        default: () => {
          return `B\xFCt\xE7e`;
        }
      }
    )}
                                ${request.budgetMin && request.budgetMax ? `${escape(request.budgetMin)}\u20BA - ${escape(request.budgetMax)}\u20BA` : `B\xFCt\xE7e belirtilmemi\u015F`}</div>
                            <div class="${"mt-2"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"}"></path></svg>
                                ${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        style: "custom",
        class: "text-xs bg-blue-700 border-blue-700 text-white"
      },
      {},
      {
        default: () => {
          return `Ders Almak \u0130stedi\u011Fi Yer`;
        }
      }
    )}
                                ${request.placeOwn ? `<span class="${"bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300"}">\xD6\u011Frenci evinde
                                    </span>` : ``}
                                ${request.placeTeacher ? `<span class="${"bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300"}">\xD6\u011Fretmen evinde
                                    </span>` : ``}
                                ${request.placeRemote ? `<span class="${"bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300"}">Uzaktan <span class="${"hidden md:block"}">(webcam) ile</span>
                                    </span>` : ``}</div>
                            <div class="${"mt-2"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"}"></path></svg>
                                ${validate_component(Tooltip, "Tooltip").$$render(
      $$result,
      {
        style: "custom",
        class: "text-xs bg-blue-700 border-blue-700 text-white"
      },
      {},
      {
        default: () => {
          return `Talep sahibi mesaj\u0131`;
        }
      }
    )}
                                ${escape(request.message)}
                            </div></div>
                    </div></div>
            ${request.hasOwnProperty("isSelectedTeacher") && request.isSelectedTeacher !== null ? `<div class="${"bg-[#fbfcff] border-t border-gray-100 p-6 rounded-b-lg"}"><div class="${"flex gap-4 justify-between"}">${request.isSelectedTeacher ? `<div><span class="${"flex justify-center w-full gap-2 text-green-500 items-center"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"2.5"}" stroke="${"currentColor"}" class="${"w-5 h-5"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg>
                            \xD6\u011Frenci senden ders almay\u0131 kabul etti
                        </span>
                    </div>` : `<div><span class="${"flex justify-center w-full gap-2 text-red-700 items-center"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"2.5"}" stroke="${"currentColor"}" class="${"w-5 h-5"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"}"></path></svg>
                            Maalesef \xF6\u011Frenci ba\u015Fka bir \xF6\u011Fretmen ile anla\u015Fma sa\u011Flad\u0131
                        </span>
                    </div>`}</div>
            </div>` : ``}
        </div>`;
  })}` : `<div class="${"bg-white rounded-lg shadow-md"}"><div class="${"bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold"}"><div class="${"flex gap-2 items-center"}">Ders Talepleri
                </div></div>
            <div class="${"flex flex-col gap-4 items-center p-6"}"><div><img src="${escape("https://d1ql1h7f6x0zr6.cloudfront.net/", true) + "not-found.png"}"></div>
                <div>T\xFCh! Hen\xFCz herhangi bir ders talebin bulunmuyor.
                </div></div></div>`}</div>`;
});
export {
  Page as default
};
