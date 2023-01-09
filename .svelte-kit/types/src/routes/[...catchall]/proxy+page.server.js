// @ts-nocheck
import * as api from '$lib/api';

/** @param {Parameters<import('./$types').PageLoad>[0]} event */
export async function load({ locals, params })
{
    const user = await api.get('user/detail?uuid=' + params.slug, locals.user?.token)
    return {
        user : user.result,
    }
}
