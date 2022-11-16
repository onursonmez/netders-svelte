import { d as dev } from "../../../../chunks/environment.js";
import { a as getTeacherSearchStoreParamsBySearchParams, g as getUsers } from "../../../../chunks/user.js";
const csr = dev;
const prerender = true;
console.log(dev);
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
