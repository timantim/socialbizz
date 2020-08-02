import { select, Store } from '@ngrx/store';
import { State } from '../../state';
import { take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { User } from '../models/auth.model';

export async function getUserFromStateOrAPI(store$: Store<State>, authService: AuthService): Promise<User | void> {
  const user = await store$
    .pipe(
      select((state) => state.userState),
      take(1)
    )
    .toPromise();
  if (user.user) {
    return user.user;
  }
  return await authService.getUser();
}
