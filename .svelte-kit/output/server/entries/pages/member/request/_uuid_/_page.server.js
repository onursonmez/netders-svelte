import { r as redirect, f as fail } from "../../../../../chunks/index.js";
import { g as get, a as put, p as post } from "../../../../../chunks/api.js";
async function load({ locals, params }) {
  if (!locals.auth)
    throw redirect(302, "/auth/login");
  const request = await get(`member/request/${params.uuid}`, locals.auth.token);
  return {
    request: request.result
  };
}
const actions = {
  approval: async ({ cookies, locals, request }) => {
    if (!locals.auth)
      throw error(401);
    const data = await request.formData();
    const formData = {
      uuid: data.get("uuid"),
      actionMessage: data.get("actionMessage"),
      statusId: data.get("statusId")
    };
    const body = await put("member/request/update", formData, locals.auth.token);
    if (Object.entries(body.errors).length)
      return fail(body.code, body);
    return body.result;
  },
  invite: async ({ cookies, locals, request }) => {
    if (!locals.auth)
      throw error(401);
    const data = await request.formData();
    const formData = {
      requestUuid: data.get("requestUuid"),
      teacherUuid: data.get("teacherUuid")
    };
    const body = await post("member/request_invite/new", formData, locals.auth.token);
    if (Object.entries(body.errors).length)
      return fail(body.code, body);
    return body.result;
  },
  acceptable: async ({ cookies, locals, request }) => {
    if (!locals.auth)
      throw error(401);
    const data = await request.formData();
    const formData = {
      uuid: data.get("uuid"),
      actionMessage: data.get("actionMessage"),
      statusId: data.get("statusId")
    };
    const body = await put("member/request_invite/update", formData, locals.auth.token);
    if (Object.entries(body.errors).length)
      return fail(body.code, body);
    return body.result;
  },
  update: async ({ cookies, locals, request }) => {
    if (!locals.auth)
      throw error(401);
    const data = await request.formData();
    const formData = {
      uuid: data.get("uuid")
    };
    if (data.get("isPublic")) {
      formData["isPublic"] = data.get("isPublic") === "true";
    }
    if (data.get("statusId")) {
      formData["statusId"] = data.get("statusId");
    }
    const body = await put("member/request/update", formData, locals.auth.token);
    if (Object.entries(body.errors).length)
      return fail(body.code, body);
    return body.result;
  },
  showPhone: async ({ cookies, locals, request }) => {
    if (!locals.auth)
      throw error(401);
    const data = await request.formData();
    const formData = {
      uuid: data.get("uuid")
    };
    const body = await get("member/request/show_phone?" + new URLSearchParams(formData).toString(), locals.auth.token);
    if (Object.entries(body.errors).length)
      return fail(body.code, body);
    return body.result;
  },
  selectTeacher: async ({ cookies, locals, request }) => {
    if (!locals.auth)
      throw error(401);
    const data = await request.formData();
    const formData = {
      requestUuid: data.get("requestUuid"),
      teacherUuid: data.get("teacherUuid"),
      isSelected: 1
    };
    const body = await put("member/request_teacher/update", formData, locals.auth.token);
    if (Object.entries(body.errors).length)
      return fail(body.code, body);
    return body.result;
  }
};
export {
  actions,
  load
};
