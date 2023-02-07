import * as api from '$lib/api';

/** @type {import('./$types').PageLoad} */
export async function load({ locals, params })
{
    let userResult

    const price = await api.get('price/detail/' + params.slug, locals.auth?.token)

    if(price.result?.username){
        let user = await api.get('user/detail?username=' + price.result.username, locals.auth?.token)
        userResult = user.result
    }

    return {
        price : price.result,
        user : userResult,
    }
}
