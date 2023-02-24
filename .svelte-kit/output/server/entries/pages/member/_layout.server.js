import { r as redirect } from "../../../chunks/index.js";
import { g as get } from "../../../chunks/api.js";
async function load({ locals }) {
  if (!locals.auth)
    throw redirect(302, "/auth/login");
  let photoApprovalResponse, userApprovalResponse, approvalUser, approvalUserPrices, approvalUserLocations;
  if (locals.auth.roles.includes("ROLE_SUPER_ADMIN")) {
    photoApprovalResponse = await get("member/photo/approval", locals.auth?.token);
    userApprovalResponse = await get("member/user/approval", locals.auth?.token);
    if (userApprovalResponse.result?.uuid) {
      approvalUser = await get("user/detail?uuid=" + userApprovalResponse.result?.uuid, locals.auth?.token);
      approvalUserPrices = await get("price/" + approvalUser.result.uuid, locals.auth?.token);
      approvalUserLocations = await get("location/" + approvalUser.result.uuid, locals.auth?.token);
    }
  }
  return {
    userApproval: userApprovalResponse?.result,
    photoApproval: photoApprovalResponse?.result,
    approvalUser: approvalUser?.result,
    approvalUserPrices: approvalUserPrices?.result,
    approvalUserLocations: approvalUserLocations?.result
  };
}
export {
  load
};
