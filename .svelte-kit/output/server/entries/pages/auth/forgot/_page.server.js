import { r as redirect, f as fail } from "../../../../chunks/index.js";
import { p as post } from "../../../../chunks/api.js";
async function load({ locals }) {
  if (locals.auth)
    throw redirect(307, "/");
}
const actions = {
  default: async ({ cookies, request, url }) => {
    const data = await request.formData();
    const body = await post("user/forgot", {
      login: data.get("login")
    });
    if (Object.entries(body.errors).length)
      return fail(body.code, body);
    throw redirect(307, "/auth/forgot_finish");
  }
};
export {
  actions,
  load
};
