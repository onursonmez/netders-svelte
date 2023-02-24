import { f as fail } from "../../../../chunks/index.js";
import { g as get, p as post } from "../../../../chunks/api.js";
async function load({ locals, params }) {
  let teacherResponse = {};
  if (params.catchall) {
    let teacher = await get("user/detail?username=" + params.catchall, locals.auth?.token);
    teacherResponse = teacher.result;
  }
  return { teacher: teacherResponse };
}
const actions = {
  save: async ({ locals, request }) => {
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
    const body = await post("request/new", formData, locals.auth?.token);
    if (Object.entries(body.errors).length)
      return fail(body.code, body.errors);
    return body.result;
  }
};
export {
  actions,
  load
};
