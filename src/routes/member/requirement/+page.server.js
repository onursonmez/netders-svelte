import { redirect } from '@sveltejs/kit';
import * as api from '$lib/api';

export async function load({ locals }) {
    if (!locals.auth) throw redirect(302, '/auth/login');
    if (locals.auth.status.id !== 2) throw redirect(302, '/member/account');

    const requirement = await api.get('member/user/teacher_requirements', locals.auth?.token)
    return {
        requirement : requirement.result,
    }
}
