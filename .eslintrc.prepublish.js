/**
 * @type {import('@types/eslint').ESLint.ConfigData}
 */
module.exports = {
	extends: "./.eslintrc.js",
	rules: {
		'n8n-nodes-base/node-param-resource-with-plural-option': 'off',
	},

	overrides: [
		{
			files: ['package.json'],
			plugins: ['eslint-plugin-n8n-nodes-base'],
			rules: {
				'n8n-nodes-base/community-package-json-name-still-default': 'error',
				// A regra de plural NÃO deve estar aqui, pois package.json não causa esse erro
			},
		},
	],
};