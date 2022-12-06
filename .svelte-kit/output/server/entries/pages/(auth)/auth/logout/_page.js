import { r as redirect } from "../../../../../chunks/index2.js";
import Cookies from "js-cookie";
import { u as userStore } from "../../../../../chunks/userStore.js";
const prerender = false;
async function load({ url }) {
  Cookies.remove("token");
  userStore.set(null);
  let redirectPath = url.searchParams.get("to") ? url.searchParams.get("to") : "/";
  throw redirect(307, redirectPath);
}
export {
  load,
  prerender
};
