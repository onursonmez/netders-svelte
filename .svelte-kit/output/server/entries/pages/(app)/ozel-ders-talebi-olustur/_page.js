import { d as dev } from "../../../../chunks/environment.js";
import { u as userStore } from "../../../../chunks/userStore.js";
const csr = dev;
const prerender = true;
const load = async ({ parent }) => {
  const { user } = await parent();
  if (Object.entries(user).length > 0) {
    userStore.set(user);
  }
};
export {
  csr,
  load,
  prerender
};
