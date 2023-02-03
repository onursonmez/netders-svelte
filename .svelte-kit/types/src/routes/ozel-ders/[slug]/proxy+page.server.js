// @ts-nocheck
import * as api from '$lib/api';

/** @param {Parameters<import('./$types').PageLoad>[0]} event */
export async function load({ locals, params })
{
    const price = await api.get('price/detail/' + params.slug, locals.auth?.token)
    const user = await api.get('user/detail?username=' + price.result.username, locals.auth?.token)

    return {
        user : user.result,
        price : price.result,
    }
}
