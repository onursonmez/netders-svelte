import * as api from '$lib/api';

export async function load({ locals, cookies }) {

    if (locals.auth){
        const body = await api.get('member/user/verify', locals.auth.token);

        cookies.delete('jwt', {path: '/'});
        locals.auth = null;

        if (!Object.entries(body.errors).length){
            const value = btoa(encodeURIComponent(JSON.stringify(body.result)));
            cookies.set('jwt', value, { path: '/' });
            locals.auth = body.result
        }
    }

    return {
        auth: locals.auth
    }
}
