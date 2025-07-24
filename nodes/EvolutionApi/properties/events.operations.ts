// Based on: https://github.com/oriondesign2015/n8n-nodes-evolution-api
// Uses: https://github.com/EvolutionAPI/evolution-api
import { INodeProperties } from 'n8n-workflow';

// Opções da events-api (Eventos)
export const eventsOperationsOptions: INodeProperties = {
        displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['events-api'], // Value do Resource
		},
	},
        options: [
                {
                        name: 'Webhook',
                        action: 'Webhook',
                        description: 'Configure or fetch a webhook integration',
                        value: 'webhook',
                },
                {
                        // Set/find Rabbitmq
                        name: 'RabbitMQ',
                        action: 'RabbitMQ',
                        description: 'Configure or fetch a RabbitMQ integration',
                        value: 'rabbitmq',
                },
        ],
        // Set "Webhook" as the default option
        default: 'webhook',
};
