import { r as redirect, f as fail } from "../../../../chunks/index.js";
import { g as get, a as put } from "../../../../chunks/api.js";
async function load({ locals }) {
  if (!locals.auth)
    throw redirect(302, "/auth/login");
  const user = await get("member/user/detail?username=" + locals.auth?.username, locals.auth?.token);
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
      privacyLastName: data.get("privacyLastName") === "true"
    };
    const body = await put("member/user/update_preference", formData, locals.auth.token);
    if (Object.entries(body.errors).length)
      return fail(body.code, body);
  }
};
export {
  actions,
  load
};
