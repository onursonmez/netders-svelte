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
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20')];

export const server_loads = [0];

export const dictionary = {
	"/": [~3],
	"/auth/activation": [5],
	"/auth/forgot": [6],
	"/auth/login": [~7],
	"/member/about": [~8,[2]],
	"/member/account": [~9,[2]],
	"/member/location": [~10,[2]],
	"/member/preference": [~11,[2]],
	"/member/price": [~12,[2]],
	"/member/request": [~13,[2]],
	"/member/request/[uuid]": [~14,[2]],
	"/member/requirement": [~15,[2]],
	"/ogretmen-ol": [~16],
	"/ozel-ders-ilanlari-verenler/[...catchall]": [~18],
	"/ozel-ders-talebi-olustur/[...catchall]": [~19],
	"/ozel-ders/[slug]": [~17],
	"/yardim": [20],
	"/[slug]": [~4]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};