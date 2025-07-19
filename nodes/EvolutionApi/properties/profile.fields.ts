import { INodeProperties, NodePropertyTypes } from 'n8n-workflow';

export const profileFields: INodeProperties[] = [
    {
        displayName: 'Instance Name',
        name: 'instanceName',
        type: 'string' as NodePropertyTypes,
        default: '',
        required: true,
        description: 'Enter the instance name',
        displayOptions: {
            show: {
                resource: ['profile-api'],
            },
        },
    },
    {
        displayName: 'Name',
        name: 'name',
        type: 'string' as NodePropertyTypes,
        default: '',
        required: true,
        description: 'New profile name',
        displayOptions: {
            show: {
                resource: ['profile-api'],
                operation: ['update-profile-name'],
            },
        },
    },
    {
        displayName: 'Contact',
        name: 'remoteJid',
        type: 'string' as NodePropertyTypes,
        default: '',
        required: true,
        description: 'Contact number',
        displayOptions: {
            show: {
                resource: ['profile-api'],
                operation: [
                    'fetch-profile',
                    'fetch-business-profile',
                    'fetch-professional-profile'
                ],
            },
        },
    },
    {
        displayName: 'Status',
        name: 'status',
        type: 'string' as NodePropertyTypes,
        default: '',
        required: true,
        description: 'New profile status (maximum 139 characters)',
        typeOptions: {
            maxLength: 139,
        },
        displayOptions: {
            show: {
                resource: ['profile-api'],
                operation: ['update-profile-status'],
            },
        },
    },
    {
        displayName: 'Image URL',
        name: 'picture',
        type: 'string' as NodePropertyTypes,
        default: '',
        required: true,
        description: 'URL of the image that will be set as the profile picture',
        displayOptions: {
            show: {
                resource: ['profile-api'],
                operation: ['update-profile-picture'],
            },
        },
    },
    {
        displayName: 'Read Receipts',
        name: 'readreceipts',
        type: 'options' as NodePropertyTypes,
        options: [
            {
                name: 'All',
                value: 'all',
            },
            {
                name: 'None',
                value: 'none',
            },
        ],
        default: 'all',
        required: true,
        description: 'Who can see when you have read messages',
        displayOptions: {
            show: {
                resource: ['profile-api'],
                operation: ['update-privacy-settings'],
            },
        },
    },
    {
        displayName: 'Profile Picture',
        name: 'profile',
        type: 'options' as NodePropertyTypes,
        options: [
            {
                name: 'All',
                value: 'all',
            },
            {
                name: 'My Contacts',
                value: 'contacts',
            },
            {
                name: 'Except Specific Contacts',
                value: 'contact_blacklist',
            },
            {
                name: 'None',
                value: 'none',
            },
        ],
        default: 'all',
        required: true,
        description: 'Who can see your profile picture',
        displayOptions: {
            show: {
                resource: ['profile-api'],
                operation: ['update-privacy-settings'],
            },
        },
    },
    {
        displayName: 'Status',
        name: 'status',
        type: 'options' as NodePropertyTypes,
        options: [
            {
                name: 'All',
                value: 'all',
            },
            {
                name: 'My Contacts',
                value: 'contacts',
            },
            {
                name: 'Except Specific Contacts',
                value: 'contact_blacklist',
            },
            {
                name: 'None',
                value: 'none',
            },
        ],
        default: 'contacts',
        required: true,
        description: 'Who can see your status',
        displayOptions: {
            show: {
                resource: ['profile-api'],
                operation: ['update-privacy-settings'],
            },
        },
    },
    {
        displayName: 'Online',
        name: 'online',
        type: 'options' as NodePropertyTypes,
        options: [
            {
                name: 'All',
                value: 'all',
            },
            {
                name: 'Same as Last Seen',
                value: 'match_last_seen',
            },
        ],
        default: 'all',
        required: true,
        description: 'Who can see when you are online',
        displayOptions: {
            show: {
                resource: ['profile-api'],
                operation: ['update-privacy-settings'],
            },
        },
    },
    {
        displayName: 'Last Seen',
        name: 'last',
        type: 'options' as NodePropertyTypes,
        options: [
            {
                name: 'All',
                value: 'all',
            },
            {
                name: 'My Contacts',
                value: 'contacts',
            },
            {
                name: 'Except Specific Contacts',
                value: 'contact_blacklist',
            },
            {
                name: 'None',
                value: 'none',
            },
        ],
        default: 'contacts',
        required: true,
        description: 'Who can see your last seen',
        displayOptions: {
            show: {
                resource: ['profile-api'],
                operation: ['update-privacy-settings'],
            },
        },
    },
    {
        displayName: 'Groups',
        name: 'groupadd',
        type: 'options' as NodePropertyTypes,
        options: [
            {
                name: 'All',
                value: 'all',
            },
            {
                name: 'My Contacts',
                value: 'contacts',
            },
            {
                name: 'Except Specific Contacts',
                value: 'contact_blacklist',
            },
        ],
        default: 'all',
        required: true,
        description: 'Who can add you to groups',
        displayOptions: {
            show: {
                resource: ['profile-api'],
                operation: ['update-privacy-settings'],
            },
        },
    },
];
