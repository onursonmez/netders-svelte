import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
    if (locals.auth) throw redirect(307, '/');
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request, url }) => {
        const data = await request.formData();

        const body = await api.post('user/forgot', {
            login: data.get('login'),
        });

        if (Object.entries(body.errors).length) return fail(body.code, body)

        throw redirect(307, '/auth/forgot_finish');
    }
};
