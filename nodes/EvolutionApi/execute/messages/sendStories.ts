import {
	IExecuteFunctions,
	IRequestOptions,
	IHttpRequestMethods,
	NodeOperationError,
} from 'n8n-workflow';
import { evolutionRequest } from '../evolutionRequest';

export async function sendStories(ef: IExecuteFunctions) {
	try {
		// Required parameters
		const instanceName = ef.getNodeParameter('instanceName', 0) as string;
		const content = ef.getNodeParameter('content', 0) as string;
		const type = ef.getNodeParameter('type', 0) as 'text' | 'image' | 'video' | 'audio';
		const caption = ef.getNodeParameter('caption', 0, '') as string;
		const allContacts = ef.getNodeParameter('allContacts', 0, false) as boolean;
		const backgroundColor = ef.getNodeParameter('backgroundColor', 0, '#000000') as string;
		const font = ef.getNodeParameter('font', 0, 1) as number;

		// Content URL validation for non-text types
		if (type !== 'text' && !content.startsWith('http') && !content.startsWith('data:')) {
			const errorData = {
				success: false,
				error: {
					message: 'Invalid content format',
					details: 'Content must be a valid URL or a base64',
					code: 'INVALID_CONTENT_FORMAT',
					timestamp: new Date().toISOString(),
				},
			};
			return {
				json: errorData,
				error: errorData,
			};
		}

		const body: any = {
			type,
			content,
			backgroundColor,
			font,
			allContacts
		};

		// Adds caption only for image or video
		if ((type === 'image' || type === 'video') && caption) {
			body.caption = caption;
		}

		// If not for all contacts, get the specific list
		if (!allContacts) {
			const statusJidList = ef.getNodeParameter('statusJidList', 0, '') as string;
			if (statusJidList) {
				body.statusJidList = statusJidList.split(',')
					.map(num => num.trim())
					.map(num => num.includes('@s.whatsapp.net') ? num : `${num}@s.whatsapp.net`);
			}
		}

		const requestOptions: IRequestOptions = {
			method: 'POST' as IHttpRequestMethods,
			headers: {
				'Content-Type': 'application/json',
			},
			uri: `/message/sendStatus/${instanceName}`,
			body,
			json: true,
		};

		const response = await evolutionRequest(ef, requestOptions);

		if (!response) {
			throw new Error('Empty server response');
		}

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
					: 'Error sending status',
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
