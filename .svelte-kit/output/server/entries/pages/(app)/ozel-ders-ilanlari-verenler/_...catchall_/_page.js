import { b as getTeacherSearchStoreParamsBySearchParams, g as getUsers } from "../../../../../chunks/user.js";
import { b as teacherItemsStore, a as teacherTotalStore, u as userStore } from "../../../../../chunks/userStore.js";
const prerender = false;
async function load({ params, parent }) {
  const { user } = await parent();
  if (Object.entries(user).length > 0) {
    userStore.set(user);
  }
  if (params && params.catchall) {
    await getTeacherSearchStoreParamsBySearchParams({ "query": params.catchall });
  }
  const users = await getUsers();
  teacherItemsStore.set(users.items);
  teacherTotalStore.set(users.total);
}
export {
  load,
  prerender
};
