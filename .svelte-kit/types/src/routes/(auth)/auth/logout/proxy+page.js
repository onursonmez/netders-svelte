// @ts-nocheck
import { dev } from '$app/environment'
import { redirect } from '@sveltejs/kit'
import Cookies from 'js-cookie'
import { userStore } from '/src/stores/userStore'

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
//export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = false;

/** @param {Parameters<import('./$types').PageLoad>[0]} event */
export async function load({ url })
{
    Cookies.remove('token')
    userStore.set(null)

    let redirectPath = url.searchParams.get('to') ? url.searchParams.get('to') : '/'

    throw redirect(307, redirectPath)
}
