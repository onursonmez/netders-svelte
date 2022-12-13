// @ts-nocheck
import { dev } from '$app/environment'
import { getUsers, getTeacherSearchStoreParamsBySearchParams } from '/src/repository/user'
import {teacherItemsStore, teacherSearchParamsStore, teacherTotalStore, userStore} from '/src/stores/userStore'

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
//export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = false;

/** @param {Parameters<import('./$types').PageLoad>[0]} event */
export async function load({ params, parent, url })
{
    let teacherSearchParams

    const { user } = await parent();

    if(Object.entries(user).length > 0){
        userStore.set(user)
    }

    if(params && params.catchall)
    {
        teacherSearchParams = await getTeacherSearchStoreParamsBySearchParams({'query': params.catchall + '?' + url.searchParams.toString()})
    }

    const users = await getUsers(teacherSearchParams)

    return {
        teacherSearchParams: teacherSearchParams,
        users: users
    }
}
