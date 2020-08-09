import { SettingsActionsUnion } from './settings.actions';
import { createFeatureSelector } from '@ngrx/store';
import { State } from '../../../state';

export interface SettingsState {
  loading: boolean;
}

export const initialSettingsState: SettingsState = {
  loading: false,
};

export function settingsReducer(
  state: SettingsState = initialSettingsState,
  action: SettingsActionsUnion
): SettingsState {
  switch (action.type) {
    default: {
      return state;
    }
  }
}

const selectSettingsState = createFeatureSelector<State, SettingsState>('settingsState');
