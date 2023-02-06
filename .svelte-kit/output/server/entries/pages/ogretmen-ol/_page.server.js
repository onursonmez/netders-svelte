import { r as redirect, i as invalid } from "../../../chunks/index2.js";
import { p as post } from "../../../chunks/api.js";
async function load({ locals }) {
  if (locals.auth)
    throw redirect(307, "/");
}
const actions = {
  default: async ({ cookies, locals, request, url }) => {
    var _a;
    if (locals.auth)
      throw redirect(307, "/");
    const to = url.searchParams.get("to") ? url.searchParams.get("to") : "/member/account";
    const data = await request.formData();
    const formData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      phone: data.get("phone"),
      genderId: data.get("gender"),
      cityId: data.get("city"),
      countyId: data.get("county"),
      countryId: data.get("country"),
      privacyLastNameId: data.get("privacyLastName"),
      outsideTurkey: data.get("outsideTurkey") === "true",
      title: data.get("title"),
      about: data.get("about"),
      username: data.get("username"),
      statusId: 2
    };
    const body = await post("user/new_teacher", formData, (_a = locals.auth) == null ? void 0 : _a.token);
    if (Object.entries(body.errors).length)
      return invalid(body.code, body);
    const value = btoa(encodeURIComponent(JSON.stringify(body.result)));
    cookies.set("jwt", value, { path: "/" });
    throw redirect(307, to);
  }
};
export {
  actions,
  load
};
