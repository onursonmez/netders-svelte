import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api';

import { getUsers } from '/src/repository/user'

/** @type {import('./$types').PageLoad} */
export async function load({ params, url, locals })
{
    if(params.slug !== undefined){
        params.slug = params.slug.substring(0, params.slug.length-1)
    }

    const routeResponse = await api.get('route/find_lesson/' + params.slug + '?' + url.searchParams.toString(), locals.auth?.token)

    const users = await getUsers(routeResponse.result)

    return {
        routeResponse: routeResponse.result,
        users: users
    }
}
