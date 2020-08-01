import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthPageComponent } from './pages/auth-page.component';
import { AuthContainerComponent } from './components/auth-container/auth-container.component';
import { SharedModule } from '../../shared/shared.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { SmartLoginComponent } from './components/smart/smart-login.component';
import { SmartRegisterComponent } from './components/smart/smart-register.component';
import { ConfirmRegisterFormComponent } from './components/confirm-register-form/confirm-register-form.component';
import { SmartConfirmRegisterComponent } from './components/smart/smart-confirm-register.component';

@NgModule({
  declarations: [
    AuthPageComponent,
    AuthContainerComponent,
    SmartLoginComponent,
    SmartRegisterComponent,
    SmartConfirmRegisterComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ConfirmRegisterFormComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, SharedModule],
})
export class AuthModule {}
