// @ts-nocheck
import { invalid, redirect } from '@sveltejs/kit';
import * as api from '$lib/api';

/** @param {Parameters<import('./$types').PageServerLoad>[0]} event */
export async function load({ locals, params }) {

	const cities = await api.get('location/cities')
	const subjects = await api.get('lesson/subjects')
	return {
		cities : cities.result,
		subjects : subjects.result
	}
}

/** */
export const actions = {
	save:/** @param {import('./$types').RequestEvent} event */  async ({ locals, request }) => {

		const data = await request.formData();

		const formData = {
			teacherId: data.get('teacherId'),
			levelId: data.get('levelId'),
			countyId: data.get('countyId'),
			countryId: data.get('countryId'),
			placeOwn: (data.get('placeOwn') === "true"),
			placeRemote: (data.get('placeRemote') === "true"),
			placeTeacher: (data.get('placeTeacher') === "true"),
			genderId: data.get('genderId'),
			firstName: data.get('firstName'),
			lastName: data.get('lastName'),
			email: data.get('email'),
			phone: data.get('phone'),
			message: data.get('message'),
			budgetSecret: (data.get('budgetSecret') === "true"),
			budget: data.get('budget'),
		}

		const body = await api.post('request/new', formData, locals.user?.token);

		if (Object.entries(body.errors).length) return invalid(body.code, body);

		return body.result
	},
};
