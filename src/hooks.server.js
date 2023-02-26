import * as Sentry from "@sentry/svelte";

Sentry.init({
    dsn: "https://3f156edaba034a349890b2390f0bdf6d@o4504741805162496.ingest.sentry.io/4504745511682048",
    tracesSampleRate: 1.0,
});

/** @type {import('@sveltejs/kit').HandleServerError} */
export function handleError({ error }) {
    Sentry.captureException(error);
}

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    const jwt = event.cookies.get('jwt');
    event.locals.auth = jwt ? JSON.parse(decodeURIComponent(atob(jwt))) : null;
    const response = await resolve(event);
    response.headers.set('Access-Control-Allow-Origin', '*');
    return response;
}
