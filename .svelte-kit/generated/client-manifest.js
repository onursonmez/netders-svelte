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
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15')];

			export const server_loads = [0];

			export const dictionary = {
	"/": [4],
	"/(auth)/auth": [11,[3]],
	"/(auth)/auth/activation": [12,[3]],
	"/(auth)/auth/forgot": [13,[3]],
	"/(auth)/auth/login": [14,[3]],
	"/(auth)/auth/logout": [15,[3]],
	"/(app)/ders/[slug]": [6,[2]],
	"/(app)/member/account": [7,[2]],
	"/(app)/member/requests": [8,[2]],
	"/(app)/ozel-ders-ilanlari-verenler/[...catchall]": [9,[2]],
	"/(app)/ozel-ders-talebi-olustur": [10,[2]],
	"/(app)/[...catchall]": [5,[2]]
};

			export const hooks = {
				handleError: (({ error }) => { console.error(error) }),
			};