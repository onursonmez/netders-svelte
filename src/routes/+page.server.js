import * as api from '$lib/api';

/** @type {import('./$types').Actions} */
export const actions = {
    logout: async ({cookies, locals}) => {
        cookies.delete('jwt', {path: '/'});
        locals.user = null;
    },

    sendApprove: async ({cookies, locals}) => {
        const user = await api.get('member/user/send_approve', locals.user.token);
        locals.user = user.result
    },
}
