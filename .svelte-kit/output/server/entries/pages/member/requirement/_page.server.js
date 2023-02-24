import { r as redirect } from "../../../../chunks/index.js";
import { g as get } from "../../../../chunks/api.js";
async function load({ locals }) {
  if (!locals.auth)
    throw redirect(302, "/auth/login");
  if (locals.auth.status.id !== 2)
    throw redirect(302, "/member/account");
  const requirement = await get("member/user/teacher_requirements", locals.auth?.token);
  return {
    requirement: requirement.result
  };
}
export {
  load
};
