import { Component } from '@angular/core';

@Component({
  selector: 'app-core',
  template: `
      <div class="container">
          <app-header></app-header>
          <mat-card class="mt-1">
              <router-outlet></router-outlet>
          </mat-card>
      </div>`
})
export class CoreComponent {
}
