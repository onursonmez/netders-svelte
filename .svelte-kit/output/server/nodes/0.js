import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export const file = '_app/immutable/entry/_layout.svelte.6cbe4df3.mjs';
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/entry/_layout.svelte.6cbe4df3.mjs","_app/immutable/chunks/index.ec65748e.mjs","_app/immutable/chunks/forms.1a74e437.mjs","_app/immutable/chunks/parse.d12b0d5b.mjs","_app/immutable/chunks/singletons.83648667.mjs","_app/immutable/chunks/paths.bca5757b.mjs","_app/immutable/chunks/stores.c188bae6.mjs"];
export const stylesheets = ["_app/immutable/assets/_layout.92b5810a.css","_app/immutable/assets/app.0eb6bf83.css"];
export const fonts = [];
