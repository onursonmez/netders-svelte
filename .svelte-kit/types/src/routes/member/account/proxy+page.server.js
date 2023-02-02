// @ts-nocheck
import { invalid, redirect } from '@sveltejs/kit';
import * as api from '$lib/api';

export async function load({ locals }) {
    if (!locals.user) throw redirect(302, '/auth/login');

    const user = await api.get('member/user/detail?username=' + locals.user?.username, locals.user?.token)

    return {
        user : user.result,
        account: locals.user,
    }
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

        cookies.delete('jwt', {path: '/'});
        const value = btoa(JSON.stringify(body.result));
        cookies.set('jwt', value, { path: '/' });

        locals.user = body.user;

        return body.result
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

        locals.user.photoUrl = body.result
        cookies.delete('jwt', {path: '/'});
        const value = btoa(JSON.stringify(locals.user));
        cookies.set('jwt', value, { path: '/' });

        return body.result;
    },

    updatePassword:/** @param {import('./$types').RequestEvent} event */  async ({ cookies, locals, request }) => {
        if (!locals.user) throw error(401);

        const data = await request.formData();

        const formData = {
            password: data.get('password'),
            newPassword: data.get('newPassword'),
            newPasswordRepeat: data.get('newPasswordRepeat'),
        };

        const body = await api.put('member/user/update_password', formData, locals.user.token);
        if (Object.entries(body.errors).length) return invalid(body.code, body);
    },

    updateEmail:/** @param {import('./$types').RequestEvent} event */  async ({ cookies, locals, request }) => {
        if (!locals.user) throw error(401);

        const data = await request.formData();

        const formData = {
            email: data.get('email'),
            password: data.get('password'),
        };

        const body = await api.put('member/user/update_email', formData, locals.user.token);
        if (Object.entries(body.errors).length) return invalid(body.code, body);

        cookies.delete('jwt', {path: '/'});
        const value = btoa(JSON.stringify(body.result));
        cookies.set('jwt', value, { path: '/' });

        locals.user = body.user;

        return body.result
    },

    sendVerifyEmail:/** @param {import('./$types').RequestEvent} event */  async ({ cookies, locals, request }) => {
        if (!locals.user) throw error(401);

        const body = await api.get('member/user/send_verify_email', locals.user.token);
        if(body.code === 409){
            locals.user.emailVerified = true
            cookies.delete('jwt', {path: '/'});
            const value = btoa(JSON.stringify(locals.user));
            cookies.set('jwt', value, { path: '/' });
        }

        if (Object.entries(body.errors).length) return invalid(body.code, body);
    },

    verifyEmail:/** @param {import('./$types').RequestEvent} event */  async ({ cookies, locals, request }) => {
        if (!locals.user) throw error(401);

        const data = await request.formData();

        const formData = {
            email: locals.user.email,
            code: data.get('code'),
        };

        const body = await api.put('member/user/verify_email', formData, locals.user.token);

        if (Object.entries(body.errors).length) return invalid(body.code, body);

        cookies.delete('jwt', {path: '/'});
        const value = btoa(encodeURIComponent(JSON.stringify(body.result)));
        cookies.set('jwt', value, { path: '/' });

        locals.user = body.user;

        return body.result
    }
};
