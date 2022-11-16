// @ts-nocheck
import { dev } from '$app/environment'
import { getUsers, getTeacherSearchStoreParamsBySearchParams } from '/src/repository/user'
import { getOneCityBy, getOneCountyBy } from '/src/repository/location'
import { teacherSearchParamsStore } from '/src/stores/userStore'

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

/** @param {Parameters<import('./$types').PageLoad>[0]} event */
export async function load({ params })
{
    if(params && params.catchall)
    {
        await getTeacherSearchStoreParamsBySearchParams({'query': params.catchall})

        await getUsers()
    }


}
