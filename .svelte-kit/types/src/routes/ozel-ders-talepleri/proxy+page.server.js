// @ts-nocheck
import * as api from '$lib/api.js';
import { error, redirect } from '@sveltejs/kit';

/** @param {Parameters<import('./$types').PageServerLoad>[0]} event */
export async function load({ locals, params }) {
    const [{ requests }] = await Promise.all([
        api.get(`requests`, locals.user?.token),
    ]);

    return { article, comments };
}
