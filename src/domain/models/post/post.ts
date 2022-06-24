import { PostType } from '@/data/enums'

export interface PostModel {
    id?: number
    description: string
    userId: number
    originalPost?: number
    createdAt: Date
    type: PostType
    postRoot?: PostModel
}