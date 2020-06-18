import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    accounts: [Account!]!
    account(id: ID!): Account!
  }

  extend type Mutation {
    createAccount(text: String!): Account!
    deleteAccount(id: ID!): Boolean!
  }

  type Account {
    id: ID!
    username: String!
    user: User!
  }
`;
