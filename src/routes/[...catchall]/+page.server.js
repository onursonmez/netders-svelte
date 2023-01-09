import { getUser } from '/src/repository/user'
import {error} from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export async function load({ params })
{
    if(params && params.catchall)
    {
        const teacher = await getUser(params.catchall)
        return { teacher }
    }
}
