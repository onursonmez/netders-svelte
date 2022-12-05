import { getUserByToken } from '/src/repository/user'

/** @type {import('@sveltejs/kit').HandleServerError} */
export function handleError({ error, event }) {

    console.log(event.cookies.get('token'))

    return {
        message: error.message,
        code: error.code ?? 'UNKNOWN'
    };
}

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    event.locals.user = await getUserByToken(event.cookies.get('token'));
    return await resolve(event);
}
