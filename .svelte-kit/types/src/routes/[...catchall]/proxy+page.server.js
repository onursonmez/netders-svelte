// @ts-nocheck
import { getUser } from '/src/repository/user'
import {error} from "@sveltejs/kit";

/** @param {Parameters<import('./$types').PageLoad>[0]} event */
export async function load({ params })
{
    if(params && params.catchall)
    {
        const teacher = await getUser(params.catchall)
        return { teacher }
    }
}
