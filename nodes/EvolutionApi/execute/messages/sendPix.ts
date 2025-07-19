import {
	IExecuteFunctions,
	IRequestOptions,
	IHttpRequestMethods,
	NodeOperationError,
} from 'n8n-workflow';
import { evolutionRequest } from '../evolutionRequest';

export async function sendPix(ef: IExecuteFunctions) {
	try {
		// Required parameters
		const instanceName = ef.getNodeParameter('instanceName', 0) as string;
		const remoteJid = ef.getNodeParameter('remoteJid', 0) as string;
		const name = ef.getNodeParameter('name', 0) as string;
		const keyType = ef.getNodeParameter('keyType', 0) as string;
		const key = ef.getNodeParameter('key', 0) as string;

		// PIX key type validation
		const validKeyTypes = ['cpf', 'cnpj', 'email', 'phone', 'random'];
		if (!validKeyTypes.includes(keyType)) {
			const errorData = {
				success: false,
				error: {
					message: 'Invalid PIX key type',
					details: 'The PIX key type must be: cpf, cnpj, email, phone or random',
					code: 'INVALID_PIX_KEY_TYPE',
					timestamp: new Date().toISOString(),
				},
			};
			return {
				json: errorData,
				error: errorData,
			};
		}

		const body: any = {
			number: remoteJid,
			buttons: [
				{
					type: 'pix',
					currency: 'BRL',
					name,
					keyType,
					key,
				},
			],
		};

		const requestOptions: IRequestOptions = {
			method: 'POST' as IHttpRequestMethods,
			headers: {
				'Content-Type': 'application/json',
			},
			uri: `/message/sendButtons/${instanceName}`,
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
					: 'Error sending PIX button',
				details: error.message.includes('Could not get parameter')
					? 'Check if all required fields have been filled correctly'
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
