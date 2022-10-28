export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/turkiye-white.svg","robots.txt"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-15add132.js","imports":["_app/immutable/start-15add132.js","_app/immutable/chunks/index-a4e868a2.js","_app/immutable/chunks/singletons-a0a837ea.js"],"stylesheets":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export const prerendered = new Set(["/","/about","/detail","/search"]);
