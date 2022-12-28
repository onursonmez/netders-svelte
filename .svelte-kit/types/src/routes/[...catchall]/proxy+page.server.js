// @ts-nocheck
import { getUser } from '/src/repository/user'

/** @param {Parameters<import('./$types').PageLoad>[0]} event */
export async function load({ params })
{
    if(params && params.catchall)
    {
        const user = await getUser(params.catchall)
        return { user }
    }
}
