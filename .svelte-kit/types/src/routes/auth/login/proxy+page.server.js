// @ts-nocheck
import { invalid, redirect } from '@sveltejs/kit';
import * as api from '$lib/api';

/** @param {Parameters<import('./$types').PageServerLoad>[0]} event */
export async function load({ locals }) {
    if (locals.user) throw redirect(307, '/');
}

/** */
export const actions = {
    default:/** @param {import('./$types').RequestEvent} event */  async ({ cookies, request, url }) => {
        const to = url.searchParams.get('to') ? url.searchParams.get('to') : '/'
        const data = await request.formData();

        const body = await api.post('user/login', {
            login: data.get('login'),
            password: data.get('password'),
            rememberMe: data.get('rememberMe')
        });

        if (Object.entries(body.errors).length) return invalid(body.code, body)

        const value = btoa(unescape(encodeURIComponent(JSON.stringify(body.result))));

        cookies.set('jwt', value, { path: '/' });

        throw redirect(307, to);

    }
};
