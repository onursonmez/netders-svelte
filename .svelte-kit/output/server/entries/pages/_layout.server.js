import { g as get } from "../../chunks/api.js";
async function load({ locals, cookies }) {
  if (locals.auth) {
    const body = await get("member/user/verify", locals.auth.token);
    cookies.delete("jwt", { path: "/" });
    locals.auth = null;
    if (!Object.entries(body.errors).length) {
      const value = btoa(encodeURIComponent(JSON.stringify(body.result)));
      cookies.set("jwt", value, { path: "/" });
      locals.auth = body.result;
    }
  }
  return {
    auth: locals.auth
  };
}
export {
  load
};
