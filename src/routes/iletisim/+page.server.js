import { fail, redirect } from '@sveltejs/kit';
import * as api from '$lib/api';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ locals, request }) => {

		const data = await request.formData();

		const formData = {
			firstName: data.get('firstName'),
			lastName: data.get('lastName'),
			email: data.get('email'),
			phone: data.get('phone'),
			message: data.get('message'),
		}

		const body = await api.post('contact/new', formData, locals.auth?.token);

		if (Object.entries(body.errors).length) return fail(body.code, body.errors);

		return body.result
	},
};
