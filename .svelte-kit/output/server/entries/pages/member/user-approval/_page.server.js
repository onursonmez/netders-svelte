import { r as redirect, i as invalid } from "../../../../chunks/index2.js";
import { a as put, g as get } from "../../../../chunks/api.js";
async function load({ locals }) {
  if (!locals.auth)
    throw redirect(302, "/auth/login");
  if (!locals.auth.roles.includes("ROLE_SUPER_ADMIN"))
    throw redirect(302, "/member/account");
}
const actions = {
  approve: async ({ locals, request }) => {
    var _a, _b, _c, _d, _e;
    if (!locals.auth)
      throw error(401);
    const data = await request.formData();
    const formData = {
      uuid: data.get("uuid"),
      message: data.get("message")
    };
    const body = await put("member/user/approve", formData, locals.auth.token);
    if (Object.entries(body.errors).length)
      return invalid(body.code, body.errors);
    if ((_a = body.result) == null ? void 0 : _a.uuid) {
      const approvalUser = await get("user/detail?uuid=" + ((_b = body.result) == null ? void 0 : _b.uuid), (_c = locals.auth) == null ? void 0 : _c.token);
      const approvalUserPrices = await get("price/" + approvalUser.result.uuid, (_d = locals.auth) == null ? void 0 : _d.token);
      const approvalUserLocations = await get("location/" + approvalUser.result.uuid, (_e = locals.auth) == null ? void 0 : _e.token);
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
    var _a, _b, _c, _d, _e;
    if (!locals.auth)
      throw error(401);
    const data = await request.formData();
    const formData = {
      uuid: data.get("uuid"),
      message: data.get("message")
    };
    const body = await put("member/user/decline", formData, locals.auth.token);
    if (Object.entries(body.errors).length)
      return invalid(body.code, body.errors);
    if ((_a = body.result) == null ? void 0 : _a.uuid) {
      const approvalUser = await get("user/detail?uuid=" + ((_b = body.result) == null ? void 0 : _b.uuid), (_c = locals.auth) == null ? void 0 : _c.token);
      const approvalUserPrices = await get("price/" + approvalUser.result.uuid, (_d = locals.auth) == null ? void 0 : _d.token);
      const approvalUserLocations = await get("location/" + approvalUser.result.uuid, (_e = locals.auth) == null ? void 0 : _e.token);
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
