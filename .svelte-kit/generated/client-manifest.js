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

			export const server_loads = [];

			export const dictionary = {
	"/(app)": [4,[2]],
	"/(auth)/activation": [9,[3]],
	"/(app)/ders/[slug]": [6,[2]],
	"/(auth)/forgot": [10,[3]],
	"/(auth)/login": [11,[3]],
	"/(app)/ozel-ders-ilanlari-verenler/[...catchall]": [7,[2]],
	"/(app)/ozel-ders-talebi-olustur": [8,[2]],
	"/(app)/[...catchall]": [5,[2]]
};

			export const hooks = {
				handleError: (({ error }) => { console.error(error) }),
			};