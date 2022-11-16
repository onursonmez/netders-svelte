import { a as getTeacherSearchStoreParamsBySearchParams, g as getUsers } from "../../../../chunks/user.js";
const csr = true;
const prerender = true;
async function load({ params }) {
  if (params && params.catchall) {
    await getTeacherSearchStoreParamsBySearchParams({ "query": params.catchall });
  }
  await getUsers();
}
export {
  csr,
  load,
  prerender
};
