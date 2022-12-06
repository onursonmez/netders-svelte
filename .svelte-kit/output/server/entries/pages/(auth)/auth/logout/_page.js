import "../../../../../chunks/index.js";
import { u as userStore } from "../../../../../chunks/userStore.js";
import { r as redirect } from "../../../../../chunks/index2.js";
function deleteCookie(name) {
  document.cookie = name + "=; Max-Age=-99999999;";
}
const prerender = false;
deleteCookie("token");
userStore.set(null);
console.log("logout page.js called");
async function load({ url }) {
  let redirectPath = url.searchParams.get("to") ? url.searchParams.get("to") : "/";
  throw redirect(307, redirectPath);
}
export {
  load,
  prerender
};
