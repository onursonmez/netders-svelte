import { r as redirect, e as error, i as invalid } from "../../../../chunks/index2.js";
import { g as get, p as post, d as del } from "../../../../chunks/api.js";
async function load({ locals }) {
  if (!locals.auth)
    throw redirect(302, "/auth/login");
  const cities = await get("location/cities", locals.auth.token);
  const locations = await get("member/location", locals.auth.token);
  return {
    cities: cities.result,
    locations: locations.result
  };
}
const actions = {
  new: async ({ cookies, locals, request }) => {
    if (!locals.auth)
      throw error(401);
    const data = await request.formData();
    const formData = {
      cityId: data.get("cityId"),
      countyIds: data.get("countyIds")
    };
    if (data.get("cityId") === "undefined") {
      return invalid(400, { "errors": { "badRequest": "\u015Eehir alan\u0131 bo\u015F b\u0131rak\u0131lamaz!" } });
    }
    if (!data.get("countyIds")) {
      return invalid(400, { "errors": { "badRequest": "\u0130l\xE7e alan\u0131 bo\u015F b\u0131rak\u0131lamaz!" } });
    }
    const body = await post("member/location/new", formData, locals.auth.token);
    if (Object.entries(body.errors).length)
      return invalid(body.code, body);
    return body.result;
  },
  delete: async ({ cookies, locals, request }) => {
    if (!locals.auth)
      throw error(401);
    const data = await request.formData();
    let body = await del("member/location/delete/" + data.get("id"), locals.auth.token);
    if (Object.entries(body.errors).length)
      return invalid(body.code, body);
    return body.result;
  }
};
export {
  actions,
  load
};
