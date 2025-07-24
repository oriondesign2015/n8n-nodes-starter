// Based on: https://github.com/oriondesign2015/n8n-nodes-evolution-api
// Uses: https://github.com/EvolutionAPI/evolution-api
import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class EvolutionApi implements ICredentialType {
       name = 'evolutionApi';
       displayName = 'Zapin Evo';
       documentationUrl = 'https://doc.evolution-api.com/v2/api-reference/get-information';
	properties: INodeProperties[] = [
               {
                       displayName: 'Server URL',
                       name: 'server-url',
                       type: 'hidden',
                       default: 'https://api.zapin.tech',
                       description: 'Server URL for Zapin Evo',
               },
		{
			displayName: 'API Key',
			name: 'apikey',
			type: 'string',
			default: '',
			typeOptions: {
				password: true,
			},
                       description: 'Enter the instance or global Zapin Evo API key',
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
