import { r as redirect, i as invalid } from "../../../../chunks/index2.js";
import { a as put } from "../../../../chunks/api.js";
function load({ locals }) {
  if (!locals.user)
    throw redirect(302, "/auth/login");
}
const actions = {
  save: async ({ cookies, locals, request }) => {
    if (!locals.user)
      throw error(401);
    const data = await request.formData();
    const personal = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      phone: data.get("phone"),
      genderId: data.get("genderId"),
      cityId: data.get("cityId"),
      countyId: data.get("countyId"),
      countryId: data.get("countryId")
    };
    const body = await put("member/user/update", { personal }, locals.user.token);
    if (Object.entries(body.errors).length)
      return invalid(body.code, body);
    const value = btoa(JSON.stringify(body.result));
    cookies.set("jwt", value, { path: "/" });
    locals.user = body.user;
  }
};
export {
  actions,
  load
};
