import * as api from '$lib/api';

export async function load({ locals, cookies }) {

    if (locals.user){
        const body = await api.get('member/user/verify', locals.user.token);

        cookies.delete('jwt', {path: '/'});
        locals.user = null;

        if (!Object.entries(body.errors).length){
            const value = btoa(encodeURIComponent(JSON.stringify(body.result)));
            cookies.set('jwt', value, { path: '/' });
            locals.user = body.result
        }
    }

    return {
        user: locals.user
    }
}
