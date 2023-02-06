import { g as get } from "../../chunks/api.js";
const actions = {
  logout: async ({ cookies, locals }) => {
    cookies.delete("jwt", { path: "/" });
    locals.auth = null;
  },
  sendApprove: async ({ cookies, locals }) => {
    const user = await get("member/user/set_approval", locals.auth.token);
    locals.auth = user.result;
  }
};
export {
  actions
};
