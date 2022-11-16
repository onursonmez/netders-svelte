import { dev } from '$app/environment'
import { getUsers, getTeacherSearchStoreParamsBySearchParams } from '/src/repository/user'

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = false;

export const ssr = true;

/** @type {import('./$types').PageLoad} */
export async function load({ params })
{
    if(params && params.catchall)
    {
        await getTeacherSearchStoreParamsBySearchParams({'query': params.catchall})
    }

    await getUsers()
}
