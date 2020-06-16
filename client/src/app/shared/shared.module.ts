import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatIconModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FontAwesomeModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }
