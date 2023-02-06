async function handle({ event, resolve }) {
  const jwt = event.cookies.get("jwt");
  event.locals.auth = jwt ? JSON.parse(decodeURIComponent(atob(jwt))) : null;
  return await resolve(event);
}
export {
  handle
};
