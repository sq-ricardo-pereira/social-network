import { Table, Column, Model, PrimaryKey, AutoIncrement, BelongsTo, ForeignKey } from 'sequelize-typescript'

import { FollowModel } from '@/domain/models'
import { Profile } from './profile' 

@Table({modelName: 'follow', schema: 'customer', freezeTableName: true, timestamps: false})
export class Follow extends Model<FollowModel> implements FollowModel {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number

    @ForeignKey(() => Profile)
    @Column({field: 'user_id'})
    userId: number 

    @ForeignKey(() => Profile)
    @Column({field: 'follow_user_id'})
    followUserId: number

    @BelongsTo(type => Profile, {foreignKey: 'user_id', as: 'follower'})
    follower: Profile

    @BelongsTo(type => Profile, {foreignKey: 'follow_user_id', as: 'following'})
    following: Profile 
}
