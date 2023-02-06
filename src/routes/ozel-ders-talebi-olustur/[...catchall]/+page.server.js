import { invalid, redirect } from '@sveltejs/kit';
import * as api from '$lib/api';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals, params }) {

	let teacher

	if(params.catchall){
		teacher = await api.get('user/detail?username=' + params.catchall, locals.auth?.token)
	}

	return { teacher : teacher.result }

}

/** @type {import('./$types').Actions} */
export const actions = {
	save: async ({ locals, request }) => {

		const data = await request.formData();

		const formData = {
			teacherUuid: data.get('teacherUuid'),
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

		const body = await api.post('request/new', formData, locals.auth?.token);

		if (Object.entries(body.errors).length) return invalid(body.code, body.errors);

		return body.result
	},
};
