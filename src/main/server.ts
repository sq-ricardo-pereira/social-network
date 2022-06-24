import 'module-alias/register'
import env from '@/main/config/env'
import { sqlServerConnection } from '@/infra/db/sequelize/config'
import app from './config/app'

const init = async (): Promise<void> => {
  try {
      await sqlServerConnection.sync()
      app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
  } catch (error) {
      console.error(error)
      process.exit()
  }
} 

void init()