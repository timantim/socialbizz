import { Injectable } from '@angular/core';
import {
  RegistrationConfirmInput,
  SignInResult,
  SignUpResult,
  User,
  UserLoginInput,
  UserRegisterInput,
} from '../models/auth.model';
import { Auth } from 'aws-amplify';

@Injectable()
export class AuthService {
  login(input: UserLoginInput): Promise<SignInResult> {
    return Auth.signIn(input.login, input.password);
  }

  register(input: UserRegisterInput): Promise<SignUpResult> {
    return Auth.signUp(input.email, input.password);
  }

  registerConfirm(input: RegistrationConfirmInput): Promise<void> {
    return Auth.confirmSignUp(input.email, input.code);
  }

  getUser(): Promise<User | void> {
    return Auth.currentAuthenticatedUser()
      .then((user) => {
        return { username: user.getUsername(), email: user.attributes && user.attributes.email };
      })
      .catch(() => null);
  }

  logout(): Promise<void> {
    return Auth.signOut();
  }
}
