import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthError, ErrorsActionTypes, HttpError } from './errors.actions';
import { map } from 'rxjs/operators';
import { SnackbarOpen } from '../snackbar/snackbar.actions';

@Injectable()
export class ErrorsEffects {
  constructor(private actions$: Actions) {}

  @Effect()
  error$ = this.actions$.pipe(
    ofType<HttpError | AuthError>(ErrorsActionTypes.HTTP_ERROR, ErrorsActionTypes.AUTH_ERROR),
    map((message) => {
      console.error(message);
      return new SnackbarOpen({ message: 'An error has occurred!', duration: 10000 });
    })
  );
}
