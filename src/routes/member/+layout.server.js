import { invalid, redirect } from '@sveltejs/kit';
import * as api from '$lib/api';

export async function load({ locals }) {
    if (!locals.auth) throw redirect(302, '/auth/login');

    const photo = await api.get('member/photo/approval', locals.auth?.token)
    return {
        photo : photo.result,
    }
}
