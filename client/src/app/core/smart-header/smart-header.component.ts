import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../shared/models/auth.model';
import { Store } from '@ngrx/store';
import { State } from '../../state';
import { selectUser } from '../../modules/auth/state/auth.reducer';
import { LogoutUser } from '../../modules/auth/state/auth.actions';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-smart-header',
  template: `<app-header [user]="user$ | async" [sidenavRef]="sidenavRef" (logout)="logout()"></app-header>`,
})
export class SmartHeaderComponent implements OnInit {
  user$: Observable<User>;
  @Input() sidenavRef: MatSidenav;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.user$ = this.store.select(selectUser());
  }

  logout(): void {
    this.store.dispatch(new LogoutUser());
  }
}
