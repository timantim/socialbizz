import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {userReducer, UserState} from '../modules/auth/state/auth.reducer';

export interface State {
  user: UserState;
}

export const reducers: ActionReducerMap<State> = {
  user: userReducer
};

export const metaReducers: Array<MetaReducer<State>> = [];
