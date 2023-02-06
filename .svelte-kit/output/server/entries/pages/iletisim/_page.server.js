import { i as invalid } from "../../../chunks/index2.js";
import { p as post } from "../../../chunks/api.js";
const actions = {
  default: async ({ locals, request }) => {
    var _a;
    const data = await request.formData();
    const formData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      phone: data.get("phone"),
      message: data.get("message")
    };
    const body = await post("contact/new", formData, (_a = locals.auth) == null ? void 0 : _a.token);
    if (Object.entries(body.errors).length)
      return invalid(body.code, body.errors);
    return body.result;
  }
};
export {
  actions
};
