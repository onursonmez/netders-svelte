import { i as invalid } from "../../../../chunks/index2.js";
import { g as get, p as post } from "../../../../chunks/api.js";
async function load({ locals, params }) {
  var _a;
  const teacher = await get("user/detail?username=" + params.catchall, (_a = locals.auth) == null ? void 0 : _a.token);
  return { teacher: teacher.result };
}
const actions = {
  save: async ({ locals, request }) => {
    var _a;
    const data = await request.formData();
    const formData = {
      teacherUuid: data.get("teacherUuid"),
      levelId: data.get("levelId"),
      countyId: data.get("countyId"),
      countryId: data.get("countryId"),
      placeOwn: data.get("placeOwn") === "true",
      placeRemote: data.get("placeRemote") === "true",
      placeTeacher: data.get("placeTeacher") === "true",
      genderId: data.get("genderId"),
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      phone: data.get("phone"),
      message: data.get("message"),
      budgetSecret: data.get("budgetSecret") === "true",
      budget: data.get("budget")
    };
    const body = await post("request/new", formData, (_a = locals.auth) == null ? void 0 : _a.token);
    if (Object.entries(body.errors).length)
      return invalid(body.code, body.errors);
    return body.result;
  }
};
export {
  actions,
  load
};
