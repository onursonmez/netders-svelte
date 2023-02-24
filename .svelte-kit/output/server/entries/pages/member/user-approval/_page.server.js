import { r as redirect, f as fail } from "../../../../chunks/index.js";
import { a as put, g as get } from "../../../../chunks/api.js";
async function load({ locals }) {
  if (!locals.auth)
    throw redirect(302, "/auth/login");
  if (!locals.auth.roles.includes("ROLE_SUPER_ADMIN"))
    throw redirect(302, "/member/account");
}
const actions = {
  approve: async ({ locals, request }) => {
    if (!locals.auth)
      throw error(401);
    const data = await request.formData();
    const formData = {
      uuid: data.get("uuid"),
      message: data.get("message")
    };
    const body = await put("member/user/approve", formData, locals.auth.token);
    if (Object.entries(body.errors).length)
      return fail(body.code, body.errors);
    if (body.result?.uuid) {
      const approvalUser = await get("user/detail?uuid=" + body.result?.uuid, locals.auth?.token);
      const approvalUserPrices = await get("price/" + approvalUser.result.uuid, locals.auth?.token);
      const approvalUserLocations = await get("location/" + approvalUser.result.uuid, locals.auth?.token);
      return {
        approvalUser,
        approvalUserPrices,
        approvalUserLocations
      };
    } else {
      throw redirect(302, "/member/account");
    }
  },
  decline: async ({ locals, request }) => {
    if (!locals.auth)
      throw error(401);
    const data = await request.formData();
    const formData = {
      uuid: data.get("uuid"),
      message: data.get("message")
    };
    const body = await put("member/user/decline", formData, locals.auth.token);
    if (Object.entries(body.errors).length)
      return fail(body.code, body.errors);
    if (body.result?.uuid) {
      const approvalUser = await get("user/detail?uuid=" + body.result?.uuid, locals.auth?.token);
      const approvalUserPrices = await get("price/" + approvalUser.result.uuid, locals.auth?.token);
      const approvalUserLocations = await get("location/" + approvalUser.result.uuid, locals.auth?.token);
      return {
        approvalUser,
        approvalUserPrices,
        approvalUserLocations
      };
    } else {
      throw redirect(302, "/member/account");
    }
  }
};
export {
  actions,
  load
};
