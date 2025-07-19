import { INodeProperties } from 'n8n-workflow';

export const profileOperationsOptions: INodeProperties = {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
        show: {
            resource: ['profile-api'],
        },
    },
    options: [
        {
            name: 'Fetch Profile',
            value: 'fetch-profile',
            description: 'Fetches profile information',
            action: 'Fetch profile',
        },
        {
            name: 'Fetch Business Profile',
            value: 'fetch-business-profile',
            description: 'Fetches business profile information',
            action: 'Fetch business profile',
        },
        {
            name: 'Update Profile Name',
            value: 'update-profile-name',
            description: 'Updates the profile name',
            action: 'Update profile name',
        },
        {   
            name: 'Update Profile Status',
            value: 'update-profile-status',
            description: 'Updates the profile status',
            action: 'Update profile status',
        },
        {
            name: 'Update Profile Picture',
            value: 'update-profile-picture',
            description: 'Updates the profile picture',
            action: 'Update profile picture',
        },
        {
            name: 'Remove Profile Picture',
            value: 'remove-profile-picture',
            description: 'Removes the profile picture',
            action: 'Remove profile picture',
        },
        {
            name: 'Fetch Privacy Settings',
            value: 'fetch-privacy-settings',
            description: 'Fetches the instance privacy settings',
            action: 'Fetch privacy settings',
        },
        {
            name: 'Update Privacy Settings',
            value: 'update-privacy-settings',
            description: 'Updates the instance privacy settings',
            action: 'Update privacy settings',
        },
    ],
    default: 'fetch-profile',
};
