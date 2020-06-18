import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['register-form.component.scss']
})
export class RegisterFormComponent {
  hidePassword = true;
  @Input() form: FormGroup;
  @Output() loginEvent = new EventEmitter<void>();
  @Output() registerEvent = new EventEmitter<void>();
}
