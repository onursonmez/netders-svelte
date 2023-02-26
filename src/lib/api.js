import * as Sentry from "@sentry/svelte";
import { error } from '@sveltejs/kit';

Sentry.init({
	dsn: "https://3f156edaba034a349890b2390f0bdf6d@o4504741805162496.ingest.sentry.io/4504745511682048",
	tracesSampleRate: 1.0,
});

const base = import.meta.env.VITE_API_URL;

async function send({ method, path, data, token }) {
	const opts = { method, headers: {} };

	if (data) {
		opts.headers['Content-Type'] = 'application/json';
		opts.body = JSON.stringify(data);
	}

	if (token) {
		opts.headers['X-AUTH-TOKEN'] = token;
	}

	const res = await fetch(`${base}/${path}`, opts);
	if (res.ok || res.status < 500) {
		let response = await res.json();

		if(Object.entries(response.errors).length){
			Sentry.captureException(response);
		}

		return response
	}

	throw error(res.status);
}

export function get(path, token) {
	return send({ method: 'GET', path, token });
}

export function del(path, token) {
	return send({ method: 'DELETE', path, token });
}

export function post(path, data, token) {
	return send({ method: 'POST', path, data, token });
}

export function put(path, data, token) {
	return send({ method: 'PUT', path, data, token });
}
