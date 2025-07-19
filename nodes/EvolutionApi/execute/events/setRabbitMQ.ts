import {
	IExecuteFunctions,
	IRequestOptions,
	IHttpRequestMethods,
	NodeOperationError,
} from 'n8n-workflow';
import { evolutionRequest } from '../evolutionRequest';

export async function setRabbitMQ(ef: IExecuteFunctions) {
	try {
		const instanceName = ef.getNodeParameter('instanceName', 0);
		const resourceForRabbitMQ = ef.getNodeParameter('resourceForRabbitMQ', 0);

		let options: IRequestOptions;

		if (resourceForRabbitMQ === 'setRabbitMQ') {
			const enabled = ef.getNodeParameter('enabled', 0);
			const rabbitMQEvents = ef.getNodeParameter('rabbitMQEvents', 0) || [];

			const body = {
				rabbitmq: {
					enabled: enabled,
					events: rabbitMQEvents,
				},
			};

			options = {
				method: 'POST' as IHttpRequestMethods,
				uri: `/rabbitmq/set/${instanceName}`,
				body,
				json: true,
			};
		} else if (resourceForRabbitMQ === 'findRabbitMQ') {
			options = {
				method: 'GET' as IHttpRequestMethods,
				uri: `/rabbitmq/find/${instanceName}`,
				json: true,
			};
		} else {
			const errorData = {
				success: false,
				error: {
					message: 'Unrecognized RabbitMQ operation',
					details: 'The requested operation is not valid for the RabbitMQ resource',
					code: 'INVALID_OPERATION',
					timestamp: new Date().toISOString(),
				},
			};
			throw new NodeOperationError(ef.getNode(), errorData.error.message, {
				message: errorData.error.message,
				description: errorData.error.details,
			});
		}

		const response = await evolutionRequest(ef, options);
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
					: 'Error configuring RabbitMQ',
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
