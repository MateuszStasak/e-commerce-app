import * as process from 'node:process'

export const webEnv: IWebEnv = {
  isProd: process.env.ECOM_ENV === 'production',
  api: {
    gqlUrl: 'http://localhost:3333/graphql'
  },
  storage: {
    url: 'https://ecommerce-app.s3.eu-central-003.backblazeb2.com',
    endpoint: 'ecommerce-app.s3.eu-central-003.backblazeb2.com'
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
