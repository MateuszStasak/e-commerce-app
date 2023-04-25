import * as process from 'node:process'

export const apiEnv: IApiEnv = {
  isProd: process.env.ECOM_ENV === 'production',
  api: {
    port: 333
  },
  db: {
    url: "postgresql://postgres:KiaraINala12@db.seigdfcnfbuhlupdgjsm.supabase.co:5432/postgres?schema=public"
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
