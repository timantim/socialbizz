import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { userReducer, UserState } from '../modules/auth/state/auth.reducer';

export interface State {
  userState: UserState;
}

export const reducers: ActionReducerMap<State> = {
  userState: userReducer,
};

export const metaReducers: Array<MetaReducer<State>> = [];
