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
	() => import('./nodes/13')];

			export const server_loads = [0];

			export const dictionary = {
	"/(app)": [4,[2]],
	"/(auth)/activation": [10,[3]],
	"/(app)/ders/[slug]": [6,[2]],
	"/(auth)/forgot": [11,[3]],
	"/(auth)/login": [12,[3]],
	"/(auth)/logout": [13,[3]],
	"/(app)/member/dashboard": [7,[2]],
	"/(app)/ozel-ders-ilanlari-verenler/[...catchall]": [8,[2]],
	"/(app)/ozel-ders-talebi-olustur": [9,[2]],
	"/(app)/[...catchall]": [5,[2]]
};

			export const hooks = {
				handleError: (({ error }) => { console.error(error) }),
			};