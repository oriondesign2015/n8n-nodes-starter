// Based on: https://github.com/oriondesign2015/n8n-nodes-evolution-api
// Uses: https://github.com/EvolutionAPI/evolution-api
import {
	IExecuteFunctions,
	IRequestOptions,
	IHttpRequestMethods,
	NodeOperationError,
} from 'n8n-workflow';
import { evolutionRequest } from '../evolutionRequest';

export async function sendPoll(ef: IExecuteFunctions) {
	try {
		// Required parameters
		const instanceName = ef.getNodeParameter('instanceName', 0);
		const remoteJid = ef.getNodeParameter('remoteJid', 0);
		const pollTitle = ef.getNodeParameter('caption', 0);
		const options = ef.getNodeParameter('options_display.metadataValues', 0) as {
			optionValue: string;
		}[];

		// Opções adicionais
		const options_message = ef.getNodeParameter('options_message', 0, {}) as {
			delay?: number;
			quoted?: {
				messageQuoted: {
					messageId: string;
				};
			};
		};

		// Verifica se options é um array e não está vazio
		const pollOptions = Array.isArray(options) ? options.map((option) => option.optionValue) : [];

		if (pollOptions.length === 0) {
			const errorData = {
				success: false,
				error: {
					message: 'Opções da enquete inválidas',
					details: 'A enquete precisa ter pelo menos uma opção',
					code: 'INVALID_POLL_OPTIONS',
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
			name: pollTitle,
			selectableCount: 1,
			values: pollOptions,
		};

		// Adiciona delay se especificado
		if (options_message.delay) {
			body.delay = options_message.delay;
		}

		// Adiciona quoted se especificado
		if (options_message.quoted?.messageQuoted?.messageId) {
			body.quoted = {
				key: {
					id: options_message.quoted.messageQuoted.messageId,
				},
			};
		}

		const requestOptions: IRequestOptions = {
			method: 'POST' as IHttpRequestMethods,
			headers: {
				'Content-Type': 'application/json',
			},
			uri: `/message/sendPoll/${instanceName}`,
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
					: 'Error sending poll',
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
