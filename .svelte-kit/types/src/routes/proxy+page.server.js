// @ts-nocheck
import * as api from '$lib/api';

/** */
export const actions = {
    logout:/** @param {import('./$types').RequestEvent} event */  async ({cookies, locals}) => {
        cookies.delete('jwt', {path: '/'});
        locals.auth = null;
    },

    sendApprove:/** @param {import('./$types').RequestEvent} event */  async ({cookies, locals}) => {
        const user = await api.get('member/user/send_approve', locals.auth.token);
        locals.auth = user.result
    },
}
