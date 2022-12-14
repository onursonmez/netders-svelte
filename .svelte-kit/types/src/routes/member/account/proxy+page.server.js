// @ts-nocheck
import { invalid, redirect } from '@sveltejs/kit';
import * as api from '$lib/api';

export function load({ locals }) {
    if (!locals.user) throw redirect(302, '/auth/login');
}

/** */
export const actions = {
    save:/** @param {import('./$types').RequestEvent} event */  async ({ cookies, locals, request }) => {
        if (!locals.user) throw error(401);

        const data = await request.formData();

        const formData = {
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            phone: data.get('phone'),
            genderId: data.get('genderId'),
            cityId: data.get('cityId'),
            countyId: data.get('countyId'),
            countryId: data.get('countryId'),
        };

        const body = await api.put('member/user/update', formData, locals.user.token);
        if (Object.entries(body.errors).length) return invalid(body.code, body);

        const value = btoa(JSON.stringify(body.result));
        cookies.set('jwt', value, { path: '/' });

        locals.user = body.user;
    },

    upload:/** @param {import('./$types').RequestEvent} event */  async ({ cookies, locals, request }) => {
        if (!locals.user) throw error(401);

        const data = await request.formData();

        const formData = {
            photo: data.get('photo'),
            photoType: data.get('photoType'),
        };

        const body = await api.post('member/user/upload', formData, locals.user.token);
        if (Object.entries(body.errors).length) return invalid(body.code, body);
    }
};
