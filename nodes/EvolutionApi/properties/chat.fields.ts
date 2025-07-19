import { INodeProperties, NodePropertyTypes } from 'n8n-workflow';

export const chatFields: INodeProperties[] = [
	// Common fields for all operations
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Enter the instance name',
		displayOptions: {
			show: {
				resource: ['chat-api'],
			},
		},
	},

	// Fields for checking number
	{
		displayName: 'Numbers',
		name: 'numbers',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'List of numbers to check (comma-separated)',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['check-number'],
			},
		},
	},

	// Fields for reading messages
	{
		displayName: 'Contact',
		name: 'remoteJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Contact number',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['read-messages'],
			},
		},
	},
	{
		displayName: 'Message ID',
		name: 'messageId',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['read-messages'],
			},
		},
	},
	{
		displayName: 'Message Is From Me',
		name: 'fromMe',
		type: 'boolean' as NodePropertyTypes,
		default: false,
		required: true,
		description: 'If the message was sent by the instance',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['read-messages'],
			},
		},
	},

	// Fields for managing archive
	{
		displayName: 'Contact',
		name: 'chat',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Contact number',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['manage-archive'],
			},
		},
	},
	{
		displayName: 'Action',
		name: 'archive',
		type: 'options' as NodePropertyTypes,
		options: [
			{
				name: 'Archive',
				value: true,
			},
			{
				name: 'Unarchive',
				value: false,
			},
		],
		default: true,
		required: true,
		description: 'Choose whether to archive or unarchive the conversation',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['manage-archive'],
			},
		},
	},
	{
		displayName: 'Message ID',
		name: 'messageId',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID of the last message',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['manage-archive'],
			},
		},
	},
	{
		displayName: 'Message Is From Me',
		name: 'fromMe',
		type: 'boolean' as NodePropertyTypes,
		default: false,
		required: true,
		description: 'If the message was sent by the instance',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['manage-archive'],
			},
		},
	},

	// Fields for marking as unread
	{
		displayName: 'Contact',
		name: 'chat',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Contact number',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['mark-unread'],
			},
		},
	},
	{
		displayName: 'Message ID',
		name: 'messageId',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID of the last message',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['mark-unread'],
			},
		},
	},
	{
		displayName: 'Message Is From Me',
		name: 'fromMe',
		type: 'boolean' as NodePropertyTypes,
		default: false,
		required: true,
		description: 'If the message was sent by the instance',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['mark-unread'],
			},
		},
	},

	// Fields for deleting message
	{
		displayName: 'Contact',
		name: 'remoteJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Contact number',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['delete-message'],
			},
		},
	},
	{
		displayName: 'Message ID',
		name: 'messageId',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID of the message to be deleted',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['delete-message'],
			},
		},
	},
	{
		displayName: 'Message Is From Me',
		name: 'fromMe',
		type: 'boolean' as NodePropertyTypes,
		default: false,
		required: true,
		description: 'If the message was sent by the instance',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['delete-message'],
			},
		},
	},
	{
		displayName: 'Participant Number',
		name: 'participant',
		type: 'string',
		default: '',
		required: true,
		description: 'Number of the participant who sent the message',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['delete-message'],
				fromMe: [false],
			},
		},
	},

	// Fields for fetching profile picture
	{
		displayName: 'Contact',
		name: 'number',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Contact number (e.g., 5511999999999)',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['fetch-profile-picture'],
			},
		},
	},

	// Fields for getting media in Base64
	{
		displayName: 'Message ID',
		name: 'messageId',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID of the message containing the media',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['get-media-base64'],
			},
		},
	},
	{
		displayName: 'Convert To MP4',
		name: 'convertToMp4',
		type: 'boolean' as NodePropertyTypes,
		default: false,
		required: true,
		description: 'Whether to convert the video to MP4 format',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['get-media-base64'],
			},
		},
	},

	// Fields for editing message
	{
		displayName: 'Contact',
		name: 'remoteJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Contact number',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['update-message'],
			},
		},
	},
	{
		displayName: 'Message ID',
		name: 'messageId',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID of the message to be edited',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['update-message'],
			},
		},
	},
	{
		displayName: 'New Message',
		name: 'text',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'New message text',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['update-message'],
			},
		},
	},

	// Fields for sending presence
	{
		displayName: 'Contact',
		name: 'remoteJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Contact number',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['send-presence'],
			},
		},
	},
	{
		displayName: 'Presence',
		name: 'presence',
		type: 'options',
		options: [
			{
				name: 'Typing...',
				value: 'composing',
			},
			{
				name: 'Recording...',
				value: 'recording',
			},
		],
		default: 'composing',
		required: true,
		description: 'Type of presence to be sent',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['send-presence'],
			},
		},
	},
	{
		displayName: 'Delay',
		name: 'delay',
		type: 'number' as NodePropertyTypes,
		default: 1200,
		required: true,
		description: 'Time in milliseconds that the presence will be active',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['send-presence'],
			},
		},
	},

	// Fields for blocking contact
	{
		displayName: 'Contact',
		name: 'remoteJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Contact number',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['block-contact'],
			},
		},
	},
	{
		displayName: 'Action',
		name: 'status',
		type: 'options',
		options: [
			{
				name: 'Block',
				value: 'block',
			},
			{
				name: 'Unblock',
				value: 'unblock',
			},
		],
		default: 'block',
		required: true,
		description: 'Action to be performed',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['block-contact'],
			},
		},
	},

	// Fields for listing contacts
	{
		displayName: 'List All',
		name: 'listAll',
		type: 'boolean' as NodePropertyTypes,
		default: true,
		required: true,
		description: 'Whether to list all contacts',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['find-contacts'],
			},
		},
	},
	{
		displayName: 'Contact',
		name: 'remoteJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Specific contact number',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['find-contacts'],
				listAll: [false],
			},
		},
	},

	// Fields for searching messages
	{
		displayName: 'Contact',
		name: 'remoteJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Contact number',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['find-messages'],
			},
		},
	},
	{
		displayName: 'Page',
		name: 'page',
		type: 'number' as NodePropertyTypes,
		default: 1,
		description: 'Page number',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['find-messages'],
			},
		},
	},
	{
		displayName: 'Quantity Per Page',
		name: 'offset',
		type: 'number' as NodePropertyTypes,
		default: 10,
		description: 'Number of messages per page',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['find-messages'],
			},
		},
	},

	// Fields for searching message status
	{
		displayName: 'Contact',
		name: 'remoteJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Contact number',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['find-status-messages'],
			},
		},
	},
	{
		displayName: 'Message ID',
		name: 'messageId',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['find-status-messages'],
			},
		},
	},
	{
		displayName: 'Page',
		name: 'page',
		type: 'number' as NodePropertyTypes,
		default: 1,
		description: 'Page number',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['find-status-messages'],
			},
		},
	},
	{
		displayName: 'Quantity Per Page',
		name: 'offset',
		type: 'number' as NodePropertyTypes,
		default: 10,
		description: 'Number of messages per page',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['find-status-messages'],
			},
		},
	},

	// Fields for searching chats
	{
		displayName: 'Contact',
		name: 'remoteJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Contact number',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['find-chats'],
			},
		},
	},
	{
		displayName: 'Message ID',
		name: 'messageId',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['find-chats'],
			},
		},
	},
	{
		displayName: 'Page',
		name: 'page',
		type: 'number' as NodePropertyTypes,
		default: 1,
		description: 'Page number',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['find-chats'],
			},
		},
	},
	{
		displayName: 'Quantity Per Page',
		name: 'offset',
		type: 'number' as NodePropertyTypes,
		default: 10,
		description: 'Number of chats per page',
		displayOptions: {
			show: {
				resource: ['chat-api'],
				operation: ['find-chats'],
			},
		},
	},
];
