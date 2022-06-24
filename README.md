# Social Network


## How to run project
### Database
```
docker pull mcr.microsoft.com/mssql/server:2019-latest
docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=YourStrong@Password" -p 1433:1433 --name sql1 --hostname sql1 -d mcr.microsoft.com/mssql/server:2019-latest

```
after install create database socialnetwork

### Run migration
```
npx sequelize-cli db:migrate
```

### Run project
```
npm install
npm run build
npm run start
```

### Run seeder to create users
```
npx sequelize-cli db:seed --seed 20220615201330-create-users.js
```

### Create different post
```
types
1 = default
2 = repost
3 = quote

if you would like create repost ou quote you need to send the originalPost
```

### Swagger
```
http://localhost:5050/api-docs
```
#### Generate you token
Choose one user id, generate your token and set it in Authorize

