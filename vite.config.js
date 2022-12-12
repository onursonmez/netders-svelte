import { sveltekit } from '@sveltejs/kit/vite'
import { imagetools } from 'vite-imagetools'

const config = {
	base: process.env.VITE_TEMP_BASE_URL,
	plugins: [sveltekit(), imagetools()],
};

export default config;
