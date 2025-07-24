// Based on: https://github.com/oriondesign2015/n8n-nodes-evolution-api
// Uses: https://github.com/EvolutionAPI/evolution-api
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
               displayName: 'Zapin Evo',
               name: 'evolutionApi',
               icon: 'file:evolutionapi.svg',
               group: ['transform'],
               version: 1,
               subtitle: '={{$parameter["operation"]}}',
               description: 'Interact with Zapin Evo',
               defaults: {
                       name: 'Zapin Evo',
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
                       baseURL: 'https://doc.evolution-api.com/v2/api-reference',
                       url: '',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		// Node properties structure:
		// • Resources: available resources (Instance, Messages, Events, Integrations)
		// • Operations: operations for each resource (e.g., Create instance, Send message, Set webhook)
		// • Fields: fields for each operation
		properties: evolutionNodeProperties,
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;

		// Busca a função para o recurso e operação selecionados
		const fn = resourceOperationsFunctions[resource][operation];

		// Throw an error if the function was not found
		if (!fn) {
			throw new NodeApiError(this.getNode(), {
				message: 'Unsupported operation.',
				description: `The function "${operation}" for resource "${resource}" is not supported!`,
			});
		}

		// Executa a função
		const responseData = await fn(this);

		// Retornar apenas o JSON
		return [this.helpers.returnJsonArray(responseData)];
	}
}
