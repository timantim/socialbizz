import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Store} from '@ngrx/store';
import {State} from '../../state';
import {getUserFromStateOrAPI} from './auth-guard-helper';
import {LoadUserSuccess} from '../../modules/auth/state/auth.actions';
import {AuthService} from '../services/auth.service';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store$: Store<State>, private router: Router, private authService: AuthService) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    const user = await getUserFromStateOrAPI(this.store$, this.authService);

    if (user) {
      this.store$.dispatch(new LoadUserSuccess(user));
      return true;
    }
    this.router.navigate(['/sign-in']);
    return false;
  }
}
