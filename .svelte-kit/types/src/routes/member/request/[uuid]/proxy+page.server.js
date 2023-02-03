// @ts-nocheck
import { invalid, redirect } from '@sveltejs/kit';
import * as api from '$lib/api';

/** @param {Parameters<import('./$types').PageServerLoad>[0]} event */
export async function load({ locals, params }) {
    if (!locals.auth) throw redirect(302, '/auth/login');

    const request = await api.get(`member/request/${params.uuid}`, locals.auth.token)
    return {
        request : request.result
    }
}

/** */
export const actions = {
    approval:/** @param {import('./$types').RequestEvent} event */  async ({ cookies, locals, request }) => {
        if (!locals.auth) throw error(401);

        const data = await request.formData();

        const formData = {
            uuid: data.get('uuid'),
            actionMessage: data.get('actionMessage'),
            statusId: data.get('statusId'),
        };

        const body = await api.put('member/request/update', formData, locals.auth.token);
        if (Object.entries(body.errors).length) return invalid(body.code, body);

        return body.result
    },

    invite:/** @param {import('./$types').RequestEvent} event */  async ({ cookies, locals, request }) => {
        if (!locals.auth) throw error(401);

        const data = await request.formData();

        const formData = {
            requestId: data.get('requestId'),
            teacherId: data.get('teacherId'),
        };

        const body = await api.post('member/request_invite/new', formData, locals.auth.token);
        if (Object.entries(body.errors).length) return invalid(body.code, body);

        return body.result
    },

    acceptable:/** @param {import('./$types').RequestEvent} event */  async ({ cookies, locals, request }) => {
        if (!locals.auth) throw error(401);

        const data = await request.formData();

        const formData = {
            uuid: data.get('uuid'),
            actionMessage: data.get('actionMessage'),
            statusId: data.get('statusId'),
        };

        const body = await api.put('member/request_invite/update', formData, locals.auth.token);
        if (Object.entries(body.errors).length) return invalid(body.code, body);

        return body.result
    },

    update:/** @param {import('./$types').RequestEvent} event */  async ({ cookies, locals, request }) => {
        if (!locals.auth) throw error(401);

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

        const body = await api.put('member/request/update', formData, locals.auth.token);
        if (Object.entries(body.errors).length) return invalid(body.code, body);

        return body.result
    },

    showPhone:/** @param {import('./$types').RequestEvent} event */  async ({ cookies, locals, request }) => {
        if (!locals.auth) throw error(401);

        const data = await request.formData();

        const formData = {
            uuid: data.get('uuid'),
        };

        const body = await api.get('member/request/show_phone?' + (new URLSearchParams(formData).toString()), locals.auth.token);
        if (Object.entries(body.errors).length) return invalid(body.code, body);

        return body.result
    },

    selectTeacher:/** @param {import('./$types').RequestEvent} event */  async ({ cookies, locals, request }) => {
        if (!locals.auth) throw error(401);

        const data = await request.formData();

        const formData = {
            requestId: data.get('requestId'),
            teacherId: data.get('teacherId'),
            isSelected: 1,
        };

        const body = await api.put('member/request_teacher/update', formData, locals.auth.token);
        if (Object.entries(body.errors).length) return invalid(body.code, body);

        return body.result
    },
};
