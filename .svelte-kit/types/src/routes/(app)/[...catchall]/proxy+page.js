// @ts-nocheck
import { dev } from '$app/environment'
import { getTeacher } from '/src/repository/user'
import { error } from '@sveltejs/kit'

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = false;

/** @param {Parameters<import('./$types').PageLoad>[0]} event */
export async function load({ params })
{
    if(params && params.catchall)
    {
        let response = await getTeacher(params.catchall)

        if(Object.entries(response.errors).length){
            throw error(response.code, response.errors);
        }
    }
}
