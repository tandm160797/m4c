module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['prefer-arrow-functions'],
	extends: ['standard-with-typescript', 'prettier'],
	rules: {
		// TS
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-dynamic-delete': 'off',
		'@typescript-eslint/strict-null-checks': 'off',
		'@typescript-eslint/no-misused-promises': 'off',
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/restrict-plus-operands': 'off',
		'@typescript-eslint/prefer-nullish-coalescing': 'off',
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/restrict-template-expressions': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',

		// JS
		'default-case': 'off',
		'no-case-declarations': 'error',
		'arrow-body-style': ['error', 'as-needed'],

		// Libs
		// eslint-plugin-prefer-arrow-functions
		'prefer-arrow-functions/prefer-arrow-functions': [
			'error',
			{
				classPropertiesAllowed: false,
				disallowPrototype: false,
				returnStyle: 'unchanged',
				singleReturnOnly: false,
			},
		],
	},
};
