import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, HasMany } from 'sequelize-typescript'

import { ProfileModel } from '@/domain/models'
import { Post, Follow } from '@/infra/db/sequelize/models'

@Table({modelName: 'profile', schema: 'customer', freezeTableName: true, timestamps: false})
export class Profile extends Model<ProfileModel> implements ProfileModel {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number

    @Column({field: 'user_name', type: DataType.STRING(14)})
    userName: string

    @Column({field: 'date_joined'})
    dateJoined: Date

    @Column({field: 'first_name', type: DataType.STRING(50)})
    firstName: string

    @Column({field: 'last_name', type: DataType.STRING(50)})
    lastName: string

    @HasMany(() => Post)
    posts: Post[]

    @HasMany(() => Follow, 'user_id')
    follower: Follow[]

    @HasMany(() => Follow, 'follow_user_id')
    following: Follow[]
}
