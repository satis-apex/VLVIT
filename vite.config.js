import vue from '@vitejs/plugin-vue';
import path from 'path';

export default ({ command }) => ({
	base: command === 'serve' ? '' : '/build/',
	build: {
		emptyOutDir: true,
		manifest: true,
		outDir: 'public/build',
		rollupOptions: {
			input: [
				'resources/js/app.js',
				'resources/css/app.css',
				'resources/css/_custom.css',
			]
		},
	},
	plugins: [
		vue(), //use vue in vite
	],
	css: {
		postCss: {
			plugins: {
				tailwindcss: {},
				autoprefixer: {},
			},
		},
	},
	resolve: {
		alias: {
			'@': path.resolve('./resources/js'),
		},
		extensions: ['.js', '.vue', '.json'],
	},
});