import { d as dev } from "../../../../../chunks/environment.js";
import { b as getTeacherSearchStoreParamsBySearchParams, g as getUsers } from "../../../../../chunks/user.js";
import { b as teacherItemsStore, a as teacherTotalStore } from "../../../../../chunks/userStore.js";
const csr = dev;
const prerender = false;
async function load({ params }) {
  if (params && params.catchall) {
    await getTeacherSearchStoreParamsBySearchParams({ "query": params.catchall });
  }
  const users = await getUsers();
  teacherItemsStore.set(users.items);
  teacherTotalStore.set(users.total);
}
export {
  csr,
  load,
  prerender
};
