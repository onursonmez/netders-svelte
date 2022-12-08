export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","images/turkiye-white.svg","robots.txt"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-9d66bf04.js","imports":["_app/immutable/start-9d66bf04.js","_app/immutable/chunks/index-90af3250.js","_app/immutable/chunks/singletons-ca9df9cf.js","_app/immutable/chunks/index-89f006b4.js","_app/immutable/chunks/control-ba37bfb4.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/13.js'),
			() => import('./nodes/14.js'),
			() => import('./nodes/15.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(auth)/auth",
				pattern: /^\/auth\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(auth)/auth/activation",
				pattern: /^\/auth\/activation\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(auth)/auth/forgot",
				pattern: /^\/auth\/forgot\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(auth)/auth/login",
				pattern: /^\/auth\/login\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(auth)/auth/logout",
				pattern: /^\/auth\/logout\/?$/,
				params: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/(app)/ders/[slug]",
				pattern: /^\/ders\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(app)/member/account",
				pattern: /^\/member\/account\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(app)/member/requests",
				pattern: /^\/member\/requests\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(app)/ozel-ders-ilanlari-verenler/[...catchall]",
				pattern: /^\/ozel-ders-ilanlari-verenler(?:\/(.*))?\/?$/,
				params: [{"name":"catchall","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,2], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(app)/ozel-ders-talebi-olustur",
				pattern: /^\/ozel-ders-talebi-olustur\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(app)/[...catchall]",
				pattern: /^(?:\/(.*))?\/?$/,
				params: [{"name":"catchall","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,2], errors: [1,,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
