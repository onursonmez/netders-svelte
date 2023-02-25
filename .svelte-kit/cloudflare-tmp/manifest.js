export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","_headers","android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","favicon-16x16.png","favicon-32x32.png","favicon.ico","profile.png","profile2.jpeg","robots.txt","watermark.png","~partytown/debug/partytown-atomics.js","~partytown/debug/partytown-media.js","~partytown/debug/partytown-sandbox-sw.js","~partytown/debug/partytown-sw.js","~partytown/debug/partytown-ww-atomics.js","~partytown/debug/partytown-ww-sw.js","~partytown/debug/partytown.js","~partytown/partytown-atomics.js","~partytown/partytown-media.js","~partytown/partytown-sw.js","~partytown/partytown.js"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon",".jpeg":"image/jpeg",".txt":"text/plain",".js":"application/javascript"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.d727920c.mjs","imports":["_app/immutable/entry/start.d727920c.mjs","_app/immutable/chunks/index.ec65748e.mjs","_app/immutable/chunks/singletons.83648667.mjs","_app/immutable/chunks/paths.bca5757b.mjs","_app/immutable/chunks/parse.d12b0d5b.mjs"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.52edcc9e.mjs","imports":["_app/immutable/entry/app.52edcc9e.mjs","_app/immutable/chunks/index.ec65748e.mjs"],"stylesheets":[],"fonts":[]}},
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
			() => import('../output/server/nodes/15.js'),
			() => import('../output/server/nodes/16.js'),
			() => import('../output/server/nodes/17.js'),
			() => import('../output/server/nodes/18.js'),
			() => import('../output/server/nodes/19.js'),
			() => import('../output/server/nodes/20.js'),
			() => import('../output/server/nodes/21.js'),
			() => import('../output/server/nodes/22.js'),
			() => import('../output/server/nodes/23.js'),
			() => import('../output/server/nodes/24.js'),
			() => import('../output/server/nodes/25.js'),
			() => import('../output/server/nodes/26.js'),
			() => import('../output/server/nodes/27.js'),
			() => import('../output/server/nodes/28.js'),
			() => import('../output/server/nodes/29.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/auth/activation",
				pattern: /^\/auth\/activation\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/auth/forgot_finish",
				pattern: /^\/auth\/forgot_finish\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/auth/forgot",
				pattern: /^\/auth\/forgot\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/auth/login",
				pattern: /^\/auth\/login\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "/gizlilik-ilkeleri",
				pattern: /^\/gizlilik-ilkeleri\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			},
			{
				id: "/iletisim",
				pattern: /^\/iletisim\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 11 },
				endpoint: null
			},
			{
				id: "/kullanim-kosullari",
				pattern: /^\/kullanim-kosullari\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 12 },
				endpoint: null
			},
			{
				id: "/member/about",
				pattern: /^\/member\/about\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/member/account",
				pattern: /^\/member\/account\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/member/location",
				pattern: /^\/member\/location\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/member/photo-approval",
				pattern: /^\/member\/photo-approval\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/member/preference",
				pattern: /^\/member\/preference\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/member/price",
				pattern: /^\/member\/price\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/member/request",
				pattern: /^\/member\/request\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/member/request/[uuid]",
				pattern: /^\/member\/request\/([^/]+?)\/?$/,
				params: [{"name":"uuid","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/member/requirement",
				pattern: /^\/member\/requirement\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/member/user-approval",
				pattern: /^\/member\/user-approval\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/mesafeli-satis-sozlesmesi",
				pattern: /^\/mesafeli-satis-sozlesmesi\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 23 },
				endpoint: null
			},
			{
				id: "/nasil-calisir",
				pattern: /^\/nasil-calisir\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 24 },
				endpoint: null
			},
			{
				id: "/ogretmen-ol",
				pattern: /^\/ogretmen-ol\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 25 },
				endpoint: null
			},
			{
				id: "/ozel-ders-ilanlari-verenler/[...catchall]",
				pattern: /^\/ozel-ders-ilanlari-verenler(?:\/(.*))?\/?$/,
				params: [{"name":"catchall","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0], errors: [1], leaf: 27 },
				endpoint: null
			},
			{
				id: "/ozel-ders-talebi-olustur/[...catchall]",
				pattern: /^\/ozel-ders-talebi-olustur(?:\/(.*))?\/?$/,
				params: [{"name":"catchall","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0], errors: [1], leaf: 28 },
				endpoint: null
			},
			{
				id: "/ozel-ders-[slug]",
				pattern: /^\/ozel-ders-([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 26 },
				endpoint: null
			},
			{
				id: "/[[slug]]ozel-ders",
				pattern: /^\/([^/]*)?ozel-ders\/?$/,
				params: [{"name":"slug","optional":true,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/yardim",
				pattern: /^\/yardim\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 29 },
				endpoint: null
			},
			{
				id: "/[slug]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export const prerendered = new Set([]);
