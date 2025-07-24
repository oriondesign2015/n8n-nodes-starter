// Based on: https://github.com/oriondesign2015/n8n-nodes-evolution-api
// Uses: https://github.com/EvolutionAPI/evolution-api
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
            description: 'Fetch profile information',
            action: 'Fetch profile',
        },
        {
            name: 'Fetch Business Profile',
            value: 'fetch-business-profile',
            description: 'Fetch business profile information',
            action: 'Fetch business profile',
        },
        {
                                        name: 'Update Profile Name',
                                        value: 'update-profile-name',
                                        description: 'Update the profile name',
                                        action: 'Update profile name',
        },
        {
                                        name: 'Update Status',
            value: 'update-profile-status',
            description: 'Update the profile status',
            action: 'Update profile status',
                                        },
        {
                                        name: 'Update Profile Picture',
            value: 'update-profile-picture',
            description: 'Update the profile picture',
            action: 'Update profile picture',
                                        },
        {
                                        name: 'Remove Profile Picture',
                                        value: 'remove-profile-picture',
                                        description: 'Remove the profile picture',
                                        action: 'Remove profile picture',
        },
                                {
                                                name: 'Fetch Privacy Settings',
                                                value: 'fetch-privacy-settings',
                                                description: 'Fetch instance privacy settings',
                                                action: 'Fetch privacy settings',
                                },
        {
            name: 'Update Privacy Settings',
            value: 'update-privacy-settings',
            description: 'Update instance privacy settings',
            action: 'Update privacy settings',
        },
    ],
    default: 'fetch-profile',
};
