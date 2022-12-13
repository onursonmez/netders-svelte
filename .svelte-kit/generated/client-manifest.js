export { matchers } from './client-matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12')];

export const server_loads = [0];

export const dictionary = {
	"/": [~2],
	"/auth/activation": [4],
	"/auth/forgot": [5],
	"/auth/login": [~6],
	"/ders/[slug]": [7],
	"/member/about": [8],
	"/member/account": [~9],
	"/member/requests": [10],
	"/ozel-ders-ilanlari-verenler/[...catchall]": [11],
	"/ozel-ders-talebi-olustur": [12],
	"/[...catchall]": [3]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};