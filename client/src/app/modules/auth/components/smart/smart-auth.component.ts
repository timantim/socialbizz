import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {State} from '../../../../state';
import {Store} from '@ngrx/store';
import {UserLogin} from '../../state/auth.actions';
import {UserInput} from '../../../../shared/models/auth.model';

@Component({
  selector: 'app-smart-auth',
  template: `
    <app-auth-container [form]="form" (loginEvent)="onLogin()" (registerEvent)="onRegister()"></app-auth-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmartAuthComponent implements OnInit {
  form: FormGroup;

  constructor(private store: Store<State>) {}


  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      repeatPassword: new FormControl()
    }, {validators: this.passwordErrorValidator});
  }

  onLogin(): void {
    this.store.dispatch(new UserLogin(this.form.value as UserInput));
  }

  onRegister(): void {
    console.log(this.form);
  }

  passwordErrorValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const password = control.get('password').value;
    const repeatPassword = control.get('repeatPassword').value;
    if (!repeatPassword) {
      return null;
    }
    return password.value !== repeatPassword.value ? { passwordError: true } : null;
  }
}
