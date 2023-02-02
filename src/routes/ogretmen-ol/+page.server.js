import { invalid, redirect } from '@sveltejs/kit';
import * as api from '$lib/api';

export async function load({ locals }) {
	if (locals.user) throw redirect(307, '/');
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies, locals, request, url }) => {
		if (locals.user) throw redirect(307, '/');
		const to = url.searchParams.get('to') ? url.searchParams.get('to') : '/member/account'

		const data = await request.formData();

		const formData = {
			firstName: data.get('firstName'),
			lastName: data.get('lastName'),
			email: data.get('email'),
			phone: data.get('phone'),
			genderId: data.get('gender'),
			cityId: data.get('city'),
			countyId: data.get('county'),
			countryId: data.get('country'),
			privacyLastNameId: data.get('privacyLastName'),
			outsideTurkey: (data.get('outsideTurkey') === "true"),
			title: data.get('title'),
			about: data.get('about'),
			username: data.get('username'),
			statusId: 2,
		}

		const body = await api.post('user/new_teacher', formData, locals.user?.token);

		if (Object.entries(body.errors).length) return invalid(body.code, body);

		const value = btoa(encodeURIComponent(JSON.stringify(body.result)));

		cookies.set('jwt', value, { path: '/' });

		throw redirect(307, to);
	},
};
