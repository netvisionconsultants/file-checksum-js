import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default [
	{
		input: 'src/main.js',
		output: {
			name: 'fileChecksum',
			file: pkg.browser,
			format: 'umd'
		},
		plugins: [
			babel({
				exclude: ['node_modules/**']
			})
		]
	},
	{
		input: 'src/main.js',
		external: [],
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' }
		],
		plugins: [
			babel({
				exclude: ['node_modules/**']
			})
		]
	}
];
