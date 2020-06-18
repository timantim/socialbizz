import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['login-form.component.scss']
})
export class LoginFormComponent {
  hidePassword = true;
  @Input() form: FormGroup;
  @Output() loginEvent = new EventEmitter<void>();
  @Output() registerEvent = new EventEmitter<void>();
}
