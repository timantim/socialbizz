import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SmartLoginComponent} from './components/smart/smart-login.component';
import {SmartRegisterComponent} from './components/smart/smart-register.component';
import {AuthContainerComponent} from './components/auth-container/auth-container.component';
import {SmartConfirmRegisterComponent} from './components/smart/smart-confirm-register.component';


const routes: Routes = [
  {
    path: '',
    component: AuthContainerComponent,
    children: [
      {
        path: 'sign-in',
        component: SmartLoginComponent
      },
      {
        path: 'register',
        component: SmartRegisterComponent
      },
      {
        path: 'confirm-register',
        component: SmartConfirmRegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
