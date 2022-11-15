// @ts-nocheck
import { dev } from '$app/environment';
import { redirect } from '@sveltejs/kit';

import { getUsers } from '../../repository/user'
import { getCities } from "../../repository/location"
import { getSubjects } from "../../repository/lesson"

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export let data;

/** @param {Parameters<import('./$types').PageLoad>[0]} event */
export async function load({ params })
{
    const urlParams = params.catchall.split('/')

    if(urlParams){
        if(urlParams[0] == 'ozel-ders-ilanlari-verenler'){
        }
    }
}
