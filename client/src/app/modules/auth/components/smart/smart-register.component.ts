import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from '../../../../state';
import { UserRegister } from '../../state/auth.actions';
import { UserRegisterInput } from '../../../../shared/models/auth.model';

@Component({
  selector: 'app-smart-register',
  template: `
    <app-register-form
      [form]="form"
      (loginEvent)="loginEvent.emit()"
      (registerEvent)="onRegister()"
    ></app-register-form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmartRegisterComponent implements OnInit {
  form: FormGroup;
  @Output() loginEvent = new EventEmitter<void>();

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
        repeatPassword: new FormControl('', [Validators.required]),
      },
      { validators: this.passwordErrorValidator }
    );
  }

  onRegister(): void {
    this.store.dispatch(new UserRegister(this.form.value as UserRegisterInput));
  }

  passwordErrorValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const password = control.get('password').value;
    const repeatPassword = control.get('repeatPassword').value;
    if (!repeatPassword) {
      return null;
    }
    return password.value !== repeatPassword.value ? { passwordError: true } : null;
  };
}
