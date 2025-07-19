import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class EvolutionApi implements ICredentialType {
	name = 'evolutionApi';
	displayName = 'Evolution API';
	documentationUrl = 'https://doc.evolution-api.com/';
	properties: INodeProperties[] = [
		{
			displayName: 'Server Url',
			name: 'server-url',
			type: 'string',
			default: '',
			placeholder: 'https://example.com',
			description: 'Enter the full URL of your Evolution API (e.g., https://api.example.com)',
		},
		{
			displayName: 'ApiKey',
			name: 'apikey',
			type: 'string',
			default: '',
			typeOptions: {
				password: true,
			},
			description: 'Enter the instance or Global ApiKey of your Evolution API',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				apikey: '={{$credentials.apikey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials["server-url"]}}',
			url: '={{$credentials["server-url"].endsWith("/") ? "/erro" : "/instance/fetchInstances"}}',
			method: 'GET',
			headers: {
				apikey: '={{$credentials.apikey}}',
			},
		},
	};
}
