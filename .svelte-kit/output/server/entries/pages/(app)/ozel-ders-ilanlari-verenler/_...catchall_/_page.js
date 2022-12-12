import { c as getTeacherSearchStoreParamsBySearchParams, g as getUsers } from "../../../../../chunks/user.js";
import { u as userStore } from "../../../../../chunks/userStore.js";
const prerender = false;
async function load({ params, parent, url }) {
  let teacherSearchParams;
  const { user } = await parent();
  if (Object.entries(user).length > 0) {
    userStore.set(user);
  }
  if (params && params.catchall) {
    teacherSearchParams = await getTeacherSearchStoreParamsBySearchParams({ "query": params.catchall + "?" + url.searchParams.toString() });
  }
  const users = await getUsers(teacherSearchParams);
  return {
    teacherSearchParams,
    users
  };
}
export {
  load,
  prerender
};
