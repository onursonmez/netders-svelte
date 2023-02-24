import "../../../chunks/index.js";
import { g as get } from "../../../chunks/api.js";
import { g as getUsers } from "../../../chunks/user.js";
async function load({ params, url, locals }) {
  if (params.slug !== void 0) {
    params.slug = params.slug.substring(0, params.slug.length - 1);
  }
  const routeResponse = await get("route/find_lesson/" + params.slug + "?" + url.searchParams.toString(), locals.auth?.token);
  const users = await getUsers(routeResponse.result);
  return {
    routeResponse: routeResponse.result,
    users
  };
}
export {
  load
};
