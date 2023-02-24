import { g as get } from "../../../chunks/api.js";
async function load({ locals, params }) {
  let userResult;
  const price = await get("price/detail/" + params.slug, locals.auth?.token);
  if (price.result?.username) {
    let user = await get("user/detail?username=" + price.result.username, locals.auth?.token);
    userResult = user.result;
  }
  return {
    price: price.result,
    user: userResult
  };
}
export {
  load
};
