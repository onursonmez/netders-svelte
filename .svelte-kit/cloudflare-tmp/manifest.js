export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/turkiye-white.svg","robots.txt"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-2890f04d.js","imports":["_app/immutable/start-2890f04d.js","_app/immutable/chunks/index-f9612323.js","_app/immutable/chunks/singletons-d3c06606.js","_app/immutable/chunks/index-b3592fb7.js"],"stylesheets":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js')
		],
		routes: [
			{
				id: "/ozel-ders-ilanlari-verenler/[...catchall]",
				pattern: /^\/ozel-ders-ilanlari-verenler(?:\/(.*))?\/?$/,
				names: ["catchall"],
				types: [null],
				optional: [false],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export const prerendered = new Set(["/","/detail"]);
