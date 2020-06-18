import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {State} from '../../state';
import {getUserFromStateOrAPI} from './auth-guard-helper';
import {LoadUserSuccess} from '../../modules/auth/state/auth.actions';
import {AuthService} from '../services/auth.service';

@Injectable({providedIn: 'root'})
export class LoginGuard implements CanActivate {
  constructor(private store$: Store<State>, private router: Router, private authService: AuthService) {}

  async canActivate(): Promise<boolean> {
    const user = await getUserFromStateOrAPI(this.store$, this.authService);
    if (user) {
      this.store$.dispatch(new LoadUserSuccess(user));
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
