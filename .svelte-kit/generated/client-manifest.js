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
	() => import('./nodes/11')];

			export const server_loads = [0];

			export const dictionary = {
	"/": [2],
	"/(app)/auth/activation": [4],
	"/(app)/auth/forgot": [5],
	"/(app)/auth/login": [6],
	"/(app)/auth/logout": [7],
	"/(app)/ders/[slug]": [8],
	"/(app)/member/dashboard": [9],
	"/(app)/ozel-ders-ilanlari-verenler/[...catchall]": [10],
	"/(app)/ozel-ders-talebi-olustur": [11],
	"/(app)/[...catchall]": [3]
};

			export const hooks = {
				handleError: (({ error }) => { console.error(error) }),
			};