export const postResultSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'number'
        },
        description: {
            type: 'string'
        },
        originalPost: {
            type: 'number'
        },
        type: {
            type: 'number'
        },
        userId: {
            type: 'number'
        },
        createdAt: {
            type: 'string', 
            format: 'date-time', 
        },
        postRoot: {
            type: 'array',
            items: {
                "$ref": "#/schemas/post" 
            }
        }
    },
}
