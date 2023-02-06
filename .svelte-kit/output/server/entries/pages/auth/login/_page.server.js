import { r as redirect, i as invalid } from "../../../../chunks/index2.js";
import { p as post } from "../../../../chunks/api.js";
async function load({ locals }) {
  if (locals.auth)
    throw redirect(307, "/");
}
const actions = {
  default: async ({ cookies, request, url }) => {
    const to = url.searchParams.get("to") ? url.searchParams.get("to") : "/";
    const data = await request.formData();
    const body = await post("user/login", {
      login: data.get("login"),
      password: data.get("password"),
      rememberMe: data.get("rememberMe")
    });
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
