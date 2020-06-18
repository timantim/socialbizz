import {Action} from '@ngrx/store';
import {User, UserInput} from '../../../shared/models/auth.model';

export enum AuthActionTypes {
  USER_LOGIN = '[Auth] Login',
  USER_LOGIN_SUCCESS = '[Auth] Login Success',
  SET_USER_TOKEN_TO_LOCAL_STORAGE = '[Auth] Set user token to local storage',
  LOAD_USER_SUCCESS = '[Auth] Load User Success',
  LOGOUT_USER = '[Auth] Logout',
  LOGOUT_USER_SUCCESS = '[Auth] Logout Success'
}

export class UserLogin implements Action {
  readonly type = AuthActionTypes.USER_LOGIN;

  constructor(public payload: UserInput) {}
}

export class UserLoginSuccess implements Action {
  readonly type = AuthActionTypes.USER_LOGIN_SUCCESS;

  constructor(public payload: string) {}
}

export class SetUserTokenToLocalStorage implements Action {
  readonly type = AuthActionTypes.SET_USER_TOKEN_TO_LOCAL_STORAGE;

  constructor(public payload: string) {}
}

export class LoadUserSuccess implements Action {
  readonly type = AuthActionTypes.LOAD_USER_SUCCESS;

  constructor(public payload: User) {}
}

export class LogoutUser implements Action {
  readonly type = AuthActionTypes.LOGOUT_USER;
}

export class LogoutUserSuccess implements Action {
  readonly type = AuthActionTypes.LOGOUT_USER_SUCCESS;
}

export type AuthActionsUnion =
  | UserLogin
  | UserLoginSuccess
  | SetUserTokenToLocalStorage
  | LoadUserSuccess
  | LogoutUser
  | LogoutUserSuccess
  ;
