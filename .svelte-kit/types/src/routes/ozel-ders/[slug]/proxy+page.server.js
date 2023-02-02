// @ts-nocheck
import * as api from '$lib/api';

/** @param {Parameters<import('./$types').PageLoad>[0]} event */
export async function load({ locals, params })
{
    const price = await api.get('price/detail/' + params.slug, locals.user?.token)
    const user = await api.get('user/detail?username=' + price.result.username, locals.user?.token)

    return {
        user : user.result,
        price : price.result,
    }
}