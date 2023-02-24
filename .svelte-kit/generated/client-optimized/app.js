export { matchers } from './matchers.js';

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
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25'),
	() => import('./nodes/26'),
	() => import('./nodes/27'),
	() => import('./nodes/28'),
	() => import('./nodes/29')];

export const server_loads = [0,2];

export const dictionary = {
	"/": [3],
	"/auth/activation": [6],
	"/auth/forgot_finish": [~8],
	"/auth/forgot": [~7],
	"/auth/login": [~9],
	"/gizlilik-ilkeleri": [10],
	"/iletisim": [11],
	"/kullanim-kosullari": [12],
	"/member/about": [~13,[2]],
	"/member/account": [~14,[2]],
	"/member/location": [~15,[2]],
	"/member/photo-approval": [~16,[2]],
	"/member/preference": [~17,[2]],
	"/member/price": [~18,[2]],
	"/member/request": [~19,[2]],
	"/member/request/[uuid]": [~20,[2]],
	"/member/requirement": [~21,[2]],
	"/member/user-approval": [~22,[2]],
	"/mesafeli-satis-sozlesmesi": [23],
	"/nasil-calisir": [24],
	"/ogretmen-ol": [~25],
	"/ozel-ders-ilanlari-verenler/[...catchall]": [~27],
	"/ozel-ders-talebi-olustur/[...catchall]": [~28],
	"/ozel-ders-[slug]": [~26],
	"/[[slug]]ozel-ders": [~4],
	"/yardim": [29],
	"/[slug]": [~5]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';