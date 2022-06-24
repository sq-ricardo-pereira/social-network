export const followUserSchema = {
    type: 'object',
    properties: {
        followUserId: {
            type: 'number'
        }
    },
    required: ['followUserId']
}
