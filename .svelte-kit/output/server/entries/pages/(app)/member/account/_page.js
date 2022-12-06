import { r as redirect } from "../../../../../chunks/index2.js";
import { u as userStore } from "../../../../../chunks/userStore.js";
const prerender = false;
const load = async ({ parent }) => {
  const { user } = await parent();
  if (Object.entries(user).length > 0) {
    userStore.set(user);
  } else {
    userStore.subscribe((user2) => {
      if (!(user2 == null ? void 0 : user2.username)) {
        throw redirect(307, "/auth/login");
      }
    });
  }
};
export {
  load,
  prerender
};
