import * as api from '$lib/api';

/** @type {import('./$types').Actions} */
export const actions = {
    logout: async ({cookies, locals}) => {
        cookies.delete('jwt', {path: '/'});
        locals.auth = null;
    },

    sendApprove: async ({cookies, locals}) => {
        const user = await api.get('member/user/set_approval', locals.auth.token);
        locals.auth = user.result
    },
}
