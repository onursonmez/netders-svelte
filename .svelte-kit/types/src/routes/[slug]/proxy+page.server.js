// @ts-nocheck
import * as api from '$lib/api';
import { error } from '@sveltejs/kit';

/** @param {Parameters<import('./$types').PageLoad>[0]} event */
export async function load({ locals, params })
{
    const user = await api.get('user/detail?username=' + params.slug, locals.auth?.token)
    if(user.code !== 200){
        throw error(404);
    }
    const prices = await api.get('price/' + user.result.id, locals.auth?.token)
    const locations = await api.get('location/' + user.result.id, locals.auth?.token)
    const comments = await api.get('comment/' + user.result.id, locals.auth?.token)
    return {
        user : user.result,
        prices : prices.result,
        locations : locations.result,
        comments : comments.result,
    }
}
