export const unfollowUserSchema = {
    type: 'object',
    properties: {
        followId: {
            type: 'number'
        }
    },
    required: ['followId']
}
