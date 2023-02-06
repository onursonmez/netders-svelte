import { c as create_ssr_component, b as subscribe, h as add_attribute, e as escape, v as validate_component, f as each } from "../../../../../chunks/index.js";
/* empty css                                                         */import { p as page } from "../../../../../chunks/stores.js";
import "classnames";
/* empty css                                                             */import { T as Tooltip } from "../../../../../chunks/Tooltip.js";
import { t as toast } from "../../../../../chunks/toast.js";
import "../../../../../chunks/dayJsStore.js";
import { s as searchParamsModel } from "../../../../../chunks/searchModel.js";
import { g as getUsers } from "../../../../../chunks/user.js";
import "devalue";
import dayjs from "dayjs";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var _a, _b, _c, _d, _e;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let { form } = $$props;
  let request = data.request;
  let eligibleTeachersData = searchParamsModel;
  let eligibleTeachers = [];
  let tableDiv, requestDetailDiv, loading;
  const onSearch = async () => {
    loading = true;
    eligibleTeachersData.page = 1;
    eligibleTeachersData.subjectObject = request.subject;
    eligibleTeachersData.levelObject = request.level;
    eligibleTeachersData.genderObject = request.gender;
    eligibleTeachersData.field = "loginAt";
    const users = await getUsers(eligibleTeachersData);
    eligibleTeachers.items = [...users.items];
    eligibleTeachers.total = users.total;
    loading = false;
  };
  onSearch();
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  {
    if (form == null ? void 0 : form.errors) {
      Object.entries(form == null ? void 0 : form.errors).forEach((i) => {
        toast(i[1], "warning");
      });
    }
  }
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-lsqq2t_START -->${$$result.title = `<title>Hesab\u0131m \u2022 Ders Talebi Detay\u0131</title>`, ""}<!-- HEAD_svelte-lsqq2t_END -->`, ""}

${``}

<div class="${"w-full flex flex-col gap-4"}"><div class="${"grow bg-white rounded-lg shadow-md"}"${add_attribute("this", requestDetailDiv, 0)}><div class="${"bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold"}">Talep Detay\u0131</div>

        <div class="${"p-6"}"><div class="${"lg:flex lg:flex-row gap-6"}"><div class="${"basis-3/12 xl:basis-2/12 hidden lg:block"}"><img src="${escape("https://d1ql1h7f6x0zr6.cloudfront.net/", true) + escape(request.subject.imageUrl, true)}"${add_attribute("alt", request.subject.title, 0)}></div>
                <div class="${"basis-9/12 xl:basis-10/12"}"><h1 class="${"text-lg font-semibold leading-none mb-2"}">${escape(request.subject.title)} \u2192 ${escape(request.level.title)}</h1>
                    <div class="${"mt-2"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"}"></path></svg>
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
                        ${escape(request.status.title)}</div>
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
                        ${((_a = request.county) == null ? void 0 : _a.title) ? `${escape(request.county.title)}, ${escape(request.city.title)}` : `${escape(request.country.title)}`}</div>
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
                        ${((_b = request.gender) == null ? void 0 : _b.title) ? `${escape(request.gender.title)} \xF6\u011Fretmen` : `Kad\u0131n veya Erkek \xF6\u011Fretmen`}</div>
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
                        ${request.placeRemote ? `<span class="${"bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300"}">Uzaktan <span class="${"hidden md:block"}">(webcam) ile</span></span>` : ``}</div>
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
                        ${escape(request.message)}</div></div></div></div>

        ${request.canUpdate || request.canShowPhone || request.isSelectedTeacher !== null ? `<div class="${"bg-[#fbfcff] border-t border-gray-100 p-6 rounded-b-lg"}"><div class="${"flex gap-4 justify-between"}">${request.canUpdate ? `<form method="${"POST"}" action="${"?/update"}">${request.isPublic ? `<div><button name="${"isPublic"}" value="${"false"}" class="${"flex justify-center w-full gap-2 bg-red-700 hover:bg-red-900 text-white items-center p-2 px-4 rounded-full"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"}"></path></svg>
                                Talebi Herkese Kapat
                            </button></div>` : `<div><button name="${"isPublic"}" value="${"true"}" class="${"flex justify-center w-full gap-2 bg-blue-700 hover:bg-blue-900 text-white items-center p-2 px-4 rounded-full"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"}"></path><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}"></path></svg>
                                Talebi Herkese A\xE7
                            </button></div>`}

                        <input type="${"hidden"}" name="${"uuid"}"${add_attribute("value", request.uuid, 0)}></form>` : ``}

                ${request.canUpdate && request.status.id === 6 ? `<form method="${"POST"}" action="${"?/update"}"><div><button name="${"statusId"}" value="${"2"}" class="${"flex justify-center w-full gap-2 bg-blue-700 hover:bg-blue-900 text-white items-center p-2 px-4 rounded-full"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"}"></path><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}"></path></svg>
                                Talebi Tekrar Aktif Et
                            </button></div>

                        <input type="${"hidden"}" name="${"uuid"}"${add_attribute("value", request.uuid, 0)}></form>` : ``}

                ${request.isSelectedTeacher !== null ? `${request.isSelectedTeacher ? `<div class="${"mt-2"}"><span class="${"flex justify-center w-full gap-2 text-green-500 items-center"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"2.5"}" stroke="${"currentColor"}" class="${"w-5 h-5"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg>
                            \xD6\u011Frenci senden ders almay\u0131 kabul etti
                        </span></div>` : `<div><span class="${"flex justify-center w-full gap-2 text-red-700 items-center"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"2.5"}" stroke="${"currentColor"}" class="${"w-5 h-5"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"}"></path></svg>
                            Maalesef \xF6\u011Frenci ba\u015Fka bir \xF6\u011Fretmen ile anla\u015Fma sa\u011Flad\u0131
                        </span></div>`}` : ``}

                ${request.canShowPhone ? `<form method="${"POST"}" action="${"?/showPhone"}"><div><button class="${"flex justify-center w-full gap-2 bg-blue-700 hover:bg-blue-900 text-white items-center p-2 px-4 rounded-full"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"}"></path></svg>
                                Bilgileri G\xF6r\xFCnt\xFCle
                            </button></div>
                        <input type="${"hidden"}" name="${"uuid"}"${add_attribute("value", request.uuid, 0)}></form>` : ``}</div></div>` : ``}</div>

    ${![6].includes(request.status.id) && ($page.data.auth.roles.includes("ROLE_SUPER_ADMIN") || $page.data.auth.roles.includes("ROLE_MANAGER")) ? `<form method="${"POST"}" action="${"?/approval"}"><div class="${"grow bg-white rounded-lg shadow-md"}"><div class="${"bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold"}">Talep \u0130\u015Flemleri</div>
            <div class="${"flex flex-col gap-4 p-6"}"><div><textarea name="${"actionMessage"}" class="${"p-2 px-4 border-gray-200 rounded-lg w-full"}" placeholder="${"Buraya ger\xE7ekle\u015Ftirdi\u011Fin i\u015Flemle ilgili daha sonra hat\u0131rlaman gereken bilgileri yaz"}"></textarea></div>

                <div class="${"flex justify-between"}"><div><button name="${"statusId"}" value="${"6"}" class="${"flex justify-center w-full gap-2 bg-red-700 hover:bg-red-900 text-white items-center p-2 px-4 rounded-full"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg>
                            Talebi \u0130ptal Et
                        </button></div>

                    ${request.status.id === 1 ? `<div><button name="${"statusId"}" value="${"2"}" class="${"flex justify-center w-full gap-2 bg-blue-700 hover:bg-blue-900 text-white items-center p-2 px-4 rounded-full"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg>
                            Talebi Onayla
                        </button></div>` : ``}

                    ${request.status.id !== 1 ? `<div><button name="${"statusId"}" value="${"15"}" class="${"flex justify-center w-full gap-2 bg-blue-700 hover:bg-blue-900 text-white items-center p-2 px-4 rounded-full"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"}"></path></svg>
                            Not Ekle
                        </button></div>` : ``}</div></div></div>
        <input type="${"hidden"}" name="${"uuid"}"${add_attribute("value", request.uuid, 0)}></form>` : ``}



    ${![1, 6].includes(request.status.id) && $page.data.auth.roles.includes("ROLE_TEACHER") && request.showAcceptable ? `<form method="${"POST"}" action="${"?/acceptable"}"><div class="${"grow bg-white rounded-lg shadow-md"}"><div class="${"bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold"}">Ders Vermeyi Kabul Et</div>

        <div class="${"flex flex-col gap-4 p-6"}"><div class="${"text-sm"}">Bu ders talebiyle ilgileniyorsan, \xF6\u011Frenciye iletmek istedi\u011Fin mesaj\u0131n\u0131 yaz ve <strong>Ders Vermeyi Kabul Et</strong> tu\u015Funa bas. E\u011Fer taleple ilgilenmiyorsan herhangi bir i\u015Flem yapmana gerek yok.
            </div>
            <div><textarea name="${"actionMessage"}" class="${"p-2 px-4 border-gray-200 rounded-lg w-full"}" placeholder="${"Buraya, verece\u011Fin ders ile ilgili \xF6\u011Frencide ilgi uyand\u0131racak bir mesaj yaz"}"></textarea></div>

            <div class="${"flex justify-end"}"><div><button name="${"statusId"}" value="${"1"}" class="${"flex justify-center w-full gap-2 bg-blue-700 hover:bg-blue-900 text-white items-center p-2 px-4 rounded-full"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg>
                        Ders Vermeyi Kabul Et
                    </button></div></div></div></div>
        <input type="${"hidden"}" name="${"uuid"}"${add_attribute("value", request.uuid, 0)}></form>` : ``}



    ${request.isRequestOwner || ($page.data.auth.roles.includes("ROLE_SUPER_ADMIN") || $page.data.auth.roles.includes("ROLE_MANAGER")) ? `<div class="${"grow bg-white rounded-lg shadow-md"}"><div class="${"bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold"}">Ders Vermeyi Kabul Eden \xD6\u011Fretmenler</div>
        <div class="${"flex flex-col gap-6 p-6"}">${((_c = request.requestTeachers) == null ? void 0 : _c.length) > 0 ? `${each(request.requestTeachers, (requestTeacher) => {
    return `<div><div class="${"bg-white p-6 rounded-t-lg border-t border-l border-r border-gray-100 text-sm"}"><div class="${"lg:flex lg:flex-row gap-6"}"><div class="${"basis-1/12 hidden lg:block"}"><img${add_attribute("src", requestTeacher.photoUrl || "https://d1ql1h7f6x0zr6.cloudfront.net/icon-user.png", 0)} class="${"rounded-full"}" alt="${""}"></div>
                            <div class="${"basis-11/12"}"><a href="${"/" + escape(requestTeacher.username, true)}" target="${"_blank"}"><h1 class="${"text-lg font-semibold text-blue-700 leading-none mb-2"}">${escape(requestTeacher.firstName)} ${escape(requestTeacher.lastName)}</h1></a>
                                ${requestTeacher.title ? `<p class="${"font-semibold"}">${escape(requestTeacher.title)}</p>` : ``}

                                <div class="${"mt-4"}"><span class="${"font-semibold mb-1 block"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-4 h-4 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"}"></path></svg>
                                        \xD6\u011Fretmenin mesaj\u0131
                                    </span>
                                    ${requestTeacher.message ? `<p>${escape(requestTeacher.message)}</p>` : `<p class="${"italic text-gray-400"}">\xD6\u011Fretmen mesaj iletmemi\u015Ftir.</p>`}
                                </div></div>
                        </div></div>

                    ${requestTeacher.isSelected ? `<div class="${"flex justify-between items-center p-4 border border-gray-100 rounded-b-lg text-sm"}"><div class="${"flex justify-start w-full gap-2 text-gray-700 items-center"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"2.5"}" stroke="${"currentColor"}" class="${"w-5 h-5"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg>
                                \xD6\u011Fretmen Se\xE7ildi
                            </div>
                        </div>` : `${request.status.id === 4 && !($page.data.auth.roles.includes("ROLE_SUPER_ADMIN") || $page.data.auth.roles.includes("ROLE_MANAGER")) ? `<div class="${"p-4 border border-gray-100 rounded-b-lg text-sm flex gap-2 text-gray-400"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg>
                                \xD6\u011Fretmen Se\xE7ilmedi
                            </div>` : `<form method="${"POST"}" action="${"?/selectTeacher"}"><div class="${"p-4 border border-gray-100 rounded-b-lg text-sm"}"><button name="${"teacherUuid"}"${add_attribute("value", requestTeacher.uuid, 0)} class="${"flex gap-2 bg-blue-700 hover:bg-blue-900 text-white items-center p-2 px-4 rounded-full"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg>
                                    \xD6\u011Fretmeni Se\xE7
                                </button></div>
                            <input type="${"hidden"}" name="${"requestUuid"}"${add_attribute("value", request.uuid, 0)}>
                        </form>`}`}
                </div>`;
  })}` : `Hen\xFCz ders vermeyi kabul eden \xF6\u011Fretmen yok`}</div></div>



    <div class="${"grow bg-white rounded-lg shadow-md"}"><div class="${"bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold"}">Ders Vermeye Davet Edilen \xD6\u011Fretmenler</div>
        <div class="${"flex flex-col gap-6 p-6"}">${((_d = request.requestInvites) == null ? void 0 : _d.length) > 0 ? `${each(request.requestInvites, (requestTeacher) => {
    return `<div><div class="${"bg-white p-6 rounded-lg border border-gray-100 text-sm"}"><div class="${"lg:flex lg:flex-row gap-6"}"><div class="${"basis-1/12 hidden lg:block"}"><img${add_attribute("src", requestTeacher.photoUrl || "https://d1ql1h7f6x0zr6.cloudfront.net/icon-user.png", 0)} class="${"rounded-full"}" alt="${""}"></div>
                                <div class="${"basis-11/12"}"><a href="${"/" + escape(requestTeacher.username, true)}" target="${"_blank"}"><h1 class="${"text-lg font-semibold text-blue-700 leading-none mb-2"}">${escape(requestTeacher.firstName)} ${escape(requestTeacher.lastName)}</h1></a>
                                    ${requestTeacher.title ? `<p class="${"font-semibold"}">${escape(requestTeacher.title)}</p>` : ``}</div>
                            </div></div>
                    </div>`;
  })}` : `Talebe davet edilen \xF6\u011Fretmen bulunmamaktad\u0131r`}</div></div>




    <div class="${"grow bg-white rounded-lg shadow-md"}"><div class="${"bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold"}">Talebe Uygun \xD6\u011Fretmenler</div>
        <div class="${"flex flex-col gap-6 p-6"}">${(eligibleTeachers == null ? void 0 : eligibleTeachers.total) > 0 ? `<form autocomplete="${"off"}"><label for="${"default-search"}" class="${"mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"}">Arama</label>
                    <div class="${"relative"}"><div class="${"flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"}"><svg aria-hidden="${"true"}" class="${"w-5 h-5 text-gray-500 dark:text-gray-400"}" fill="${"none"}" stroke="${"currentColor"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}"></path></svg></div>
                        <input name="${"keyword"}" type="${"text"}" id="${"default-search"}" class="${"block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 shadow-md rounded-lg border-0"}" placeholder="${"Anahtar kelimeye g\xF6re sonu\xE7lar\u0131 filtrele..."}"${add_attribute("value", eligibleTeachersData.keyword, 0)}>

                        ${loading ? `<div role="${"status"}" class="${"absolute right-2.5 bottom-2.5"}"><svg aria-hidden="${"true"}" class="${"mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"}" viewBox="${"0 0 100 101"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"}" fill="${"currentColor"}"></path><path d="${"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"}" fill="${"currentFill"}"></path></svg>
                                <span class="${"sr-only"}">Loading...</span></div>` : `<button type="${"submit"}" class="${"text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2"}">ARA</button>`}</div></form>

                <p>Talebe uygun <strong>${escape(eligibleTeachers.total ?? 0)}</strong> \xF6\u011Fretmen bulundu</p>
                ${each(eligibleTeachers.items, (eligibleTeacher) => {
    return `<div class="${"lg:flex lg:flex-row gap-2 bg-white p-6 rounded-lg shadow-md"}"><div class="${"lg:basis-3/12 xl:basis-2/12"}"><a href="${"/" + escape(eligibleTeacher.username, true)}" target="${"_blank"}" rel="${"noreferrer"}"><img class="${"rounded-full mx-auto"}"${add_attribute("src", "https://d1ql1h7f6x0zr6.cloudfront.net/" + eligibleTeacher.photoUrl, 0)} alt="${""}">
                            </a></div>

                        <div class="${"lg:basis-9/12 xl:basis-10/12"}"><a href="${"/" + escape(eligibleTeacher.username, true)}" target="${"_blank"}" rel="${"noreferrer"}"><h1 class="${"mb-1 text-xl font-bold text-blue-700 tracking-tight leading-none xl:text-2xl"}">${escape(eligibleTeacher.firstName)} ${escape(eligibleTeacher.lastName)}</h1></a>
                            <p class="${"mb-2 font-semibold text-gray-800 lg:text-base xl:text-lg dark:text-gray-400"}">${escape(eligibleTeacher.title)}</p>

                            ${eligibleTeacher.isTeachPhysically ? `<span class="${"bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}" class="${"mr-1 w-3 h-3"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"}"></path></svg>
                                    Y\xFCz y\xFCze ders veriyor
                                </span>` : ``}

                            ${eligibleTeacher.isTeachRemotely ? `<span class="${"bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-300"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"mr-1 w-3 h-3"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"}"></path></svg>
                                    Uzaktan, webcam ile ders veriyor
                                </span>` : ``}

                            ${eligibleTeacher.minimumPrice || eligibleTeacher.totalComment || eligibleTeacher.countryName || eligibleTeacher.countyName ? `<div class="${"lg:flex lg:flex-row lg:justify-between mb-2 text-gray-500 text-sm mt-2"}">${eligibleTeacher.minimumPrice ? `<p class="${"flex"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 mr-1"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"}"></path></svg>
                                            <span>${escape(eligibleTeacher.minimumPrice)}<span class="${"text-xs"}">\u20BA</span></span>
                                        </p>` : ``}

                                    <p class="${"flex"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 mr-1"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"}"></path></svg>
                                        ${escape(eligibleTeacher.totalComment)} yorum
                                    </p>

                                    ${eligibleTeacher.countyName || eligibleTeacher.countryName ? `<p class="${"flex"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 mr-1"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"}"></path><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"}"></path></svg>
                                            ${eligibleTeacher.countyName || eligibleTeacher.countryName ? `${escape(eligibleTeacher.countyName)}, ${escape(eligibleTeacher.cityName)}` : `${escape(eligibleTeacher.countryName)}`}
                                        </p>` : ``}
                                </div>` : ``}

                            <p class="${"text-sm text-justify leading-relaxed mt-2"}">${escape(eligibleTeacher.about ? eligibleTeacher.about.substring(0, 200) + "..." : "")}</p>
                            <form method="${"POST"}" action="${"?/invite"}"><button class="${"mt-2 bg-blue-700 hover:bg-blue-900 py-2 px-4 rounded-full justify-center text-sm flex text-white"}">Davet G\xF6nder
                                </button>
                                <input type="${"hidden"}" name="${"teacherUuid"}"${add_attribute("value", eligibleTeacher.uuid, 0)}>
                                <input type="${"hidden"}" name="${"requestUuid"}"${add_attribute("value", request.uuid, 0)}>
                            </form></div>
                    </div>`;
  })}

                ${eligibleTeachers.total > 0 && !loading ? `${`<div class="${"pt-4 text-sm text-center"}"><button class="${"text-white bg-blue-700 hover:bg-blue-800 focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 mr-1 inline-block"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}"></path></svg>
                                Daha fazla \xF6\u011Fretmen
                            </button></div>`}` : ``}` : `Talebe uygun \xF6\u011Fretmen bulunamad\u0131.`}</div></div>






    ${((_e = request.requestActions) == null ? void 0 : _e.length) > 0 && ($page.data.auth.roles.includes("ROLE_SUPER_ADMIN") || $page.data.auth.roles.includes("ROLE_MANAGER")) ? `<div class="${"grow bg-white rounded-lg shadow-md"}"><div class="${"bg-[#fbfcff] border-b border-gray-100 p-6 rounded-t-lg text-lg font-semibold"}">\u0130\u015Flem Ge\xE7mi\u015Fi</div>

            <div class="${"flex flex-auto overflow-x-auto hidden rounded-b-lg"}"${add_attribute("this", tableDiv, 0)}><table class="${"table-auto overflow-x-scroll w-full divide-y divide-gray-100"}"><thead class="${"bg-gray-50"}"><tr><th scope="${"col"}" class="${"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700"}">TAR\u0130H</th>
                        <th scope="${"col"}" class="${"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700"}">\u0130\u015ELEM SAH\u0130B\u0130</th>
                        <th scope="${"col"}" class="${"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700"}">AKS\u0130YON</th>
                        <th scope="${"col"}" class="${"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700"}">A\xC7IKLAMA</th></tr></thead>
                    <tbody class="${"bg-white divide-y divide-gray-100 text-xs"}">${each(request.requestActions, (requestAction) => {
    return `<tr class="${"hover:bg-gray-50"}"><td class="${"py-4 px-6 text-gray-500 whitespace-nowrap"}">${escape(dayjs(new Date(requestAction.createdAt.date)).fromNow())}</td>
                            <td class="${"py-4 px-6 text-gray-900 whitespace-nowrap"}">${escape(requestAction.firstName)} ${escape(requestAction.lastName)}</td>
                            <td class="${"py-4 px-6 text-gray-900 whitespace-nowrap"}">${escape(requestAction.statusText)}</td>
                            <td class="${"py-4 px-6 text-gray-500 whitespace-nowrap"}">${escape(requestAction.message ?? "")}</td>
                        </tr>`;
  })}</tbody></table></div></div>` : ``}` : ``}</div>`;
});
export {
  Page as default
};
