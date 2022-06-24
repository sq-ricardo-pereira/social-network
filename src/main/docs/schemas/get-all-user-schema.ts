export const getAllUserSchema = {
    type: 'array',
    items: {
        $ref: '#/schemas/userFollow'
    }
}