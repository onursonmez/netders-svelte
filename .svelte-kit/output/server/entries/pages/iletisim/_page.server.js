import { f as fail } from "../../../chunks/index.js";
import { p as post } from "../../../chunks/api.js";
const actions = {
  default: async ({ locals, request }) => {
    const data = await request.formData();
    const formData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      phone: data.get("phone"),
      message: data.get("message")
    };
    const body = await post("contact/new", formData, locals.auth?.token);
    if (Object.entries(body.errors).length)
      return fail(body.code, body.errors);
    return body.result;
  }
};
export {
  actions
};
