import { INodeProperties } from 'n8n-workflow';

// Campos de Labels
export const labelsFields: INodeProperties[] = [
	// Campos comuns para todas as operações
	{
		displayName: 'Nome Da Instância',
		name: 'instanceName',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o nome da instância',
		displayOptions: {
			show: {
				resource: ['labels-api'],
			},
		},
	},

	// Campos para adicionar label
	{
		displayName: 'Nome Da Label',
		name: 'labelName',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o nome da label a ser adicionada',
		displayOptions: {
			show: {
				resource: ['labels-api'],
				operation: ['add-label'],
			},
		},
	},
	{
		displayName: 'Cor Da Label',
		name: 'labelColor',
		type: 'string',
		default: '#000000',
		description: 'Digite a cor da label em formato hexadecimal (ex: #FF0000)',
		displayOptions: {
			show: {
				resource: ['labels-api'],
				operation: ['add-label'],
			},
		},
	},

	// Campos para remover label
	{
		displayName: 'ID Da Label',
		name: 'labelId',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o ID da label a ser removida',
		displayOptions: {
			show: {
				resource: ['labels-api'],
				operation: ['remove-label'],
			},
		},
	},
];
