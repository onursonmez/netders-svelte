/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    const jwt = event.cookies.get('jwt');
    event.locals.user = jwt ? JSON.parse(decodeURIComponent(atob(jwt))) : null;
    return await resolve(event);
}
