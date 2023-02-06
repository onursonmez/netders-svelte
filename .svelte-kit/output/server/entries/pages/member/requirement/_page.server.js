import { r as redirect } from "../../../../chunks/index2.js";
import { g as get } from "../../../../chunks/api.js";
async function load({ locals }) {
  var _a;
  if (!locals.auth)
    throw redirect(302, "/auth/login");
  if (locals.auth.status.id !== 2)
    throw redirect(302, "/member/account");
  const requirement = await get("member/user/teacher_requirements", (_a = locals.auth) == null ? void 0 : _a.token);
  return {
    requirement: requirement.result
  };
}
export {
  load
};
