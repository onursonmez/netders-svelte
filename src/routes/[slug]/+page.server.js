import * as api from '$lib/api';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ locals, params })
{
    const user = await api.get('user/detail?username=' + params.slug, locals.auth?.token)
    if(user.code !== 200){
        throw error(404);
    }
    const prices = await api.get('price/' + user.result.uuid, locals.auth?.token)
    const locations = await api.get('location/' + user.result.uuid, locals.auth?.token)
    const comments = await api.get('comment/' + user.result.uuid, locals.auth?.token)
    return {
        user : user.result,
        prices : prices.result,
        locations : locations.result,
        comments : comments.result,
    }
}
