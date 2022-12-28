// @ts-nocheck
import { getUsers, getTeacherSearchStoreParamsBySearchParams } from '/src/repository/user'

/** @param {Parameters<import('./$types').PageLoad>[0]} event */
export async function load({ params, url })
{
    let teacherSearchParams

    if(params && params.catchall)
    {
        teacherSearchParams = await getTeacherSearchStoreParamsBySearchParams({'query': params.catchall + '?' + url.searchParams.toString()})
    }

    const users = await getUsers(teacherSearchParams)

    console.log(users)

    return {
        teacherSearchParams: teacherSearchParams,
        users: users
    }
}
