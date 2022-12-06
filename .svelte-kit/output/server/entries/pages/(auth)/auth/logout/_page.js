import { d as dev } from "../../../../../chunks/environment.js";
import "../../../../../chunks/index.js";
import { u as userStore, c as userModel } from "../../../../../chunks/userStore.js";
function deleteCookie(name) {
  document.cookie = name + "=; Max-Age=-99999999;";
}
const csr = dev;
const prerender = false;
async function load({ url }) {
  userStore.set(userModel);
  deleteCookie("token");
  let redirectPath = url.searchParams.get("to") ? url.searchParams.get("to") : "/";
  return {
    to: redirectPath
  };
}
export {
  csr,
  load,
  prerender
};
