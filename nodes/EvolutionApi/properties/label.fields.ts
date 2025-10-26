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

	// Campo para pegar labels
	{
		displayName: 'Número',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o número WhatsApp (ex: 5511999999999@s.whatsapp.net)',
		displayOptions: {
			show: {
				resource: ['labels-api'],
				operation: ['get-labels'],
			},
		},
	},
	// Campos para adicionar e remover label
	{
		displayName: 'Número (remoteJid)',
		name: 'remoteJid',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o número WhatsApp (ex: 5511999999999@s.whatsapp.net)',
		displayOptions: {
			show: {
				resource: ['labels-api'],
				operation: ['add-label', 'remove-label'],
			},
		},
	},
	{
		displayName: 'ID Da Label',
		name: 'labelId',
		type: 'string',
		default: '',
		required: true,
		description: 'Digite o ID da label',
		displayOptions: {
			show: {
				resource: ['labels-api'],
				operation: ['add-label', 'remove-label'],
			},
		},
	},
];
