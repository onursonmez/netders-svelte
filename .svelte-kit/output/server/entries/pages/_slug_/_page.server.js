import { g as get } from "../../../chunks/api.js";
import { e as error } from "../../../chunks/index2.js";
async function load({ locals, params }) {
  var _a, _b, _c, _d;
  const user = await get("user/detail?username=" + params.slug, (_a = locals.auth) == null ? void 0 : _a.token);
  if (user.code !== 200) {
    throw error(404);
  }
  const prices = await get("price/" + user.result.uuid, (_b = locals.auth) == null ? void 0 : _b.token);
  const locations = await get("location/" + user.result.uuid, (_c = locals.auth) == null ? void 0 : _c.token);
  const comments = await get("comment/" + user.result.uuid, (_d = locals.auth) == null ? void 0 : _d.token);
  return {
    user: user.result,
    prices: prices.result,
    locations: locations.result,
    comments: comments.result
  };
}
export {
  load
};
