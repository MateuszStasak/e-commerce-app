import { getGraphqlClient } from '@e-commerce-app/web/data-access-graphql'

export const gql = getGraphqlClient('http://localhost:3333/graphql');