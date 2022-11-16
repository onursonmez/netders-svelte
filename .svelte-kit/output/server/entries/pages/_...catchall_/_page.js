import { d as dev } from "../../../chunks/environment.js";
import "../../../chunks/index.js";
const csr = dev;
const prerender = false;
let data;
async function load({ params }) {
  const urlParams = params.catchall.split("/");
  if (urlParams) {
    if (urlParams[0] == "ozel-ders-ilanlari-verenler")
      ;
  }
}
export {
  csr,
  data,
  load,
  prerender
};
