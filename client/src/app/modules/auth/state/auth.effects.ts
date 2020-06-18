import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {
  AuthActionTypes,
  LogoutUser,
  LogoutUserSuccess,
  SetUserTokenToLocalStorage,
  UserLogin,
  UserLoginSuccess
} from './auth.actions';
import {map, switchMap} from 'rxjs/operators';
import {AuthService} from '../../../shared/services/auth.service';
import {Router} from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService, private router: Router) {}

  @Effect()
  login$ = this.actions$.pipe(
    ofType <UserLogin>(AuthActionTypes.USER_LOGIN),
    switchMap(action =>
      this.authService
        .login(action.payload)
        .then(result => new UserLoginSuccess(result.token))
    )
  );

  @Effect()
  loginUserSuccess$ = this.actions$.pipe(
    ofType<UserLoginSuccess>(AuthActionTypes.USER_LOGIN_SUCCESS),
    map(action => {
      this.router.navigate(['/dashboard']);
      return new SetUserTokenToLocalStorage(action.payload);
    })
  );

  @Effect({dispatch: false})
  setUserTokenToLocalStorage$ = this.actions$.pipe(
    ofType<SetUserTokenToLocalStorage>(AuthActionTypes.SET_USER_TOKEN_TO_LOCAL_STORAGE),
    map(action => localStorage.setItem('userToken', action.payload))
  );

  @Effect()
  logoutUser$ = this.actions$.pipe(
    ofType<LogoutUser>(AuthActionTypes.LOGOUT_USER),
    map(() => {
      this.router.navigate(['/sign-in']);
      localStorage.clear();
      return new LogoutUserSuccess();
    })
  );
}
