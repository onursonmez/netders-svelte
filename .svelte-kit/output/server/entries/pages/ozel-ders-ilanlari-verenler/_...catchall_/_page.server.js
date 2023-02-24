import { r as redirect } from "../../../../chunks/index.js";
async function load({ params, url }) {
  let uri = "/";
  if (params.catchall) {
    uri = uri + params.catchall.replace("/", "-") + "-ozel-ders";
  } else {
    uri = uri + "ozel-ders";
  }
  if (url.searchParams.toString()) {
    uri = uri + "?" + url.searchParams.toString();
  }
  throw redirect(301, uri);
}
export {
  load
};
