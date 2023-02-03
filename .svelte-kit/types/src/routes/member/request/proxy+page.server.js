// @ts-nocheck
import { invalid, redirect } from '@sveltejs/kit';
import * as api from '$lib/api';

export async function load({ locals }) {
    if (!locals.auth) throw redirect(302, '/auth/login');

    const request = await api.get('member/request', locals.auth.token)
    return { request : request.result }
}

/** */
export const actions = {
    default:/** @param {import('./$types').RequestEvent} event */  async ({ cookies, locals, request }) => {
        if (!locals.auth) throw error(401);

        const data = await request.formData();

        const formData = {
            lessonId: data.get('lessonId'),
            countyId: data.get('countyId'),
            countryId: data.get('countryId'),
            genderId: data.get('genderId'),
        };

        const body = await api.post('member/request', formData, locals.auth.token);
        if (Object.entries(body.errors).length) return invalid(body.code, body);

        return body.result
    },
    save:/** @param {import('./$types').RequestEvent} event */  async ({ cookies, locals, request }) => {
        if (!locals.auth) throw error(401);

        const data = await request.formData();

        const formData = {
            lessonId: data.get('lessonId'),
            countyId: data.get('countyId'),
            countryId: data.get('countryId'),
            genderId: data.get('genderId'),
        };

        const body = await api.post('member/request/new', formData, locals.auth.token);
        if (Object.entries(body.errors).length) return invalid(body.code, body);

        return body.result
    },
};
