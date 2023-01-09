// @ts-nocheck
import * as api from '$lib/api.js';
import { error, redirect } from '@sveltejs/kit';

/** @param {Parameters<import('./$types').PageServerLoad>[0]} event */
export async function load({ locals, params }) {
	const [{ teacher }] = await Promise.all([
		api.get(`user/one_teacher/${params.slug}`, locals.user?.token),
	]);

	return { teacher };

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
