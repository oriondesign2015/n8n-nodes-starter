import { INodeProperties } from 'n8n-workflow';

// Opções da labels-api (Etiquetas)
export const labelsOperationsOptions: INodeProperties = {
	displayName: 'Operação',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['labels-api'],
		},
	},
	options: [
		{
			name: 'Pegar Labels',
			action: 'Buscar todas as labels',
			description: 'Busca e retorna todas as labels disponíveis na instância',
			value: 'get-labels',
		},
		{
			name: 'Adicionar Label',
			action: 'Adicionar uma nova label',
			description: 'Adiciona uma nova label à instância',
			value: 'add-label',
		},
		{
			name: 'Remover Label',
			action: 'Remover uma label',
			description: 'Remove uma label da instância',
			value: 'remove-label',
		},
	],
	default: 'get-labels',
};
