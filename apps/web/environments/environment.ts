import * as process from 'node:process'

export const webEnv: IWebEnv = {
  isProd: process.env.ECOM_ENV === 'production',
  api: {
    gqlUrl: process.env.ECOM_WEB_GQL_URL
  },
  storage: {
    url: process.env.ECOM_WEB_STORAGE_URL,
    endpoint: process.env.ECOM_WEB_STORAGE_ENDPOINT
  }
}

export interface IWebEnv {
  isProd: boolean
  api: {
    gqlUrl: string
  }
  storage: {
    url: string
    endpoint: string
  }
}
