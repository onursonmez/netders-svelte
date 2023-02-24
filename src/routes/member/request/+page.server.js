import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api';

export async function load({ locals }) {
    if (!locals.auth) throw redirect(302, '/auth/login');

    const request = await api.get('member/request', locals.auth.token)
    return { request : request.result }
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, locals, request }) => {
        if (!locals.auth) throw error(401);

        const data = await request.formData();

        const formData = {
            lessonId: data.get('lessonId'),
            countyId: data.get('countyId'),
            countryId: data.get('countryId'),
            genderId: data.get('genderId'),
        };

        const body = await api.post('member/request', formData, locals.auth.token);
        if (Object.entries(body.errors).length) return fail(body.code, body);

        return body.result
    },
    save: async ({ cookies, locals, request }) => {
        if (!locals.auth) throw error(401);

        const data = await request.formData();

        const formData = {
            lessonId: data.get('lessonId'),
            countyId: data.get('countyId'),
            countryId: data.get('countryId'),
            genderId: data.get('genderId'),
        };

        const body = await api.post('member/request/new', formData, locals.auth.token);
        if (Object.entries(body.errors).length) return fail(body.code, body);

        return body.result
    },
};
