import { d as dev } from "../../../../../chunks/environment.js";
const csr = dev;
const prerender = false;
async function load({ url }) {
  return {
    to: url.searchParams.get("to") ? url.searchParams.get("to") : "/"
  };
}
export {
  csr,
  load,
  prerender
};
