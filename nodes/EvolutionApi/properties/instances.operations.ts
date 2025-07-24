// Based on: https://github.com/oriondesign2015/n8n-nodes-evolution-api
// Uses: https://github.com/EvolutionAPI/evolution-api
import { INodeProperties } from 'n8n-workflow';

// Opções da instances-api (Instancias)
export const instancesOperationsOptions: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['instances-api'], // Value do Resource
		},
	},

	// Opções que serão vinculadas a Operação "Instancia"
	options: [
		// Opção = Criar instancia
		{
			// Create Instance Basic
			name: 'Create Instance',
			action: 'Create instance',
			description: 'Creates a new instance',
			value: 'instance-basic',
		},

		// Opção = Conectar Instância
		{
			// Instance Connect
			name: 'Connect Instance',
			action: 'Connect instance',
			description: 'Generate a connection for an instance (QR or Base64)',
			value: 'instance-connect',
		},

		// Opção = Buscar Instancia
		{
			// Fetch Instances
			name: 'Fetch Instances',
			action: 'Fetch instances',
			description: 'Fetch and list created instances',
			value: 'fetch-instances',
		},

		// Opção = Definir Comportamento da instancia
		{
			name: 'Set Behavior',
			action: 'Set behavior',
			description: 'Define the instance behavior',
			value: 'instance-settings',
		},

		// Opção = Definir presença
		{
			// Set Presence
			name: 'Set Presence',
			action: 'Set presence',
			description: 'Set presence on the instance',
			value: 'set-presence',
		},

		// Opção = Definit Proxy
		{
			// Set/find Proxy
			name: 'Set/Get Proxy',
			action: 'Proxy',
			description: 'Configure or fetch instance proxy',
			value: 'set-proxy',
		},

		// Opção = Reiniciar instancia
		{
			// Restart Instance
			name: 'Restart Instance',
			action: 'Restart instance',
			description: 'Restart the instance socket',
			value: 'restart-instance',
		},

		// Opção = Desconectar instancia
		{
			// Logout Instance
			name: 'Disconnect Instance',
			action: 'Disconnect instance',
			description: 'Disconnect WhatsApp from the instance',
			value: 'logout-instance',
		},

		// Opção = Deletar instancia
		{
			// Delete Instance
			name: 'Delete Instance',
			action: 'Delete instance',
			description: 'Delete an instance',
			value: 'delete-instance',
		},
	],
	// Set "Create Instance" as the default option
	default: 'instance-basic',
};
