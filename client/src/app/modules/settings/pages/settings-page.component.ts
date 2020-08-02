import { Component } from '@angular/core';

@Component({
  selector: 'app-settings-page',
  template: `
    <div class="mb-4">
      <h1>Settings</h1>
    </div>
    <app-smart-settings></app-smart-settings>
  `,
})
export class SettingsPageComponent {}
