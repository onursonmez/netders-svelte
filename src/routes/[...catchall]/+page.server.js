import { getUser } from '/src/repository/user'

/** @type {import('./$types').PageLoad} */
export async function load({ params })
{
    if(params && params.catchall)
    {
        const user = await getUser(params.catchall)
        return { user }
    }
}
