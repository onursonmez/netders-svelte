import { invalid, redirect } from '@sveltejs/kit';
import * as api from '$lib/api';

export async function load({ locals }) {
    if (!locals.auth) throw redirect(302, '/auth/login');

    const user = await api.get('member/user/detail?username=' + locals.auth?.username, locals.auth?.token)

    return {
        user : user.result,
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    save: async ({ cookies, locals, request }) => {
        if (!locals.auth) throw error(401);

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

        const body = await api.put('member/user/update', formData, locals.auth.token);
        if (Object.entries(body.errors).length) return invalid(body.code, body);

        cookies.delete('jwt', {path: '/'});
        const value = btoa(JSON.stringify(body.result));
        cookies.set('jwt', value, { path: '/' });

        locals.auth = body.user;

        return body.result
    },

    upload: async ({ cookies, locals, request }) => {
        if (!locals.auth) throw error(401);

        const data = await request.formData();

        const formData = {
            photo: data.get('photo'),
            photoType: data.get('photoType'),
        };

        const body = await api.post('member/photo/upload', formData, locals.auth.token);
        if (Object.entries(body.errors).length) return invalid(body.code, body);

        locals.auth.photo.url = body.result

        return body.result;
    },

    updatePassword: async ({ cookies, locals, request }) => {
        if (!locals.auth) throw error(401);

        const data = await request.formData();

        const formData = {
            password: data.get('password'),
            newPassword: data.get('newPassword'),
            newPasswordRepeat: data.get('newPasswordRepeat'),
        };

        const body = await api.put('member/user/update_password', formData, locals.auth.token);
        if (Object.entries(body.errors).length) return invalid(body.code, body);
    },

    updateEmail: async ({ cookies, locals, request }) => {
        if (!locals.auth) throw error(401);

        const data = await request.formData();

        const formData = {
            email: data.get('email'),
            password: data.get('password'),
        };

        const body = await api.put('member/user/update_email', formData, locals.auth.token);
        if (Object.entries(body.errors).length) return invalid(body.code, body);

        cookies.delete('jwt', {path: '/'});
        const value = btoa(JSON.stringify(body.result));
        cookies.set('jwt', value, { path: '/' });

        locals.auth = body.user;

        return body.result
    },

    sendVerifyEmail: async ({ cookies, locals, request }) => {
        if (!locals.auth) throw error(401);

        const body = await api.get('member/user/send_verify_email', locals.auth.token);
        if(body.code === 409){
            locals.auth.emailVerified = true
            cookies.delete('jwt', {path: '/'});
            const value = btoa(JSON.stringify(locals.auth));
            cookies.set('jwt', value, { path: '/' });
        }

        if (Object.entries(body.errors).length) return invalid(body.code, body);
    },

    verifyEmail: async ({ cookies, locals, request }) => {
        if (!locals.auth) throw error(401);

        const data = await request.formData();

        const formData = {
            email: locals.auth.email,
            code: data.get('code'),
        };

        const body = await api.put('member/user/verify_email', formData, locals.auth.token);

        if (Object.entries(body.errors).length) return invalid(body.code, body);

        cookies.delete('jwt', {path: '/'});
        const value = btoa(encodeURIComponent(JSON.stringify(body.result)));
        cookies.set('jwt', value, { path: '/' });

        locals.auth = body.user;

        return body.result
    },

    cancel: async ({ cookies, locals, request }) => {
        if (!locals.auth) throw error(401);

        const data = await request.formData();

        const formData = {
            password: data.get('password'),
            reason: data.get('reason'),
        };

        const body = await api.put('member/user/cancel', formData, locals.auth.token);
        if (Object.entries(body.errors).length) return invalid(body.code, body);

        cookies.delete('jwt', {path: '/'});
        throw redirect(302, '/auth/login');
    },
};
