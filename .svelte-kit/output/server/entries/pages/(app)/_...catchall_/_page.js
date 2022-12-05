import { d as dev } from "../../../../chunks/environment.js";
import { a as getTeacher } from "../../../../chunks/user.js";
import { e as error } from "../../../../chunks/index2.js";
const csr = dev;
const prerender = false;
async function load({ params }) {
  if (params && params.catchall) {
    let response = await getTeacher(params.catchall);
    if (Object.entries(response.errors).length) {
      throw error(response.code, response.errors);
    }
  }
}
export {
  csr,
  load,
  prerender
};
