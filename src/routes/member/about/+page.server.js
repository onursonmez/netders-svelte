import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api';

export async function load({ locals }) {
    if (!locals.auth) throw redirect(302, '/auth/login');

    const user = await api.get('member/user/detail?username=' + locals.auth?.username, locals.auth?.token)
    return {
        user : user.result,
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, locals, request }) => {
        if (!locals.auth) throw error(401);

        const data = await request.formData();

        const formData = {
            title: data.get('title'),
            about: data.get('about'),
        };

        const body = await api.put('member/user/update_about', formData, locals.auth.token);
        if (Object.entries(body.errors).length) return fail(body.code, body);

        const user = await api.get('member/user/verify', locals.auth.token);
        locals.auth = user.result
    },
};
