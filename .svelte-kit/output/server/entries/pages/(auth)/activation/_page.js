import { d as dev } from "../../../../chunks/environment.js";
import "../../../../chunks/index.js";
const csr = dev;
const prerender = false;
async function load({ url }) {
  return {
    email: url.searchParams.get("email"),
    code: url.searchParams.get("code")
  };
}
export {
  csr,
  load,
  prerender
};
