import { getUserByToken } from '/src/repository/user'

/** @type {import('@sveltejs/kit').HandleServerError} */
export async function handleError({ error }) {
    return {
        message: error?.message,
        code: error?.code ?? 'UNKNOWN'
    };
}

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    event.locals.user = await getUserByToken(event.cookies.get('token'));
    return await resolve(event);
}
