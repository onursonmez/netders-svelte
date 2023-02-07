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
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25'),
	() => import('./nodes/26'),
	() => import('./nodes/27')];

export const server_loads = [0,2];

export const dictionary = {
	"/": [~3],
	"/auth/activation": [5],
	"/auth/forgot": [6],
	"/auth/login": [~7],
	"/gizlilik-ilkeleri": [8],
	"/iletisim": [~9],
	"/kullanim-kosullari": [10],
	"/member/about": [~11,[2]],
	"/member/account": [~12,[2]],
	"/member/location": [~13,[2]],
	"/member/photo-approval": [~14,[2]],
	"/member/preference": [~15,[2]],
	"/member/price": [~16,[2]],
	"/member/request": [~17,[2]],
	"/member/request/[uuid]": [~18,[2]],
	"/member/requirement": [~19,[2]],
	"/member/user-approval": [~20,[2]],
	"/mesafeli-satis-sozlesmesi": [21],
	"/nasil-calisir": [22],
	"/ogretmen-ol": [~23],
	"/ozel-ders-ilanlari-verenler/[...catchall]": [~25],
	"/ozel-ders-talebi-olustur/[...catchall]": [~26],
	"/ozel-ders-[slug]": [~24],
	"/yardim": [27],
	"/[slug]": [~4]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};