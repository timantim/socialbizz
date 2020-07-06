import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatCardModule, MatIconModule} from '@angular/material';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './services/auth.service';
import {AmplifyAngularModule, AmplifyService} from 'aws-amplify-angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FontAwesomeModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    AmplifyAngularModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FontAwesomeModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    AmplifyAngularModule
  ],
  providers: [AmplifyService, AuthService]
})
export class SharedModule {
}
