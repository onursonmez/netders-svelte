/** @type {import('@sveltejs/kit').HandleServerError} */
export function handleError({ error, event }) {

    return {
        message: error.message,
        code: error.code ?? 'UNKNOWN'
    };
}
