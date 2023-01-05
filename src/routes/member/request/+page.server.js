import { invalid, redirect } from '@sveltejs/kit';
import * as api from '$lib/api';

export async function load({ locals }) {
    if (!locals.user) throw redirect(302, '/auth/login');

    const request = await api.get('member/request', locals.user.token)
    return { request : request.result }
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, locals, request }) => {
        if (!locals.user) throw error(401);

        const data = await request.formData();

        const formData = {
            lessonId: data.get('lessonId'),
            countyId: data.get('countyId'),
            countryId: data.get('countryId'),
            genderId: data.get('genderId'),
        };

        const body = await api.post('member/request', formData, locals.user.token);
        if (Object.entries(body.errors).length) return invalid(body.code, body);

        return body.result
    },
    save: async ({ cookies, locals, request }) => {
        if (!locals.user) throw error(401);

        const data = await request.formData();

        const formData = {
            lessonId: data.get('lessonId'),
            countyId: data.get('countyId'),
            countryId: data.get('countryId'),
            genderId: data.get('genderId'),
        };

        const body = await api.post('member/request/new', formData, locals.user.token);
        if (Object.entries(body.errors).length) return invalid(body.code, body);

        return body.result
    },
};
