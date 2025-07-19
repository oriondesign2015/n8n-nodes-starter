import { INodeProperties } from 'n8n-workflow';

// Options for the integrations-api (Integration)
export const integrationsOperationsOptions: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['integrations-api'], // Resource value
		},
	},
	options: [
		{
			// Set/find Chatwoot
			name: 'Chatwoot',
			action: 'Chatwoot',
			description: 'Set/find integration with Chatwoot',
			value: 'chatwoot',
		},
		{
			// Create/find/fetch/Update/Delete/Start/Change Status/Fetch Sessions of Evolution Bot
			name: 'Evolution Bot',
			action: 'Evolution bot',
			description: 'Controls integration with Evolution Bot',
			value: 'evolution-bot',
		},
		{
			// Create/find/fetch/Update/Delete/Start/Change Status/Fetch Sessions of Typebot
			name: 'Typebot',
			action: 'Typebot',
			description: 'Controls integration with Typebot',
			value: 'typebot',
		},
		{
			// Create/find/fetch/Update/Delete/Start/Change Status/Fetch Sessions of Dify
			name: 'Dify',
			action: 'Dify',
			description: 'Controls integration with Dify',
			value: 'difyBot',
		},
		{
			// Create/find/fetch/Update/Delete/Start/Change Status/Fetch Sessions of Dify
			name: 'Flowise',
			action: 'Flowise',
			description: 'Controls integration with Flowise',
			value: 'flowiseBot',
		},
	],
	// Setting the default option to "Send Text"
	default: 'chatwoot',
};
