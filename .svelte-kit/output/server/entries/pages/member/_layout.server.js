import { r as redirect } from "../../../chunks/index2.js";
import { g as get } from "../../../chunks/api.js";
async function load({ locals }) {
  var _a, _b, _c, _d, _e, _f, _g;
  if (!locals.auth)
    throw redirect(302, "/auth/login");
  let photoApprovalResponse, userApprovalResponse, approvalUser, approvalUserPrices, approvalUserLocations;
  if (locals.auth.roles.includes("ROLE_SUPER_ADMIN")) {
    photoApprovalResponse = await get("member/photo/approval", (_a = locals.auth) == null ? void 0 : _a.token);
    userApprovalResponse = await get("member/user/approval", (_b = locals.auth) == null ? void 0 : _b.token);
    if ((_c = userApprovalResponse.result) == null ? void 0 : _c.uuid) {
      approvalUser = await get("user/detail?uuid=" + ((_d = userApprovalResponse.result) == null ? void 0 : _d.uuid), (_e = locals.auth) == null ? void 0 : _e.token);
      approvalUserPrices = await get("price/" + approvalUser.result.uuid, (_f = locals.auth) == null ? void 0 : _f.token);
      approvalUserLocations = await get("location/" + approvalUser.result.uuid, (_g = locals.auth) == null ? void 0 : _g.token);
    }
  }
  return {
    userApproval: userApprovalResponse == null ? void 0 : userApprovalResponse.result,
    photoApproval: photoApprovalResponse == null ? void 0 : photoApprovalResponse.result,
    approvalUser: approvalUser == null ? void 0 : approvalUser.result,
    approvalUserPrices: approvalUserPrices == null ? void 0 : approvalUserPrices.result,
    approvalUserLocations: approvalUserLocations == null ? void 0 : approvalUserLocations.result
  };
}
export {
  load
};
