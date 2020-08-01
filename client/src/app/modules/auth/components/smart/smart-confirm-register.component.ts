import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State } from '../../../../state';
import { UserRegisterConfirm } from '../../state/auth.actions';
import { RegistrationConfirmInput } from '../../../../shared/models/auth.model';

@Component({
  selector: 'app-smart-register',
  template: `
    <app-confirm-register-form [form]="form" (confirmRegisterEvent)="onConfirmRegister()"></app-confirm-register-form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmartConfirmRegisterComponent implements OnInit {
  form: FormGroup;
  @Output() loginEvent = new EventEmitter<void>();

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required]),
      code: new FormControl('', [Validators.required]),
    });
  }

  onConfirmRegister(): void {
    this.store.dispatch(new UserRegisterConfirm(this.form.value as RegistrationConfirmInput));
  }
}
