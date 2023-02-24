import { sveltekit } from '@sveltejs/kit/vite'
import { imagetools } from 'vite-imagetools'
import { partytownVite } from '@builder.io/partytown/utils'
import { join } from 'path'

const config = {
	base: process.env.VITE_TEMP_BASE_URL,
	plugins: [
		sveltekit(),
		imagetools(),
		partytownVite({
			dest: join(process.cwd(), 'static', '~partytown')
		})
	],
};

export default config;
