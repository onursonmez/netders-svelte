// @ts-nocheck
import { invalid, redirect } from '@sveltejs/kit';
import * as api from '$lib/api';

/** */
export const actions = {
	default:/** @param {import('./$types').RequestEvent} event */  async ({ locals, request }) => {

		const data = await request.formData();

		const formData = {
			firstName: data.get('firstName'),
			lastName: data.get('lastName'),
			email: data.get('email'),
			phone: data.get('phone'),
			message: data.get('message'),
		}

		const body = await api.post('contact/new', formData, locals.auth?.token);

		if (Object.entries(body.errors).length) return invalid(body.code, body.errors);

		return body.result
	},
};
