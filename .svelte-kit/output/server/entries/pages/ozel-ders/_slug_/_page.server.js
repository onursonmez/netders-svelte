import { g as get } from "../../../../chunks/api.js";
async function load({ locals, params }) {
  var _a, _b;
  const price = await get("price/detail/" + params.slug, (_a = locals.auth) == null ? void 0 : _a.token);
  const user = await get("user/detail?username=" + price.result.username, (_b = locals.auth) == null ? void 0 : _b.token);
  return {
    user: user.result,
    price: price.result
  };
}
export {
  load
};
