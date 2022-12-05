import { d as dev } from "../../../../../chunks/environment.js";
import { e as error } from "../../../../../chunks/index2.js";
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
const csr = dev;
const prerender = false;
async function load({ params }) {
  if (params && params.slug) {
    let response = await getUserPriceDetail(params.slug);
    if (Object.entries(response.errors).length) {
      throw error(response.code, response.errors);
    }
    return response.result;
  }
}
export {
  csr,
  load,
  prerender
};
