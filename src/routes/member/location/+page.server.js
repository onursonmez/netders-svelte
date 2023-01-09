import { invalid, redirect, error } from '@sveltejs/kit';
import * as api from '$lib/api';

export async function load({ locals }) {
    if (!locals.user) throw redirect(302, '/auth/login');

    const cities = await api.get('location/cities', locals.user.token)
    const locations = await api.get('member/location', locals.user.token)
    return {
        cities : cities.result,
        locations: locations.result
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    new: async ({ cookies, locals, request }) => {
        if (!locals.user) throw error(401);

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

        const body = await api.post('member/location/new', formData, locals.user.token);
        if (Object.entries(body.errors).length) return invalid(body.code, body);

        return body.result
    },

    delete: async ({ cookies, locals, request }) => {
        if (!locals.user) throw error(401);

        const data = await request.formData();

        let body = await api.del('member/location/delete/' + data.get('id'), locals.user.token);

        if (Object.entries(body.errors).length) return invalid(body.code, body);

        return body.result
    },
};
