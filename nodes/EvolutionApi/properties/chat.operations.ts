// Based on: https://github.com/oriondesign2015/n8n-nodes-evolution-api
// Uses: https://github.com/EvolutionAPI/evolution-api
import { INodeProperties } from 'n8n-workflow';

export const chatOperations: INodeProperties = {
        displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['chat-api'],
		},
	},
	options: [
                {
                        name: 'Check Number',
                        action: 'Check number on WhatsApp',
                        description: 'Verify if a phone number is registered on WhatsApp',
                        value: 'check-number',
                },
                {
                        name: 'Read Messages',
                        action: 'Mark messages as read',
                        description: 'Mark specific messages as read',
                        value: 'read-messages',
                },
                {
                        name: 'Manage Archive',
                        action: 'Manage chat archive',
                        description: 'Archive or unarchive a chat',
                        value: 'manage-archive',
                },
                {
                        name: 'Mark as Unread',
                        action: 'Mark chat as unread',
                        description: 'Mark a specific chat as unread',
                        value: 'mark-unread',
                },
                {
                        name: 'Delete Message',
                        action: 'Delete message',
                        description: 'Delete a specific message for everyone',
                        value: 'delete-message',
                },
                {
                        name: 'Fetch Profile Picture',
                        action: 'Fetch profile picture',
                        description: 'Retrieve the profile picture URL of a contact',
                        value: 'fetch-profile-picture',
                },
                {
                        name: 'Get Media as Base64',
                        action: 'Get media as base64',
                        description: 'Retrieve the content of media in Base64 format',
                        value: 'get-media-base64',
                },
                {
                        name: 'Edit Message',
                        action: 'Edit message',
                        description: 'Edit a previously sent message',
                        value: 'update-message',
                },
                {
                        name: 'Send Presence',
                        action: 'Send presence',
                        description: 'Send typing or recording presence status',
                        value: 'send-presence',
                },
                {
                        name: 'Block Contact',
                        action: 'Block contact',
                        description: 'Block or unblock a contact',
                        value: 'block-contact',
                },
                {
                        name: 'List Contacts',
                        action: 'List contacts',
                        description: 'List all contacts or search for a specific contact',
                        value: 'find-contacts',
                },
                {
                        name: 'Find Messages',
                        action: 'Find messages from a contact',
                        description: 'Search messages from a specific contact',
                        value: 'find-messages',
                },
                {
                        name: 'Find Message Status',
                        action: 'Find message status',
                        description: 'Search message status for a specific contact',
                        value: 'find-status-messages',
                },
                {
                        name: 'Find Chats',
                        action: 'Find chats',
                        description: 'Search chats of a specific contact',
                        value: 'find-chats',
                },
	],
	default: 'check-number',
};
