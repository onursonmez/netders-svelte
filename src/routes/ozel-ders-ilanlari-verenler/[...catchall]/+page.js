import { dev } from '$app/environment'
import { getUsers } from '/src/repository/user'
import { teacherSearchParamsStore } from '/src/stores/userStore'

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

/** @type {import('./$types').PageLoad} */
export async function load({ params })
{
    let location
    let lesson

    if(params && params.catchall)
    {
        const urlParams = params.catchall.split('/')
        if(urlParams.length > 0)
        {
            //TODO store'a at, getUsers() store verilerinden calissin
            location = urlParams[0]
            lesson = urlParams[1]
        }
    }

    await getUsers()
}
