module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'next',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'react'],
	settings: {
		'import/parsers': {
			[require.resolve('@typescript-eslint/parser')]: [
				'.js',
				'.ts',
				'.tsx',
				'.d.ts',
			],
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
			},
		},
	},
	rules: {
		'prettier/prettier': [
			'error',
			{
				printWidth: 80,
				useTabs: true,
				tabWidth: 2,
				singleQuote: true,
				semi: true,
				trailingComma: 'all',
				arrowParens: 'always',
				endOfLine: 'auto',
			},
		],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'@typescript-eslint/no-explicit-any': 'off',
		'react/react-in-jsx-scope': 'off',
		'no-useless-constructor': 'off',
		"react/prop-types": "off",
		// allow jsx syntax in js files (for next.js project)
		'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }], //should add ".ts" if typescript project
	},
};
