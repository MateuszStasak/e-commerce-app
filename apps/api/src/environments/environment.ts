import * as process from 'node:process'

export const apiEnv: IApiEnv = {
  isProd: process.env.ECOM_ENV === 'production',
  api: {
    port: process.env.ECOM_API_PORT
  },
  db: {
    url: process.env.ECOM_DB_URL
  }
}

export interface IApiEnv {
  isProd: boolean
  api: {
    port: number
  }
  db: {
    url: string
  }
}
