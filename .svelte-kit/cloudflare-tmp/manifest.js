export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/turkiye-white.svg","robots.txt"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-09fb4852.js","imports":["_app/immutable/start-09fb4852.js","_app/immutable/chunks/index-fd37714b.js","_app/immutable/chunks/singletons-3bd5cfbf.js","_app/immutable/chunks/index-571ab9cb.js","_app/immutable/chunks/env-public-6aa99648.js"],"stylesheets":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export const prerendered = new Set(["/","/about","/detail","/ozel-ders-ilanlari-verenler","/u/undefined","/u/42587019","/u/02389176","/u/seyyma","/u/73091826","/u/39475612","/u/01392645","/u/matematiktutkusu","/u/kardelenarac","/u/80794356","/u/23695410","/u/98750316","/u/28405963"]);
