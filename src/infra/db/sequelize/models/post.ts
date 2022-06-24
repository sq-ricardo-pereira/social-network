import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript'

import { PostModel } from '@/domain/models'
import { Profile } from './profile' 
import { PostType } from '@/data/enums'

@Table({modelName: 'post', schema: 'post', freezeTableName: true, timestamps: false})
export class Post extends Model<PostModel> implements PostModel {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number

    @Column({type: DataType.STRING(777)})
    description: string

    @ForeignKey(() => Profile)
    @Column({field: 'user_id'})
    userId: number

    @ForeignKey(() => Post)
    @Column({field: 'original_post'})
    originalPost: number
 
    @Column({ field: 'created_at' })
    createdAt: Date

    @Column
    type: PostType

    @BelongsTo(type => Profile, {targetKey: 'id'})
    profile?: Profile

    @BelongsTo(() => Post, {targetKey: 'id' })
    postRoot?: Post 
}
