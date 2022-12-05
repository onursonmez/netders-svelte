import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export const file = '_app/immutable/components/pages/_layout.svelte-9fb607ad.js';
export { server };
export const imports = ["_app/immutable/components/pages/_layout.svelte-9fb607ad.js","_app/immutable/chunks/index-5c1dbe35.js","_app/immutable/chunks/netders-logo-blue-db0f3a17.js","_app/immutable/chunks/icon-user-b12ae194.js","_app/immutable/chunks/navigation-b0659a60.js","_app/immutable/chunks/singletons-158c7876.js","_app/immutable/chunks/index-c483a1bd.js","_app/immutable/chunks/userStore-57500a02.js","_app/immutable/chunks/user-e202346c.js"];
export const stylesheets = ["_app/immutable/assets/_layout-36d438a9.css"];
