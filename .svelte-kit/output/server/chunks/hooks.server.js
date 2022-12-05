import { c as getUserByToken } from "./user.js";
function handleError({ error, event }) {
  console.log(event.cookies.get("token"));
  return {
    message: error.message,
    code: error.code ?? "UNKNOWN"
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
