import { r as redirect } from "../../../../../chunks/index2.js";
import "../../../../../chunks/index.js";
const prerender = false;
const load = async ({ parent }) => {
  const { user } = await parent();
  if (!(user == null ? void 0 : user.username)) {
    throw redirect(307, "/auth/login");
  }
  return {
    user
  };
};
export {
  load,
  prerender
};
