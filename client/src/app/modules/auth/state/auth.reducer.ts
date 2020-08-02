import { AuthActionsUnion, AuthActionTypes } from './auth.actions';
import { User } from '../../../shared/models/auth.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../../../state';

export interface UserState {
  userToken: string;
  user: User;
  loading: boolean;
}

export const initialUserState: UserState = {
  userToken: '',
  user: null,
  loading: false,
};

export function userReducer(state: UserState = initialUserState, action: AuthActionsUnion): UserState {
  switch (action.type) {
    case AuthActionTypes.USER_LOGIN: {
      return {
        ...state,
        loading: true,
      };
    }
    case AuthActionTypes.USER_LOGIN_SUCCESS: {
      return {
        ...state,
        userToken: action.payload,
        loading: false,
      };
    }
    case AuthActionTypes.LOAD_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case AuthActionTypes.LOGOUT_USER_SUCCESS: {
      return {
        ...state,
        user: null,
      };
    }
    default: {
      return state;
    }
  }
}

const selectUserState = createFeatureSelector<State, UserState>('userState');

export const selectUser = () => createSelector(selectUserState, (state) => state.user);
