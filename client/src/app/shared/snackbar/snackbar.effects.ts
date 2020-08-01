import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { SnackbarActionTypes, SnackbarOpen } from './snackbar.actions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class SnackbarEffects {
  constructor(private actions$: Actions, private snackBar: MatSnackBar) {}

  @Effect({ dispatch: false })
  snackbarOpen$ = this.actions$.pipe(
    ofType<SnackbarOpen>(SnackbarActionTypes.SNACKBAR_OPEN),
    map((action) =>
      this.snackBar.open(action.payload.message, null, {
        duration: action.payload.duration || 2500,
        verticalPosition: 'top',
      })
    )
  );
}
