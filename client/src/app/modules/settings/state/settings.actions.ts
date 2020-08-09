import { Action } from '@ngrx/store';

export enum SettingsActionTypes {
  EXCHANGE_INSTAGRAM_CODE_FOR_TOKEN = '[Settings] Exchange Instagram Code To Token',
}

export class ExchangeInstagramCodeForToken implements Action {
  readonly type = SettingsActionTypes.EXCHANGE_INSTAGRAM_CODE_FOR_TOKEN;

  constructor(public payload: string) {}
}

export type SettingsActionsUnion = ExchangeInstagramCodeForToken;
