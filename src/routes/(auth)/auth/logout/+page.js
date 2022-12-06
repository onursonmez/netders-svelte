import { dev } from '$app/environment'
import { deleteCookie } from 'svelte-cookie'
import { userStore } from '/src/stores/userStore'
import { goto } from '$app/navigation'

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = false;

/** @type {import('./$types').PageLoad} */
export async function load({ url })
{
    userStore.set({
        email: '',
        username: '',
        firstName: '',
        lastName: '',
        phone: '',
        token: '',
        roles: []
    })

    deleteCookie('token')

    goto(url.searchParams.get('to') ?? '/')
}
