import { INodeProperties } from 'n8n-workflow';

export const resources: INodeProperties = {
	displayName: 'Resource',
	name: 'resource',
	type: 'options',
	noDataExpression: true,
	options: [
		{
			name: 'Instance',
			value: 'instances-api',
		},
		{
			name: 'Message',
			value: 'messages-api',
		},
		{
			name: 'Chat',
			value: 'chat-api',
		},
		{
			name: 'Group',
			value: 'groups-api',
		},
		{
			name: 'Profile',
			value: 'profile-api',
		},
		{
			name: 'Event',
			value: 'events-api',
		},
		{
			name: 'Integration',
			value: 'integrations-api',
		},
	],
	default: 'instances-api',
};
