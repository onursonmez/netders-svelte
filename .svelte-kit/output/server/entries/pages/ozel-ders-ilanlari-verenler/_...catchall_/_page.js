import { a as getTeacherSearchStoreParamsBySearchParams, g as getUsers } from "../../../../chunks/user.js";
const prerender = false;
async function load({ params }) {
  if (params && params.catchall) {
    await getTeacherSearchStoreParamsBySearchParams({ "query": params.catchall });
  }
  await getUsers();
}
export {
  load,
  prerender
};
