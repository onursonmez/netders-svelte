import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export const file = '_app/immutable/components/pages/_layout.svelte-15b5d529.js';
export { server };
export const imports = ["_app/immutable/components/pages/_layout.svelte-15b5d529.js","_app/immutable/chunks/index-540aa180.js"];
export const stylesheets = ["_app/immutable/assets/app-35c11b71.css"];
