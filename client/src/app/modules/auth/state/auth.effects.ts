import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  AuthActionTypes,
  LogoutUser,
  LogoutUserSuccess,
  UserLogin,
  UserLoginSuccess,
  UserRegister,
  UserRegisterConfirm,
  UserRegisterConfirmSuccess,
  UserRegisterSuccess,
} from './auth.actions';
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { SnackbarOpen } from '../../../shared/snackbar/snackbar.actions';
import { HttpError } from '../../../shared/errors/errors.actions';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService, private router: Router) {}

  @Effect()
  login$ = this.actions$.pipe(
    ofType<UserLogin>(AuthActionTypes.USER_LOGIN),
    switchMap((action) =>
      this.authService
        .login(action.payload)
        .then((result) => new UserLoginSuccess(result.token))
        .catch((err) => new HttpError(err))
    )
  );

  @Effect({ dispatch: false })
  loginUserSuccess$ = this.actions$.pipe(
    ofType<UserLoginSuccess>(AuthActionTypes.USER_LOGIN_SUCCESS),
    map(() => this.router.navigate(['/dashboard']))
  );

  @Effect()
  registerUser$ = this.actions$.pipe(
    ofType<UserRegister>(AuthActionTypes.USER_REGISTER),
    switchMap((action) =>
      this.authService
        .register(action.payload)
        .then(() => new UserRegisterSuccess())
        .catch((err) => new HttpError(err))
    )
  );

  @Effect()
  registerUserSuccess$ = this.actions$.pipe(
    ofType<UserRegisterSuccess>(AuthActionTypes.USER_REGISTER_SUCCESS),
    map(() => {
      this.router.navigate(['/confirm-register']);
      return new SnackbarOpen({ message: 'Membership registration successful!' });
    })
  );

  @Effect()
  registerUserConfirm$ = this.actions$.pipe(
    ofType<UserRegisterConfirm>(AuthActionTypes.USER_REGISTER_CONFIRM),
    map((action) =>
      this.authService
        .registerConfirm(action.payload)
        .then(() => this.router.navigate(['/sign-in']))
        .catch((err) => new HttpError(err))
    )
  );

  @Effect()
  registerUserConfirmSuccess$ = this.actions$.pipe(
    ofType<UserRegisterConfirmSuccess>(AuthActionTypes.USER_REGISTER_CONFIRM_SUCCESS),
    map(() => {
      this.router.navigate(['/sign-in']);
      return new SnackbarOpen({ message: 'Your account is now verified!' });
    })
  );

  @Effect()
  logoutUser$ = this.actions$.pipe(
    ofType<LogoutUser>(AuthActionTypes.LOGOUT_USER),
    switchMap(() =>
      this.authService
        .logout()
        .then(() => new LogoutUserSuccess())
        .catch((err) => new HttpError(err))
    )
  );

  @Effect({ dispatch: false })
  logoutUserSuccess$ = this.actions$.pipe(
    ofType<LogoutUserSuccess>(AuthActionTypes.LOGOUT_USER_SUCCESS),
    map(() => this.router.navigate(['/sign-in']))
  );
}
