// @ts-nocheck
/** */
export const actions = {
    logout:/** @param {import('./$types').RequestEvent} event */  async ({cookies, locals}) => {
        cookies.delete('jwt', {path: '/'});
        locals.user = null;
    },
}
