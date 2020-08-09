import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { AuthenticateInstagramUser, SettingsActionTypes } from './settings.actions';

@Injectable()
export class SettingsEffects {
  constructor(private actions$: Actions) {}

  @Effect()
  authenticateInstagramUser$ = this.actions$.pipe(
    ofType<AuthenticateInstagramUser>(SettingsActionTypes.AUTHENTICATE_INSTAGRAM_USER),
    map((action) => action)
  );
}
