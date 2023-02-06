import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export const file = '_app/immutable/components/pages/_layout.svelte-4d8d4da2.js';
export { server };
export const imports = ["_app/immutable/components/pages/_layout.svelte-4d8d4da2.js","_app/immutable/chunks/index-a92439aa.js","_app/immutable/chunks/forms-c2af5638.js","_app/immutable/chunks/parse-c28c2630.js","_app/immutable/chunks/singletons-f9f2b139.js","_app/immutable/chunks/navigation-f3377072.js","_app/immutable/chunks/stores-3488ed5f.js"];
export const stylesheets = ["_app/immutable/assets/_layout-92b5810a.css","_app/immutable/assets/app-8233aab3.css"];
export const fonts = [];
