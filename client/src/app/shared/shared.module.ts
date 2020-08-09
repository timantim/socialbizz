import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MaterialModule } from './material.module';
import { InstagramApiWrapperService } from './services/instagram-api-wrapper.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, FontAwesomeModule, FormsModule, ReactiveFormsModule, AmplifyAngularModule],
  exports: [MaterialModule, FontAwesomeModule, FormsModule, ReactiveFormsModule, AmplifyAngularModule],
  providers: [AmplifyService, AuthService, MatDatepickerModule, InstagramApiWrapperService],
})
export class SharedModule {}
