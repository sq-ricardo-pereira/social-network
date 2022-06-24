export default {
    mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/socialnetwork',
    port: process.env.PORT || '5050',
    database: {
        host: process.env.DATABASE_HOST || 'localhost',
        username: process.env.DATABASE_USER_NAME || 'sa',
        password: process.env.DATABASE_PASSWORD || 'YourStrong@Password',
        database: process.env.DATABASE_NAME || 'socialnetwork',
        logging: false,
    },
    jwtSecret: process.env.JWT_SECRET || 'socialnetwork2022#@!=rp'
}
