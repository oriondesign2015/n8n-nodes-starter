// Based on: https://github.com/oriondesign2015/n8n-nodes-evolution-api
// Uses: https://github.com/EvolutionAPI/evolution-api
import {
	IExecuteFunctions,
	IRequestOptions,
	IHttpRequestMethods,
	NodeOperationError,
} from 'n8n-workflow';
import { evolutionRequest } from '../evolutionRequest';

export async function sendReaction(ef: IExecuteFunctions) {
	try {
		// Required parameters
		const instanceName = ef.getNodeParameter('instanceName', 0) as string;
		const remoteJid = ef.getNodeParameter('remoteJid', 0) as string;
		const messageId = ef.getNodeParameter('messageId', 0) as string;
		const fromMe = ef.getNodeParameter('fromMe', 0) as boolean;
		const reaction = ef.getNodeParameter('reaction', 0) as string;

		// Validação da reação
		if (!reaction) {
			const errorData = {
				success: false,
				error: {
					message: 'Reação inválida',
					details: 'É necessário fornecer um emoji para a reação',
					code: 'INVALID_REACTION',
					timestamp: new Date().toISOString(),
				},
			};
			return {
				json: errorData,
				error: errorData,
			};
		}

		const body: any = {
			key: {
				remoteJid,
				fromMe,
				id: messageId,
			},
			reaction,
		};

		const requestOptions: IRequestOptions = {
			method: 'POST' as IHttpRequestMethods,
			headers: {
				'Content-Type': 'application/json',
			},
			uri: `/message/sendReaction/${instanceName}`,
			body,
			json: true,
		};

		const response = await evolutionRequest(ef, requestOptions);
		return {
			json: {
				success: true,
				data: response,
			},
		};
	} catch (error) {
		const errorData = {
			success: false,
			error: {
				message: error.message.includes('Could not get parameter')
					? 'Invalid or missing parameters'
					: 'Error sending reaction',
				details: error.message.includes('Could not get parameter')
					? 'Check that all required fields are filled correctly'
					: error.message,
				code: error.code || 'UNKNOWN_ERROR',
				timestamp: new Date().toISOString(),
			},
		};

		if (!ef.continueOnFail()) {
			throw new NodeOperationError(ef.getNode(), error.message, {
				message: errorData.error.message,
				description: errorData.error.details,
			});
		}

		return {
			json: errorData,
			error: errorData,
		};
	}
}
