export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","images/turkiye-white.svg","robots.txt"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-a92a8a8b.js","imports":["_app/immutable/start-a92a8a8b.js","_app/immutable/chunks/index-95fd0b09.js","_app/immutable/chunks/singletons-5edf8516.js","_app/immutable/chunks/index-ba476fff.js","_app/immutable/chunks/control-03134885.js"],"stylesheets":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/7.js'),
			() => import('../output/server/nodes/8.js'),
			() => import('../output/server/nodes/9.js'),
			() => import('../output/server/nodes/10.js'),
			() => import('../output/server/nodes/11.js'),
			() => import('../output/server/nodes/12.js'),
			() => import('../output/server/nodes/13.js'),
			() => import('../output/server/nodes/14.js'),
			() => import('../output/server/nodes/15.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(auth)/auth",
				pattern: /^\/auth\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(auth)/auth/activation",
				pattern: /^\/auth\/activation\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(auth)/auth/login",
				pattern: /^\/auth\/login\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(auth)/auth/logout",
				pattern: /^\/auth\/logout\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,3], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/(app)/ders/[slug]",
				pattern: /^\/ders\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				optional: [false],
				page: { layouts: [0,2], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(app)/member/account",
				pattern: /^\/member\/account\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(app)/member/requests",
				pattern: /^\/member\/requests\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(app)/ozel-ders-ilanlari-verenler/[...catchall]",
				pattern: /^\/ozel-ders-ilanlari-verenler(?:\/(.*))?\/?$/,
				names: ["catchall"],
				types: [null],
				optional: [false],
				page: { layouts: [0,2], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(app)/[...catchall]",
				pattern: /^(?:\/(.*))?\/?$/,
				names: ["catchall"],
				types: [null],
				optional: [false],
				page: { layouts: [0,2], errors: [1,,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export const prerendered = new Set(["/auth/forgot","/auth/forgot/__data.json","/ozel-ders-talebi-olustur","/ozel-ders-talebi-olustur/__data.json"]);
