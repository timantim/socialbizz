import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-confirm-register-form',
  templateUrl: './confirm-register-form.component.html',
  styleUrls: ['confirm-register-form.component.scss'],
})
export class ConfirmRegisterFormComponent {
  @Input() form: FormGroup;
  @Output() confirmRegisterEvent = new EventEmitter<void>();
}
