import { e as error } from "./index2.js";
const base = "http://api.nd.io";
async function send({ method, path, data, token }) {
  const opts = { method, headers: {} };
  if (data) {
    opts.headers["Content-Type"] = "application/json";
    opts.body = JSON.stringify(data);
  }
  if (token) {
    opts.headers["X-AUTH-TOKEN"] = token;
  }
  const res = await fetch(`${base}/${path}`, opts);
  if (res.ok || res.status < 500) {
    return await res.json();
  }
  throw error(res.status);
}
function post(path, data, token) {
  return send({ method: "POST", path, data, token });
}
function put(path, data, token) {
  return send({ method: "PUT", path, data, token });
}
export {
  put as a,
  post as p
};
