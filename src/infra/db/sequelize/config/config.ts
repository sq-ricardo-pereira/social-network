import { Sequelize } from 'sequelize-typescript';

import env from '@/main/config/env'
import {
    Profile,
    Post,
    Follow
} from '@/infra/db/sequelize/models'

export const sqlServerConnection = new Sequelize({
    dialect: 'mssql',
    host: env.database.host,
    username: env.database.username,
    password: env.database.password,
    database: env.database.database,
    logging: env.database.logging,
    models: [
        Profile,
        Post,
        Follow
    ]
});