import { r as redirect, f as fail } from "../../../../chunks/index.js";
import { a as put } from "../../../../chunks/api.js";
async function load({ locals }) {
  if (!locals.auth)
    throw redirect(302, "/auth/login");
}
const actions = {
  approve: async ({ locals, request }) => {
    if (!locals.auth)
      throw error(401);
    const data = await request.formData();
    const formData = {
      id: data.get("id"),
      photo: data.get("photo"),
      photoType: data.get("photoType")
    };
    const body = await put("member/photo/approve", formData, locals.auth.token);
    if (Object.entries(body.errors).length)
      return fail(body.code, body.errors);
    return body.result;
  },
  decline: async ({ locals, request }) => {
    if (!locals.auth)
      throw error(401);
    const data = await request.formData();
    const formData = {
      id: data.get("id")
    };
    const body = await put("member/photo/decline", formData, locals.auth.token);
    if (Object.entries(body.errors).length)
      return fail(body.code, body.errors);
    return body.result;
  }
};
export {
  actions,
  load
};
