import { dev } from '$app/environment'
import { getUserPriceDetail } from '/src/repository/price'
import { error } from '@sveltejs/kit';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = false;

/** @type {import('./$types').PageLoad} */
export async function load({ url })
{
    return {
        to: url.searchParams.get('to'),
    }
}
