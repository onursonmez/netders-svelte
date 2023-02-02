// @ts-nocheck
import * as api from '$lib/api';

/** */
export const actions = {
    logout:/** @param {import('./$types').RequestEvent} event */  async ({cookies, locals}) => {
        cookies.delete('jwt', {path: '/'});
        locals.user = null;
    },

    sendApprove:/** @param {import('./$types').RequestEvent} event */  async ({cookies, locals}) => {
        const user = await api.get('member/user/send_approve', locals.user.token);
        locals.user = user.result
    },
}
