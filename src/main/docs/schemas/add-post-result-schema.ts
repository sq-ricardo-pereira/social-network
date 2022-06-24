export const addPostResultSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'number'
        },
        description: {
            type: 'string'
        },
        createdAt: {
            type: 'string'
        },
        type: {
            type: 'number'
        }
    },
    required: ['id', 'description', 'createdAt', 'type']
}
  