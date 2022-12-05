import { d as dev } from "../../../../../chunks/environment.js";
import "../../../../../chunks/index.js";
import { u as userStore } from "../../../../../chunks/userStore.js";
function guard(name) {
  return () => {
    throw new Error(`Cannot call ${name}(...) on the server`);
  };
}
const goto = guard("goto");
function deleteCookie(name) {
  document.cookie = name + "=; Max-Age=-99999999;";
}
const csr = dev;
const prerender = false;
async function load({ url }) {
  userStore.set({
    email: "",
    username: "",
    firstName: "",
    lastName: "",
    phone: "",
    token: "",
    roles: []
  });
  deleteCookie("token");
  goto(url.searchParams.get("to") ?? "/");
}
export {
  csr,
  load,
  prerender
};
