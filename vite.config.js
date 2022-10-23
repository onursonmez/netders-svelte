import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	base: 'http://localhost:5173',
	plugins: [sveltekit()],
	server: {
		proxy: {
			'/api': {
				target: 'http://api.nd.io',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			},
		}
	}
};

export default config;
