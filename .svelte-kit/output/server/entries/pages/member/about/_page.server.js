import { r as redirect, i as invalid } from "../../../../chunks/index2.js";
import { g as get, a as put } from "../../../../chunks/api.js";
async function load({ locals }) {
  var _a, _b;
  if (!locals.auth)
    throw redirect(302, "/auth/login");
  const user = await get("member/user/detail?username=" + ((_a = locals.auth) == null ? void 0 : _a.username), (_b = locals.auth) == null ? void 0 : _b.token);
  return {
    user: user.result
  };
}
const actions = {
  default: async ({ cookies, locals, request }) => {
    if (!locals.auth)
      throw error(401);
    const data = await request.formData();
    const formData = {
      title: data.get("title"),
      about: data.get("about")
    };
    const body = await put("member/user/update_about", formData, locals.auth.token);
    if (Object.entries(body.errors).length)
      return invalid(body.code, body);
    const user = await get("member/user/verify", locals.auth.token);
    locals.auth = user.result;
  }
};
export {
  actions,
  load
};
