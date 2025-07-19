import {
	IExecuteFunctions,
	IRequestOptions,
	IHttpRequestMethods,
	NodeOperationError,
} from 'n8n-workflow';
import { evolutionRequest } from '../evolutionRequest';

export async function sendContact(ef: IExecuteFunctions) {
	try {
		// Required parameters
		const instanceName = ef.getNodeParameter('instanceName', 0);
		const remoteJid = ef.getNodeParameter('remoteJid', 0);
		const contacts = ef.getNodeParameter('contacts.contactValues', 0) as {
			fullName: string;
			wuid: string;
			phoneNumber: string;
			organization?: string;
			email?: string;
			url?: string;
		}[];

		// Contact validation
		if (!Array.isArray(contacts) || contacts.length === 0) {
			const errorData = {
				success: false,
				error: {
					message: 'Invalid contact list',
					details: 'You must provide at least one contact',
					code: 'INVALID_CONTACTS',
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
			contact: contacts.map(contact => ({
				fullName: contact.fullName,
				wuid: contact.wuid,
				phoneNumber: contact.phoneNumber,
				...(contact.organization && { organization: contact.organization }),
				...(contact.email && { email: contact.email }),
				...(contact.url && { url: contact.url }),
			})),
		};

		const requestOptions: IRequestOptions = {
			method: 'POST' as IHttpRequestMethods,
			headers: {
				'Content-Type': 'application/json',
			},
			uri: `/message/sendContact/${instanceName}`,
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
					: 'Error sending contact',
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
