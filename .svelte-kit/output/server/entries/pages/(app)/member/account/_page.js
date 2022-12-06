import { r as redirect } from "../../../../../chunks/index2.js";
import { d as dev } from "../../../../../chunks/environment.js";
import { u as userStore } from "../../../../../chunks/userStore.js";
const csr = dev;
const prerender = false;
const load = async ({ parent }) => {
  const { user } = await parent();
  if (Object.entries(user).length > 0) {
    userStore.set(user);
  } else {
    userStore.subscribe((user2) => {
      if (!user2.username) {
        throw redirect(307, "/auth/login");
      }
    });
  }
};
export {
  csr,
  load,
  prerender
};
