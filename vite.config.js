import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	base: 'http://localhost:5173',
	plugins: [sveltekit()],
};

export default config;
