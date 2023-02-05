
import { invalid, redirect } from '@sveltejs/kit';
import * as api from '$lib/api';

export async function load({ locals }) {
    if (!locals.auth) throw redirect(302, '/auth/login');
}

/** @type {import('./$types').Actions} */
export const actions = {
    approve: async ({locals, request}) => {
        if (!locals.auth) throw error(401);

        const data = await request.formData();

        const formData = {
            id: data.get('id'),
            photo: data.get('photo'),
            photoType: data.get('photoType'),
        };

        const body = await api.put('member/photo/approve', formData, locals.auth.token);
        if (Object.entries(body.errors).length) return invalid(body.code, body.errors);

        return body.result
    },
    decline: async ({locals, request}) => {
        if (!locals.auth) throw error(401);

        const data = await request.formData();

        const formData = {
            id: data.get('id'),
        };

        const body = await api.put('member/photo/decline', formData, locals.auth.token);
        if (Object.entries(body.errors).length) return invalid(body.code, body.errors);

        return body.result
    },
};
