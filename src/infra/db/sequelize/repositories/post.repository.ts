import { 
    AddPostRepository, 
    LoadPostByAccountIdRepository, 
    CountPostRepository,
    LoadAllPostRepository,
    CheckPostByDayRepository
} from '@/data/protocols/repository';
import { Post, Profile, Follow } from '@/infra/db/sequelize/models'

export class PostSqlServerRepository implements AddPostRepository, LoadPostByAccountIdRepository, CountPostRepository, LoadAllPostRepository, CheckPostByDayRepository {

    async add (params: AddPostRepository.Request): Promise<AddPostRepository.Result> {
        return await Post.create(params)
    }

    async loadByAccountId (params: LoadPostByAccountIdRepository.Request): Promise<LoadPostByAccountIdRepository.Result> {
        return await Post.findAll<Post>({
            where: {userId: params.accountId},
            include: [{
                model: Post
            }],
            offset:((params.page-1)*params.limit),
            limit : params.limit,
            order: [['createdAt', 'DESC']],
        })
    }

    async count (accountId: number): Promise<number> {
        return await Post.count({
            where: {
                userId: accountId
            }
        })
    }

    async load (params: LoadAllPostRepository.Request): Promise<LoadAllPostRepository.Result> {
        let include = []
        if (params.isFollowing === true) {
            include = [
                    {
                        model: Post
                    },
                    {
                        model: Profile,
                        required: true,
                        include: [
                            {
                                model: Follow,
                                as: 'following',
                                where: {
                                    userId: params.accountId
                                },
                                required: true
                            }
                        ]
                    }
                ]
        } else {
            include = [
                {
                    model: Post
                }
            ]
        }

        return await Post.findAll<Post>({
            include,
            order: [['createdAt', 'DESC']],
            offset:((params.page-1)*params.limit),
            limit : params.limit,
            subQuery: false
        })
    }

    async checkByDay (accountId: number): Promise<boolean> {
        const date = new Date()
        const today = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()+1}`
        return await Post.sequelize.query(`SELECT CAST(CASE WHEN COUNT(*) > 5 THEN 1 ELSE 0 END AS BIT) as limitPost
        FROM post.post p WHERE p.user_id = ${accountId} AND CAST(p.created_at AS DATE) = '${today}'`) as any
    }
}