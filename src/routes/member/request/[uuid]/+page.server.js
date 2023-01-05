import { invalid, redirect } from '@sveltejs/kit';
import * as api from '$lib/api';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, params }) {
    if (!locals.user) throw redirect(302, '/auth/login');

    const request = await api.get(`member/request/${params.uuid}`, locals.user.token)
    return {
        request : request.result
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    approval: async ({ cookies, locals, request }) => {
        if (!locals.user) throw error(401);

        const data = await request.formData();

        const formData = {
            uuid: data.get('uuid'),
            actionMessage: data.get('actionMessage'),
            statusId: data.get('statusId'),
        };

        const body = await api.put('member/request/update', formData, locals.user.token);
        if (Object.entries(body.errors).length) return invalid(body.code, body);

        return body.result
    },

    invite: async ({ cookies, locals, request }) => {
        if (!locals.user) throw error(401);

        const data = await request.formData();

        const formData = {
            requestId: data.get('requestId'),
            teacherId: data.get('teacherId'),
        };

        const body = await api.post('member/request_invite/new', formData, locals.user.token);
        if (Object.entries(body.errors).length) return invalid(body.code, body);

        return body.result
    },

    acceptable: async ({ cookies, locals, request }) => {
        if (!locals.user) throw error(401);

        const data = await request.formData();

        const formData = {
            uuid: data.get('uuid'),
            actionMessage: data.get('actionMessage'),
            statusId: data.get('statusId'),
        };

        const body = await api.put('member/request_invite/update', formData, locals.user.token);
        if (Object.entries(body.errors).length) return invalid(body.code, body);

        return body.result
    },

    update: async ({ cookies, locals, request }) => {
        if (!locals.user) throw error(401);

        const data = await request.formData();

        const formData = {
            uuid: data.get('uuid'),
        };

        if(data.get('isPublic')){
            formData['isPublic'] = (data.get('isPublic') === "true");
        }

        if(data.get('statusId')){
            formData['statusId'] = data.get('statusId');
        }

        const body = await api.put('member/request/update', formData, locals.user.token);
        if (Object.entries(body.errors).length) return invalid(body.code, body);

        return body.result
    },

    showPhone: async ({ cookies, locals, request }) => {
        if (!locals.user) throw error(401);

        const data = await request.formData();

        const formData = {
            uuid: data.get('uuid'),
        };

        const body = await api.get('member/request/show_phone?' + (new URLSearchParams(formData).toString()), locals.user.token);
        if (Object.entries(body.errors).length) return invalid(body.code, body);

        return body.result
    },

    selectTeacher: async ({ cookies, locals, request }) => {
        if (!locals.user) throw error(401);

        const data = await request.formData();

        const formData = {
            requestId: data.get('requestId'),
            teacherId: data.get('teacherId'),
            isSelected: 1,
        };

        const body = await api.put('member/request_teacher/update', formData, locals.user.token);
        if (Object.entries(body.errors).length) return invalid(body.code, body);

        return body.result
    },
};
