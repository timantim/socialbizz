import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {
  AuthActionTypes,
  LogoutUser,
  LogoutUserSuccess,
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

  @Effect({dispatch: false})
  loginUserSuccess$ = this.actions$.pipe(
    ofType<UserLoginSuccess>(AuthActionTypes.USER_LOGIN_SUCCESS),
    map(() =>
      this.router.navigate(['/dashboard'])
    )
  );

  @Effect()
  logoutUser$ = this.actions$.pipe(
    ofType<LogoutUser>(AuthActionTypes.LOGOUT_USER),
    switchMap(() =>
      this.authService
        .logout()
        .then(() => new LogoutUserSuccess())
    )
  );

  @Effect({dispatch: false})
  logoutUserSuccess$ = this.actions$.pipe(
    ofType<LogoutUserSuccess>(AuthActionTypes.LOGOUT_USER_SUCCESS),
    map(() =>
    this.router.navigate(['/sign-in']))
  );
}
