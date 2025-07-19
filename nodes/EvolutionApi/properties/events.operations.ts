import { INodeProperties } from 'n8n-workflow';

// Options for events-api (Events)
export const eventsOperationsOptions: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['events-api'], // Resource Value
		},
	},
	options: [
		// Option = Send Text Message
		{
			// Set/find Webhook
			name: 'Webhook',
			action: 'Webhook',
			description: 'Set/Find integration with Webhook',
			value: 'webhook',
		},
		{
			// Set/find Rabbitmq
			name: 'RabbitMQ',
			action: 'Rabbitmq',
			description: 'Set/Find integration with RabbitMQ',
			value: 'rabbitmq',
		},
	],
	// Setting "Send Text" option as default
	default: 'webhook',
};
