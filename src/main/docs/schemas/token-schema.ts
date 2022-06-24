export const tokenParamsSchema = {
    type: 'object',
    properties: {
        accountId: {
            type: 'string'
        },
    },
    required: ['accountId']
}