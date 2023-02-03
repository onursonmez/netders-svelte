// @ts-nocheck
import { invalid, redirect, error } from '@sveltejs/kit';
import * as api from '$lib/api';

export async function load({ locals }) {
    if (!locals.auth) throw redirect(302, '/auth/login');

    const cities = await api.get('location/cities', locals.auth.token)
    const locations = await api.get('member/location', locals.auth.token)
    return {
        cities : cities.result,
        locations: locations.result
    }
}

/** */
export const actions = {
    new:/** @param {import('./$types').RequestEvent} event */  async ({ cookies, locals, request }) => {
        if (!locals.auth) throw error(401);

        const data = await request.formData();

        const formData = {
            cityId: data.get('cityId'),
            countyIds: data.get('countyIds'),
        };

        if(data.get('cityId') === 'undefined'){
            return invalid(400, {'errors': {'badRequest': 'Şehir alanı boş bırakılamaz!'}});
        }

        if(!data.get('countyIds')){
            return invalid(400, {'errors': {'badRequest': 'İlçe alanı boş bırakılamaz!'}});
        }

        const body = await api.post('member/location/new', formData, locals.auth.token);
        if (Object.entries(body.errors).length) return invalid(body.code, body);

        return body.result
    },

    delete:/** @param {import('./$types').RequestEvent} event */  async ({ cookies, locals, request }) => {
        if (!locals.auth) throw error(401);

        const data = await request.formData();

        let body = await api.del('member/location/delete/' + data.get('id'), locals.auth.token);

        if (Object.entries(body.errors).length) return invalid(body.code, body);

        return body.result
    },
};
