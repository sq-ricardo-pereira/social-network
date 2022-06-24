export const getAllPostSchema = {
    type: 'array',
    items: {
        $ref: '#/schemas/postResult'
    }
}
