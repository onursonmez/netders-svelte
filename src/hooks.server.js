/** @type {import('@sveltejs/kit').Handle} */
export function handle({ event, resolve }) {
    const jwt = event.cookies.get('jwt');
    event.locals.user = jwt ? JSON.parse(decodeURIComponent(atob(jwt))) : null;

    return resolve(event);
}
