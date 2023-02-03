// @ts-nocheck
import { invalid, redirect } from '@sveltejs/kit';
import * as api from '$lib/api';

export async function load({ locals }) {
    if (!locals.auth) throw redirect(302, '/auth/login');

    const user = await api.get('member/user/detail?username=' + locals.auth?.username, locals.auth?.token)
    return {
        user : user.result,
    }
}

/** */
export const actions = {
    default:/** @param {import('./$types').RequestEvent} event */  async ({ cookies, locals, request }) => {
        if (!locals.auth) throw error(401);

        const data = await request.formData();

        const formData = {
            privacyLastName: (data.get('privacyLastName') === "true"),
        };

        const body = await api.put('member/user/update_preference', formData, locals.auth.token);
        if (Object.entries(body.errors).length) return invalid(body.code, body);
    },
};
