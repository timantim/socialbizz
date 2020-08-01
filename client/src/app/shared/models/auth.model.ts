import { CognitoUser } from 'amazon-cognito-identity-js';

export class UserLoginInput {
  login: string;
  password: string;
}

export class UserRegisterInput {
  email: string;
  username: string;
  password: string;
}

export class User {
  id?: number;
  username: string;
  email?: string;
}

export class SignInResult {
  token: string;
}

export class SignUpResult {
  user: CognitoUser;
  userConfirmed: boolean;
}

export class RegistrationConfirmInput {
  email: string;
  code: string;
}
