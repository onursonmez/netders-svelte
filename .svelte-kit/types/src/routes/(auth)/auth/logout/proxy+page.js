// @ts-nocheck
import { dev } from '$app/environment'
import { deleteCookie } from 'svelte-cookie'
import { userStore } from '/src/stores/userStore'
import { redirect } from '@sveltejs/kit'

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
//export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = false;

deleteCookie('token')
userStore.set(null)
console.log("logout page.js called")
/** @param {Parameters<import('./$types').PageLoad>[0]} event */
export async function load({ url })
{
    let redirectPath = url.searchParams.get('to') ? url.searchParams.get('to') : '/'

    throw redirect(307, redirectPath)
}
