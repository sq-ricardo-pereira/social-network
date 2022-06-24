module.exports = {
  username: process.env.DATABASE_USER_NAME || 'sa',
  password: process.env.DATABASE_PASSWORD || 'YourStrong@Password',
  database: process.env.DATABASE_NAME || 'socialnetwork',
  host: process.env.DATABASE_HOST || 'localhost',
  port: 1433,
  dialect: 'mssql',
  dialectOptions: {
    options: {
      enableArithAbort: true,
      requestTimeout: 100000,
      useUTC: false, //for reading from database
      dateStrings: true,
      typeCast: function (field, next) { // for reading from database
        if (field.type === 'DATETIME') {
          return field.string()
        }
        return next()
      },
    },
  }
}
