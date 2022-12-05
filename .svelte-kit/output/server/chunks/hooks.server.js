import { c as getUserByToken } from "./user.js";
function handleError({ error, event }) {
  return {
    message: error == null ? void 0 : error.message,
    code: (error == null ? void 0 : error.code) ?? "UNKNOWN"
  };
}
async function handle({ event, resolve }) {
  event.locals.user = await getUserByToken(event.cookies.get("token"));
  return await resolve(event);
}
export {
  handle,
  handleError
};
