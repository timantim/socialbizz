import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { ExchangeInstagramCodeForToken, SettingsActionTypes } from './settings.actions';
import { InstagramApiWrapperService } from '../../../shared/services/instagram-api-wrapper.service';

@Injectable()
export class SettingsEffects {
  constructor(private actions$: Actions, private instagramApiWrapperService: InstagramApiWrapperService) {}

  @Effect({dispatch: false})
  authenticateInstagramUser$ = this.actions$.pipe(
    ofType<ExchangeInstagramCodeForToken>(SettingsActionTypes.EXCHANGE_INSTAGRAM_CODE_FOR_TOKEN),
    map(action => this.instagramApiWrapperService.exchangeCodeForToken(action.payload).subscribe(console.log)),
  );
}
