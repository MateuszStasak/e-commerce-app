import * as process from 'node:process'

export const webEnv: IWebEnv = {
    isProd: process.env.ECOM_ENV === "produtction",
    api: {
        gqlUrl: process.env.ECOM_WEB_GQL_URL
    }
}

export interface IWebEnv {
    isProd: boolean;
    api: {
        gqlUrl: string;
    }
}