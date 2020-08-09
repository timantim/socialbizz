import { Action } from '@ngrx/store';

export enum SettingsActionTypes {
  AUTHENTICATE_INSTAGRAM_USER = '[Settings] Authenticate Instagram User',
}

export class AuthenticateInstagramUser implements Action {
  readonly type = SettingsActionTypes.AUTHENTICATE_INSTAGRAM_USER;

  constructor(public payload: string) {}
}

export type SettingsActionsUnion = AuthenticateInstagramUser;
