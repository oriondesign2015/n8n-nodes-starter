import { INodeProperties, NodePropertyTypes } from 'n8n-workflow';

export const groupsFields: INodeProperties[] = [
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Enter the name of the instance that will create the group',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['create-group'],
			},
		},
	},
	{
		displayName: 'Group Name',
		name: 'subject',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Enter the name of the group to be created',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['create-group'],
			},
		},
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string' as NodePropertyTypes,
		default: '',
		description: 'Enter the group description (optional)',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['create-group'],
			},
		},
	},
	{
		displayName: 'Participants',
		name: 'participants',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Enter participant numbers separated by commas (e.g., 5511999999999,5511888888888)',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['create-group'],
			},
		},
	},
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Enter the name of the instance that will update the image',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-group-picture'],
			},
		},
	},
	{
		displayName: 'Group ID',
		name: 'groupJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID of the group whose image will be updated',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-group-picture'],
			},
		},
	},
	{
		displayName: 'Image URL',
		name: 'image',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'URL of the image to be set as the group photo',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-group-picture'],
			},
		},
	},
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Enter the name of the instance that will update the group name',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-group-name'],
			},
		},
	},
	{
		displayName: 'Group ID',
		name: 'groupJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID of the group whose name will be updated',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-group-name'],
			},
		},
	},
	{
		displayName: 'New Group Name',
		name: 'subject',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'New name to be set for the group',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-group-name'],
			},
		},
	},
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Enter the name of the instance that will update the description',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-group-description'],
			},
		},
	},
	{
		displayName: 'Group ID',
		name: 'groupJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID of the group whose description will be updated',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-group-description'],
			},
		},
	},
	{
		displayName: 'New Description',
		name: 'description',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'New description to be set for the group',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-group-description'],
			},
		},
	},
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Enter the name of the instance that will fetch the code',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['fetch-invite-code'],
			},
		},
	},
	{
		displayName: 'Group ID',
		name: 'groupJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID of the group to get the invite code',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['fetch-invite-code'],
			},
		},
	},
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Enter the name of the instance that will revoke the code',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['revoke-invite-code'],
			},
		},
	},
	{
		displayName: 'Group ID',
		name: 'groupJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID of the group to revoke the invite code',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['revoke-invite-code'],
			},
		},
	},
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Enter the name of the instance that will send the invite',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['send-invite-link'],
			},
		},
	},
	{
		displayName: 'Group ID',
		name: 'groupJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID of the group to send the invite',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['send-invite-link'],
			},
		},
	},
	{
		displayName: 'Invite Message',
		name: 'description',
		type: 'string' as NodePropertyTypes,
		default: 'Here is the group link',
		required: true,
		description: 'Message that will be sent along with the invite link',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['send-invite-link'],
			},
		},
	},
	{
		displayName: 'Recipients',
		name: 'numbers',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Enter recipient numbers separated by commas (e.g., 5511999999999,5511888888888)',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['send-invite-link'],
			},
		},
	},
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Enter the name of the instance that will fetch the group',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['fetch-group-by-code'],
			},
		},
	},
	{
		displayName: 'Invite Code',
		name: 'inviteCode',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Group invite code (e.g., JZNHJLvnNd04UvGefiEZAA)',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['fetch-group-by-code'],
			},
		},
	},
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Enter the instance name',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['fetch-groups'],
			},
		},
	},
	{
		displayName: 'Search Method',
		name: 'searchMethod',
		type: 'options' as NodePropertyTypes,
		options: [
			{
				name: 'By Invite Code',
				value: 'inviteCode',
			},
			{
				name: 'By Group ID',
				value: 'groupJid',
			},
			{
				name: 'Fetch All Groups',
				value: 'fetchAll',
			},
		],
		default: 'inviteCode',
		required: true,
		description: 'Choose the method to search for groups',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['fetch-groups'],
			},
		},
	},
	{
		displayName: 'Invite Code',
		name: 'inviteCode',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Group invite code (e.g., JZNHJLvnNd04UvGefiEZAA)',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['fetch-groups'],
				searchMethod: ['inviteCode'],
			},
		},
	},
	{
		displayName: 'Group ID',
		name: 'groupJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Group ID to fetch information',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['fetch-groups'],
				searchMethod: ['groupJid'],
			},
		},
	},
	{
		displayName: 'Get Participants',
		name: 'getParticipants',
		type: 'boolean' as NodePropertyTypes,
		default: false,

		description: 'Whether to get the list of group participants',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['fetch-groups'],
				searchMethod: ['fetchAll'],
			},
		},
	},
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Enter the instance name',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['find-participants'],
			},
		},
	},
	{
		displayName: 'Group ID',
		name: 'groupJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID of the group to fetch participants',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['find-participants'],
			},
		},
	},
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Enter the instance name',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-participants'],
			},
		},
	},
	{
		displayName: 'Group ID',
		name: 'groupJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID of the group to update members',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-participants'],
			},
		},
	},
	{
		displayName: 'Action',
		name: 'action',
		type: 'options' as NodePropertyTypes,
		options: [
			{
				name: 'Add Member',
				value: 'add',
			},
			{
				name: 'Remove Member',
				value: 'remove',
			},
			{
				name: 'Promote to Admin',
				value: 'promote',
			},
			{
				name: 'Demote to Member',
				value: 'demote',
			},
		],
		default: 'add',
		required: true,
		description: 'Action to be performed with members',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-participants'],
			},
		},
	},
	{
		displayName: 'Members',
		name: 'participants',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'List of member numbers separated by commas (e.g., 5511999999999,5511888888888)',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-participants'],
			},
		},
	},
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Enter the instance name',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-settings'],
			},
		},
	},
	{
		displayName: 'Group ID',
		name: 'groupJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID of the group to update settings',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-settings'],
			},
		},
	},
	{
		displayName: 'Action',
		name: 'action',
		type: 'options' as NodePropertyTypes,
		options: [
			{
				name: 'Admins Only Send Messages',
				value: 'announcement',
			},
			{
				name: 'Everyone Sends Messages',
				value: 'not_announcement',
			},
			{
				name: 'Admins Only Edit Settings',
				value: 'locked',
			},
			{
				name: 'Everyone Edits Settings',
				value: 'unlocked',
			},
		],
		default: 'not_announcement',
		required: true,
		description: 'Setting to be applied to the group',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['update-settings'],
			},
		},
	},
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Enter the instance name',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['toggle-ephemeral'],
			},
		},
	},
	{
		displayName: 'Group ID',
		name: 'groupJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID of the group to configure temporary messages',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['toggle-ephemeral'],
			},
		},
	},
	{
		displayName: 'Expiration',
		name: 'expiration',
		type: 'options' as NodePropertyTypes,
		options: [
			{
				name: 'Disabled',
				value: 0,
			},
			{
				name: '24 Hours',
				value: 86400,
			},
			{
				name: '7 Days',
				value: 604800,
			},
			{
				name: '90 Days',
				value: 7776000,
			},
		],
		default: 0,
		required: true,
		description: 'Message expiration time',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['toggle-ephemeral'],
			},
		},
	},
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Enter the instance name',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['leave-group'],
			},
		},
	},
	{
		displayName: 'Group ID',
		name: 'groupJid',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'ID of the group you want to leave',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['leave-group'],
			},
		},
	},
	{
		displayName: 'Instance Name',
		name: 'instanceName',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Enter the name of the instance that will join the group',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['join-group'],
			},
		},
	},
	{
		displayName: 'Invite Code',
		name: 'inviteCode',
		type: 'string' as NodePropertyTypes,
		default: '',
		required: true,
		description: 'Enter the group invite code (e.g., JZNHJLvnNd04UvGefiEZAA)',
		displayOptions: {
			show: {
				resource: ['groups-api'],
				operation: ['join-group'],
			},
		},
	},
];
