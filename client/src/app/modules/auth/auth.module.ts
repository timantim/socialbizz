import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {AuthPageComponent} from './pages/auth-page.component';
import {SmartAuthComponent} from './components/smart/smart-auth.component';
import {AuthContainerComponent} from './components/auth-container/auth-container.component';
import {SharedModule} from '../../shared/shared.module';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {RegisterFormComponent} from './components/register-form/register-form.component';

@NgModule({
  declarations: [AuthPageComponent, SmartAuthComponent, AuthContainerComponent, LoginFormComponent, RegisterFormComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
