// Based on: https://github.com/oriondesign2015/n8n-nodes-evolution-api
// Uses: https://github.com/EvolutionAPI/evolution-api
import { INodeProperties } from 'n8n-workflow';

// Opções da messages-api (Mensagens)
export const messagesOperationsOptions: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['messages-api'], // Value do Resource
		},
	},
	options: [
		// Opção = Enviar mensagem de Texto
		{
			// Send Text
			name: 'Send Text',
			action: 'Send text',
			description: 'Send a text message',
			value: 'send-text',
		},

		// Opção = Enviar Imagem
		{
			// Send Media
			name: 'Send Image',
			action: 'Send image',
			description: 'Send an image message',
			value: 'send-image',
		},

		// Opção = Enviar Video
		{
			// Send Media
			name: 'Send Video',
			action: 'Send video',
			description: 'Send a video message',
			value: 'send-video',
		},

		// Opção = Enviar Audio
		{
			// Send Narrated Audio
			name: 'Send Audio',
			action: 'Send audio',
			description: 'Send an audio message',
			value: 'send-audio',
		},

		// Opção = Enviar Documento
		{
			// Send Media
			name: 'Send Document',
			action: 'Send document',
			description: 'Send a document message',
			value: 'send-document',
		},

		// Opção = Enviar Enquete
		{
			// Send Poll
			name: 'Send Poll',
			action: 'Send poll',
			description: 'Send a poll with up to 12 options',
			value: 'send-poll',
		},

		// Opção = Enviar Contato
		{
			name: 'Send Contact',
			action: 'Send contact',
			description: 'Send a WhatsApp contact',
			value: 'send-contact',
		},

		// Opção = Enviar Lista
		{
			name: 'Send List',
			action: 'Send list',
			description: 'Send an interactive list',
			value: 'send-list',
		},

		// Opção = Enviar Botões
		{
			name: 'Send Buttons',
			action: 'Send buttons',
			description: 'Send a message with interactive buttons',
			value: 'send-buttons',
		},

		// Opção = Enviar PIX
		{
			name: 'Send PIX',
			action: 'Send PIX',
			description: 'Send a PIX payment button',
			value: 'send-pix',
		},

		// Opção = Enviar Status
		{
			name: 'Send Status',
			action: 'Send status',
			description: 'Publish a status/story',
			value: 'send-stories',
		},

		// Opção = Reagir Mensagem
		{
			name: 'React Message',
			action: 'React message',
			description: 'Add a reaction to a message',
			value: 'send-reaction',
		},
	],
	// Set "Send Text" as the default option
	default: 'send-text',
};
