import { r as redirect, f as fail } from "../../../../chunks/index.js";
import { g as get, p as post } from "../../../../chunks/api.js";
async function load({ locals }) {
  if (!locals.auth)
    throw redirect(302, "/auth/login");
  const request = await get("member/request", locals.auth.token);
  return { request: request.result };
}
const actions = {
  default: async ({ cookies, locals, request }) => {
    if (!locals.auth)
      throw error(401);
    const data = await request.formData();
    const formData = {
      lessonId: data.get("lessonId"),
      countyId: data.get("countyId"),
      countryId: data.get("countryId"),
      genderId: data.get("genderId")
    };
    const body = await post("member/request", formData, locals.auth.token);
    if (Object.entries(body.errors).length)
      return fail(body.code, body);
    return body.result;
  },
  save: async ({ cookies, locals, request }) => {
    if (!locals.auth)
      throw error(401);
    const data = await request.formData();
    const formData = {
      lessonId: data.get("lessonId"),
      countyId: data.get("countyId"),
      countryId: data.get("countryId"),
      genderId: data.get("genderId")
    };
    const body = await post("member/request/new", formData, locals.auth.token);
    if (Object.entries(body.errors).length)
      return fail(body.code, body);
    return body.result;
  }
};
export {
  actions,
  load
};
