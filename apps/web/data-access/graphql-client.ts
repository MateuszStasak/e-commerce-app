import { getGraphqlClient } from '@e-commerce-app/web/data-access-graphql'
import { webEnv } from '../environments/environment'

const { api } = webEnv

export const gql = getGraphqlClient(api.gqlUrl)
