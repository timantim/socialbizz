import {Action} from '@ngrx/store';

export enum SnackbarActionTypes {
  SNACKBAR_OPEN = '[Snackbar] Open',
  SNACKBAR_CLOSE = '[Snackbar] Close'
}

export class SnackbarOpen implements Action {
  readonly type = SnackbarActionTypes.SNACKBAR_OPEN;

  constructor(public payload: {message: string, duration?: number}) {}
}

export class SnackbarClose implements Action {
  readonly type = SnackbarActionTypes.SNACKBAR_CLOSE;
}

export type SnackbarActionsUnion =
  | SnackbarOpen
  | SnackbarClose
  ;
