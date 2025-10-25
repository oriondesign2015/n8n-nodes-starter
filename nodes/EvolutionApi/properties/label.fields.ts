import { INodeProperties, NodePropertyTypes } from 'n8n-workflow';

export const ticketsFields: INodeProperties[] = [
	{
		displayName: 'Nome da Etiqueta',
		name: 'labelName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Nome da etiqueta a ser criada ou gerenciada',
		displayOptions: {
			show: {
				resource: ['labels-api'],
				operation: ['ticket-add-label', 'ticket-verify-label'],
			},
		},
	},
	{
		displayName: 'Cor da Etiqueta',
		name: 'labelColor',
		type: 'color' as NodePropertyTypes,
		default: '#000000',
		description: 'Cor da etiqueta (em hexadecimal)',
		displayOptions: {
			show: {
				resource: ['labels-api'],
				operation: ['ticket-add-label'],
			},
		},
	},
	{
		displayName: 'Número do Contato',
		name: 'remoteJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Número do WhatsApp no formato 5511999999999@c.us',
		displayOptions: {
			show: {
				resource: ['labels-api'],
				operation: ['ticket-add-label', 'ticket-remove-label'],
			},
		},
	},
	{
		displayName: 'ID da Etiqueta',
		name: 'labelId',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID da etiqueta (obtido ao verificar as etiquetas)',
		displayOptions: {
			show: {
				resource: ['labels-api'],
				operation: ['ticket-remove-label'],
			},
		},
	},
	{
		displayName: 'Instância',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Nome da instância do WhatsApp na Evolution API',
		displayOptions: {
			show: {
				resource: ['labels-api'],
			},
		},
	},
];