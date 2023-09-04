import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig, type UserConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

import { dependencies } from '../../package.json';

const renderChunks = (deps: Record<string, string>) => {
	const chunks: Record<string, any> = {};
	Object.keys(deps).forEach(key => {
		if (['react', 'react-router-dom', 'react-dom', 'zustand'].includes(key)) return;
		chunks[key] = [key];
	});
	return chunks;
};

const viteConfig: UserConfig = defineConfig({
	resolve: {
		alias: [
			{
				find: 'App',
				replacement: resolve(__dirname, 'src/App')
			},
			{
				find: 'routes',
				replacement: resolve(__dirname, 'src/routes')
			},

			{
				find: '@components',
				replacement: resolve(__dirname, 'src/components')
			}
		]
	},

	build: {
		sourcemap: false,
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ['react', 'react-router-dom', 'react-dom', 'zustand'],
					...renderChunks(dependencies)
				}
			}
		}
	},

	plugins: [react(), svgr()]
});

export default viteConfig;
