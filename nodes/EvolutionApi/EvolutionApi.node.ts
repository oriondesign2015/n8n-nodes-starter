import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	NodeApiError,
} from 'n8n-workflow';
import { evolutionNodeProperties } from './properties';
import { resourceOperationsFunctions } from './execute';

export class EvolutionApi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Evolution API',
		name: 'evolutionApi',
		icon: 'file:evolutionapi.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"]}}',
		description: 'Interact with Evolution API',
		defaults: {
			name: 'Evolution API',
		},
		// @ts-ignore
		inputs: ['main'],
		// @ts-ignore
		outputs: ['main'],
		credentials: [
			{
				name: 'evolutionApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://doc.evolution-api.com/api-reference',
			url: '',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		// The node's property structure:
		// • Resources: Available resources (Instance, Messages, Events, Integrations)
		// • Operations: Operations for each resource (e.g., Create instance, Send message, Set Webhook)
		// • Fields: Fields for each operation
		properties: evolutionNodeProperties,
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;

		// Search for the function for the selected resource and operation
		const fn = resourceOperationsFunctions[resource][operation];

		// If the function is not found, return an error
		if (!fn) {
			throw new NodeApiError(this.getNode(), {
				message: 'Unsupported operation.',
				description: `The function "${operation}" for the resource "${resource}" is not supported!`,
			});
		}

		// Execute the function
		const responseData = await fn(this);

		// Return only the JSON
		return [this.helpers.returnJsonArray(responseData)];
	}
}
