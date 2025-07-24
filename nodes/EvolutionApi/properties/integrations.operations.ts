// Based on: https://github.com/oriondesign2015/n8n-nodes-evolution-api
// Uses: https://github.com/EvolutionAPI/evolution-api
import { INodeProperties } from 'n8n-workflow';

// Opções da integrations-api (Integração)
export const integrationsOperationsOptions: INodeProperties = {
        displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['integrations-api'], // Value do Resource
		},
	},
        options: [
                {
                        name: 'Chatwoot',
                        action: 'Chatwoot',
                        description: 'Configure or fetch Chatwoot integration',
                        value: 'chatwoot',
                },
                {
                        name: 'Evolution Bot',
                        action: 'Evolution bot',
                        description: 'Manage the Evolution Bot integration',
                        value: 'evolution-bot',
                },
                {
                        name: 'Typebot',
                        action: 'Typebot',
                        description: 'Manage the Typebot integration',
                        value: 'typebot',
                },
                {
                        name: 'Dify',
                        action: 'Dify',
                        description: 'Manage the Dify integration',
                        value: 'difyBot',
                },
                {
                        name: 'Flowise',
                        action: 'Flowise',
                        description: 'Manage the Flowise integration',
                        value: 'flowiseBot',
                },
        ],
        // Set "Chatwoot" as the default option
        default: 'chatwoot',
};
