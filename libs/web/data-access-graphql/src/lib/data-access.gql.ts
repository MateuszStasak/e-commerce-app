import { gql } from 'graphql-request'

const GET_USERS = gql`
    query GetUsers {
        users {
            id
            email
            name
        }
    }
`

const CREATE_USER = gql`
    mutation CreateUser {
    createUser(
        data: {
            password: "Password1",
            name: "Matt S",
            email: "matt@test.com"
        }
    ) {
        name
        id
        email
    }
}
`


