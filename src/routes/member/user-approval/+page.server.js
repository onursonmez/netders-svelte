import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api';

export async function load({ locals }) {
    if (!locals.auth) throw redirect(302, '/auth/login');
    if (!locals.auth.roles.includes('ROLE_SUPER_ADMIN')) throw redirect(302, '/member/account');
}

/** @type {import('./$types').Actions} */
export const actions = {
    approve: async ({locals, request}) => {
        if (!locals.auth) throw error(401);

        const data = await request.formData();

        const formData = {
            uuid: data.get('uuid'),
            message: data.get('message'),
        };

        const body = await api.put('member/user/approve', formData, locals.auth.token);
        if (Object.entries(body.errors).length) return fail(body.code, body.errors);

        if(body.result?.uuid){
            const approvalUser = await api.get('user/detail?uuid=' + body.result?.uuid, locals.auth?.token)
            const approvalUserPrices = await api.get('price/' + approvalUser.result.uuid, locals.auth?.token)
            const approvalUserLocations = await api.get('location/' + approvalUser.result.uuid, locals.auth?.token)
            return {
                approvalUser: approvalUser,
                approvalUserPrices: approvalUserPrices,
                approvalUserLocations: approvalUserLocations,
            }
        } else {
            throw redirect(302, '/member/account');
        }
    },
    decline: async ({locals, request}) => {
        if (!locals.auth) throw error(401);

        const data = await request.formData();

        const formData = {
            uuid: data.get('uuid'),
            message: data.get('message'),
        };

        const body = await api.put('member/user/decline', formData, locals.auth.token);
        if (Object.entries(body.errors).length) return fail(body.code, body.errors);

        if(body.result?.uuid){
            const approvalUser = await api.get('user/detail?uuid=' + body.result?.uuid, locals.auth?.token)
            const approvalUserPrices = await api.get('price/' + approvalUser.result.uuid, locals.auth?.token)
            const approvalUserLocations = await api.get('location/' + approvalUser.result.uuid, locals.auth?.token)
            return {
                approvalUser: approvalUser,
                approvalUserPrices: approvalUserPrices,
                approvalUserLocations: approvalUserLocations,
            }
        } else {
            throw redirect(302, '/member/account');
        }
    },
};
