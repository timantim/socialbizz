import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

enum AuthType {
  LOGIN = 'login',
  REGISTER = 'register'
}

@Component({
  selector: 'app-auth-container',
  templateUrl: './auth-container.component.html',
  styleUrls: ['./auth-container.component.scss']
})
export class AuthContainerComponent {
  authMode: AuthType = AuthType.LOGIN;
  @Input() form: FormGroup;
  @Output() loginEvent = new EventEmitter<void>();
  @Output() registerEvent = new EventEmitter<void>();

  switchAuthMode(): void {
    this.authMode = this.authMode === AuthType.LOGIN ? AuthType.REGISTER : AuthType.LOGIN;
  }
}
