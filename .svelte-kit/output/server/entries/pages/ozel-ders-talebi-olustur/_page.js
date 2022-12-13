import { u as userStore } from "../../../chunks/userStore.js";
const prerender = false;
const load = async ({ parent }) => {
  const { user } = await parent();
  if (Object.entries(user).length > 0) {
    userStore.set(user);
  }
};
export {
  load,
  prerender
};
