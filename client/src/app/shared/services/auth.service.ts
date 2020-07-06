import {Injectable} from '@angular/core';
import gql from 'graphql-tag';
import {ApolloQueryResult} from 'apollo-client';
import {Apollo} from 'apollo-angular';
import {SignInResult, User, UserInput} from '../models/auth.model';
import {AmplifyService} from 'aws-amplify-angular';

@Injectable()
export class AuthService {
  constructor(private graphQlService: Apollo, public amplify: AmplifyService) {}

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

  getUser(): Promise<User | void> {
    return this.amplify.auth().currentAuthenticatedUser().then(user => ({username: user.getUsername() })).catch(console.log);
  }
}
