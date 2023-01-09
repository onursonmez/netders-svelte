import { invalid, redirect } from '@sveltejs/kit';
import * as api from '$lib/api';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
    if (locals.user) throw redirect(307, '/');
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request, url }) => {
        const to = url.searchParams.get('to') ? url.searchParams.get('to') : '/'
        const data = await request.formData();

        const body = await api.post('user/login', {
            login: data.get('login'),
            password: data.get('password'),
            rememberMe: data.get('rememberMe')
        });

        if (Object.entries(body.errors).length) return invalid(body.code, body)

        const value = btoa(encodeURIComponent(JSON.stringify(body.result)));

        cookies.set('jwt', value, { path: '/' });

        throw redirect(307, to);

    }
};
