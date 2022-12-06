// @ts-nocheck
import { dev } from '$app/environment'

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
//export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = false;

/** @param {Parameters<import('./$types').PageLoad>[0]} event */
export async function load({ url })
{
    return {
        email: url.searchParams.get('email'),
        code: url.searchParams.get('code')
    }
}
