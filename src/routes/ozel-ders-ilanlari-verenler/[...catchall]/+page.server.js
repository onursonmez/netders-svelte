import { getUsers, getTeacherSearchStoreParamsBySearchParams } from '/src/repository/user'

/** @type {import('./$types').PageLoad} */
export async function load({ params, url })
{
    const teacherSearchParams = await getTeacherSearchStoreParamsBySearchParams({'query': params?.catchall + '?' + url.searchParams.toString()})

    const users = await getUsers(teacherSearchParams)

    return {
        teacherSearchParams: teacherSearchParams,
        users: users
    }
}
