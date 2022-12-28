// @ts-nocheck
import * as api from '$lib/api.js';
import { error, redirect } from '@sveltejs/kit';

/** @param {Parameters<import('./$types').PageServerLoad>[0]} event */
export async function load({ params }) {
	return params.slug;
}

/** */
export const actions = {
	default:/** @param {import('./$types').RequestEvent} event */  async ({ locals, params, request }) => {

		const data = await request.formData();

		const formData = {
			levelId: data.get('levelId'),
			countyId: data.get('countyId'),
			countryId: data.get('countryId'),
		}

		await api.post(`request/new/${params.slug}`, formData, locals.user?.token);
	},
};
