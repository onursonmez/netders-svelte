// @ts-nocheck
import { invalid, redirect } from '@sveltejs/kit';
import * as api from '$lib/api';

export async function load({ locals }) {
    if (!locals.user) throw redirect(302, '/auth/login');

    const user = await api.get('member/user/detail?username=' + locals.user?.username, locals.user?.token)
    return {
        user : user.result,
    }
}

/** */
export const actions = {
    default:/** @param {import('./$types').RequestEvent} event */  async ({ cookies, locals, request }) => {
        if (!locals.user) throw error(401);

        const data = await request.formData();

        const formData = {
            title: data.get('title'),
            about: data.get('about'),
        };

        const body = await api.put('member/user/update_about', formData, locals.user.token);
        if (Object.entries(body.errors).length) return invalid(body.code, body);
    },
};
