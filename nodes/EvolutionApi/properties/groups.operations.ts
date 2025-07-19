import { INodeProperties } from 'n8n-workflow';

export const groupsOperations: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['groups-api'],
		},
	},
	options: [
		{
			name: 'Create Group',
			action: 'Create a new group',
			description: 'Creates a new group in WhatsApp',
			value: 'create-group',
		},
		{
			name: 'Update Group Picture',
			action: 'Update group picture',
			description: 'Updates the group profile picture',
			value: 'update-group-picture',
		},
		{
			name: 'Update Group Name',
			action: 'Update group name',
			description: 'Updates the group name/title',
			value: 'update-group-name',
		},
		{
			name: 'Update Group Description',
			action: 'Update group description',
			description: 'Updates the group description',
			value: 'update-group-description',
		},
		{
			name: 'Update Settings',
			action: 'Update group settings',
			description: 'Updates the group permission settings',
			value: 'update-settings',
		},
		{
			name: 'Update Members',
			action: 'Update group members',
			description: 'Adds, removes, or updates member permissions',
			value: 'update-participants',
		},
		{
			name: 'Fetch Invite Link',
			action: 'Fetch invite link',
			description: 'Gets the group invite link',
			value: 'fetch-invite-code',
		},
		{
			name: 'Revoke Invite Link',
			action: 'Revoke invite link',
			description: 'Revokes the current group invite link',
			value: 'revoke-invite-code',
		},
		{
			name: 'Send Invite Link',
			action: 'Send invite link',
			description: 'Sends the group invite link to contacts',
			value: 'send-invite-link',
		},
		{
			name: 'Fetch Groups',
			action: 'Fetch groups',
			description: 'Fetches group information by different methods',
			value: 'fetch-groups',
		},
		{
			name: 'Find Participants',
			action: 'Find group participants',
			description: 'Gets the list of participants in a group',
			value: 'find-participants',
		},
		{
			name: 'Temporary Messages',
			action: 'Configure temporary messages',
			description: 'Sets the message expiration time in the group',
			value: 'toggle-ephemeral',
		},
		{
			name: 'Join Group',
			action: 'Join group',
			description: 'Joins a group using the invite code',
			value: 'join-group',
		},
		{
			name: 'Leave Group',
			action: 'Leave group',
			description: 'Removes the instance from the group',
			value: 'leave-group',
		},
	],
	default: 'create-group',
};
