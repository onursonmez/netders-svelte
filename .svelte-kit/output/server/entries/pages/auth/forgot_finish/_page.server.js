import { r as redirect, f as fail } from "../../../../chunks/index.js";
import { p as post } from "../../../../chunks/api.js";
async function load({ locals }) {
  if (locals.auth)
    throw redirect(307, "/");
}
const actions = {
  default: async ({ cookies, request, url }) => {
    const data = await request.formData();
    const body = await post("user/forgot_finish", {
      login: data.get("login"),
      code: data.get("code"),
      newPassword: data.get("newPassword"),
      newPasswordRepeat: data.get("newPasswordRepeat")
    });
    if (Object.entries(body.errors).length)
      return fail(body.code, body);
    const value = btoa(encodeURIComponent(JSON.stringify(body.result)));
    cookies.set("jwt", value, { path: "/" });
    throw redirect(307, "/");
  }
};
export {
  actions,
  load
};
