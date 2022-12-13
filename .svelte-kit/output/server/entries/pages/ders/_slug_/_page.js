import "toastify-js";
import { e as error } from "../../../../chunks/index2.js";
import { u as userStore } from "../../../../chunks/userStore.js";
async function getUserPriceDetail(slug) {
  const response = await fetch(
    "http://api.nd.io/price/detail/" + slug,
    {
      headers: {
        "Content-Type": "application/json"
      },
      method: "GET"
    }
  );
  return await response.json();
}
const prerender = false;
async function load({ params, parent }) {
  const { user } = await parent();
  if (Object.entries(user).length > 0) {
    userStore.set(user);
  }
  if (params && params.slug) {
    let response = await getUserPriceDetail(params.slug);
    if (Object.entries(response.errors).length) {
      throw error(response.code, response.errors);
    }
    return response.result;
  }
}
export {
  load,
  prerender
};
