import { Component } from '@angular/core';

@Component({
  selector: 'app-core',
  styleUrls: ['./core.component.scss'],
  template: `
    <app-header></app-header>
    <div class="container">
      <mat-card class="mt-1">
        <router-outlet></router-outlet>
      </mat-card>
    </div>
    <app-footer></app-footer>
  `,
})
export class CoreComponent {}
