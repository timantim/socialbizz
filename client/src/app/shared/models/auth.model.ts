export class UserInput {
  login: string;
  password: string;
}

export class User {
  id: number;
  username: string;
  email: string;
}

export class SignInResult {
  token: string;
}
