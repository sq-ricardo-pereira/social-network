export const addPostParamsSchema = {
    type: 'object',
    properties: {
      description: {
        type: 'string'
      },
      originalPost: {
        type: 'number'
      },
      type: {
        type: 'number'
      }
    },
    required: ['description', 'type']
  }
  