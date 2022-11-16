export { matchers } from './client-matchers.js';

			export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4')];

			export const server_loads = [];

			export const dictionary = {
	"/": [2],
	"/detail": [3],
	"/ozel-ders-ilanlari-verenler/[...catchall]": [4]
};

			export const hooks = {
				handleError: (({ error }) => { console.error(error) }),
			};