import { invalid, redirect } from '@sveltejs/kit';
import * as api from '$lib/api';

export function load({ locals }) {
    if (!locals.user) throw redirect(302, '/auth/login');
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, locals, request }) => {
        if (!locals.user) throw error(401);

        const data = await request.formData();

        const formData = {
            privacyLastName: (data.get('privacyLastName') === "true"),
        };

        const body = await api.put('member/user/update_preference', formData, locals.user.token);
        if (Object.entries(body.errors).length) return invalid(body.code, body);
    },
};
