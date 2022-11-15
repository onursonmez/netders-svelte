import { d as dev } from "../../../../chunks/environment.js";
import { g as getUsers } from "../../../../chunks/user.js";
const csr = dev;
const prerender = true;
async function load({ params }) {
  if (params && params.catchall) {
    const urlParams = params.catchall.split("/");
    if (urlParams.length > 0) {
      urlParams[0];
      urlParams[1];
    }
  }
  await getUsers();
}
export {
  csr,
  load,
  prerender
};
