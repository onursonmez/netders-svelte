import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	base: process.env.VITE_TEMP_BASE_URL,
	plugins: [sveltekit()],
};

export default config;
