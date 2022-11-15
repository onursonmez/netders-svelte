import { c as create_ssr_component, f as escape } from "./index.js";
import { e as env } from "./env-public.js";
const UserHorizontal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  const truncateString = (str, num) => {
    if (str == null)
      return "";
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
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
  return `<a href="${"/u/" + escape(username, true)}" target="${"_blank"}" class="${"flex flex-col gap-2 items-center bg-white rounded-lg shadow-md md:flex-row md:w-full p-4"}"><img class="${"md:w-48 md:h-48 md:rounded-lg rounded-full h-48"}" src="${escape(env.PUBLIC_BASE_URL, true) + escape(getPhotoEmptyUserAvatar(genderName), true)}" alt="${""}">
	<div class="${"flex flex-col w-full justify-between pl-4 leading-normal"}"><h5 class="${"mb-2 text-2xl font-bold tracking-tight text-blue-700 dark:text-white md:text-left text-center"}">${escape(firstName)} ${escape(lastName)}</h5>
		<p class="${"mb-3 font-semibold text-gray-700 dark:text-gray-400 md:text-left text-center"}">${escape(title)}</p>

		<div class="${"lg:flex lg:gap-2 justify-between text-gray-500"}"><div><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 inline-block mr-1"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"}"></path></svg>
				${escape(minimumPrice)}<span class="${"text-xs"}">\u20BA</span></div>

			<div><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 inline-block mr-1"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"}"></path><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"}"></path></svg>
				${escape(cityName)}, ${escape(countyName)}</div>

			<div><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-5 h-5 inline-block mr-1"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M5.636 5.636a9 9 0 1012.728 0M12 3v9"}"></path></svg>
				${escape(isOnline ? "\xC7evrimi\xE7i" : "\xC7evrimd\u0131\u015F\u0131")}</div></div>

		<div class="${"mb-3 font-normal mt-4"}">${escape(truncateString(about, 230))}</div></div></a>`;
});
export {
  UserHorizontal as U
};
