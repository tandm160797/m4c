import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig, type UserConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

const viteConfig: UserConfig = defineConfig({
	resolve: {
		alias: [
			{
				find: 'App',
				replacement: resolve(__dirname, 'src/App'),
			},

			{
				find: '@components',
				replacement: resolve(__dirname, 'src/components'),
			},
		],
	},

	plugins: [react(), svgr()],
});

export default viteConfig;
