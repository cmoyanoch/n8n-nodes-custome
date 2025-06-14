const sharedOptions = require('@n8n_io/eslint-config/shared');

/**
 * @type {import('@types/eslint').ESLint.ConfigData}
 */
module.exports = {
	extends: ['@n8n_io/eslint-config/node'],

	...sharedOptions(__dirname),

	rules: {
		'n8n-nodes-base/node-filename-against-convention': 'error',
		'n8n-nodes-base/node-class-description-inputs-wrong-regular-node': 'error',
		'n8n-nodes-base/node-class-description-outputs-wrong': 'error',
		'n8n-nodes-base/node-execute-block-double-assertion-for-items': 'error',
		'n8n-nodes-base/node-execute-block-missing-continue-on-fail': 'error',
		'n8n-nodes-base/node-resource-description-filename-against-convention': 'error',
		'n8n-nodes-base/node-param-default-missing': 'error',
		'n8n-nodes-base/node-param-description-comma-separated-hyphen': 'error',
		'n8n-nodes-base/node-param-description-empty-string': 'error',
		'n8n-nodes-base/node-param-description-excess-inner-whitespace': 'error',
		'n8n-nodes-base/node-param-description-identical-to-display-name': 'error',
		'n8n-nodes-base/node-param-description-missing-final-period': 'error',
		'n8n-nodes-base/node-param-description-missing-for-ignore-ssl-issues': 'error',
		'n8n-nodes-base/node-param-description-missing-for-return-all': 'error',
		'n8n-nodes-base/node-param-description-missing-for-simplify': 'error',
		'n8n-nodes-base/node-param-description-miscased-json': 'error',
		'n8n-nodes-base/node-param-description-miscased-url': 'error',
		'n8n-nodes-base/node-param-description-unneeded-backticks': 'error',
		'n8n-nodes-base/node-param-description-untrimmed': 'error',
		'n8n-nodes-base/node-param-description-url-missing-protocol': 'error',
		'n8n-nodes-base/node-param-description-weak': 'error',
		'n8n-nodes-base/node-param-display-name-excess-inner-whitespace': 'error',
		'n8n-nodes-base/node-param-display-name-untrimmed': 'error',
		'n8n-nodes-base/node-param-display-name-miscased-id': 'error',
		'n8n-nodes-base/node-param-display-name-miscased-url': 'error',
		'n8n-nodes-base/node-param-display-name-not-first-position': 'error',
		'n8n-nodes-base/node-param-display-name-wrong-for-dynamic-multi-options': 'error',
		'n8n-nodes-base/node-param-display-name-wrong-for-dynamic-options': 'error',
		'n8n-nodes-base/node-param-display-name-wrong-for-simplify': 'error',
		'n8n-nodes-base/node-param-display-name-wrong-for-update-fields': 'error',
		'n8n-nodes-base/node-param-min-value-wrong-for-limit': 'error',
		'n8n-nodes-base/node-param-multi-options-type-unsorted-items': 'error',
		'n8n-nodes-base/node-param-operation-without-no-data-expression': 'error',
		'n8n-nodes-base/node-param-option-description-identical-to-name': 'error',
		'n8n-nodes-base/node-param-option-name-containing-star': 'error',
		'n8n-nodes-base/node-param-option-name-duplicate': 'error',
		'n8n-nodes-base/node-param-option-name-wrong-for-get-all': 'error',
		'n8n-nodes-base/node-param-option-name-wrong-for-upsert': 'error',
		'n8n-nodes-base/node-param-option-value-duplicate': 'error',
		'n8n-nodes-base/node-param-options-type-unsorted-items': 'error',
		'n8n-nodes-base/node-param-placeholder-miscased-id': 'error',
		'n8n-nodes-base/node-param-required-false': 'error',
		'n8n-nodes-base/node-param-resource-without-no-data-expression': 'error',
		'n8n-nodes-base/node-param-type-options-password-missing': 'error',
		'n8n-nodes-base/cred-class-field-documentation-url-missing': 'error',
		'n8n-nodes-base/cred-class-field-name-missing-oauth2': 'error',
		'n8n-nodes-base/cred-class-field-name-unsuffixed': 'error',
		'n8n-nodes-base/cred-class-name-missing-oauth2-suffix': 'error',
		'n8n-nodes-base/cred-filename-against-convention': 'error',
	},

	overrides: [
		{
			files: ['./credentials/**/*.ts'],
			rules: {
				'n8n-nodes-base/cred-class-field-name-unsuffixed': 'error',
				'n8n-nodes-base/cred-class-name-unsuffixed': 'error',
				'n8n-nodes-base/cred-filename-against-convention': 'error',
			},
		},
	],
};