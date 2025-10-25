import { INodeProperties } from 'n8n-workflow';

// Opções da etiquetas-api (Etiquetas)
export const ticketsOperationsOptions: INodeProperties = {
    displayName: 'Etiquetas',
    name: 'etiquetas',
    type: 'options',
    noDataExpression: true,
    displayOptions: {
        show: {
            resource: ['etiquetas-api'], // Value do Resource
        },
    },
    options: [

        // Opção = Verificar Etiquetas
        {
            name: 'Verificar Etiquetas',
            action: 'Verificar Etiquetas',
            description: 'Verificar Etiquetas de whatsapp',
            value: 'ticket-verify-label',
        },


        // Opção = Adicionar Etiqueta
        {
            name: 'Adicionar Etiqueta',
            action: 'Adicionar Etiqueta',
            description: 'Adiciona uma etiqueta a numero de whatsapp',
            value: 'ticket-add-label',
        },

        // Opção = Remover Etiqueta
        {
            name: 'Remover Etiqueta',
            action: 'Remover Etiqueta',
            description: 'Remover uma etiqueta a numero de whatsapp',
            value: 'ticket-remove-label',
        }
    ],
    // Definindo como padrão a opção "Verificar Etiquetas"
    default: 'ticket-verify-label',
};
