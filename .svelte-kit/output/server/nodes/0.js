import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export const file = '_app/immutable/components/pages/_layout.svelte-87de8850.js';
export { server };
export const imports = ["_app/immutable/components/pages/_layout.svelte-87de8850.js","_app/immutable/chunks/index-b886aca0.js"];
export const stylesheets = [];
export const fonts = [];
