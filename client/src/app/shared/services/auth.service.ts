import {Injectable} from '@angular/core';
import gql from 'graphql-tag';
import {ApolloQueryResult} from 'apollo-client';
import {Apollo} from 'apollo-angular';
import {SignInResult, User, UserInput} from '../models/auth.model';

@Injectable()
export class AuthService {
  constructor(private graphQlService: Apollo) {}

  static getUserTokenFromLocalStorage(): string {
    return localStorage.getItem('userToken') || '';
  }

  login(input: UserInput): Promise<SignInResult> {
    return this.graphQlService.mutate({
      mutation: gql`
        mutation($login: String!, $password: String!) {
          signIn(login: $login, password: $password) {
            token
          }
        }
      `,
      variables: {
        login: input.login,
        password: input.password
      }
    }).toPromise().then((result: ApolloQueryResult<{signIn: SignInResult}>) => result.data.signIn);
  }

  getUser(): Promise<User> {
    return this.graphQlService.query({
      query: gql`
        query($token: String!){
          user(token: $token) {
            id
            username
            email
          }
        }
      `,
      variables: {
        token: AuthService.getUserTokenFromLocalStorage()
      }
    }).toPromise().then((result: ApolloQueryResult<{user: User}>) => result.data.user);
  }
}
