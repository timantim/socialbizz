import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarPageComponent } from './pages/calendar-page.component';


const routes: Routes = [
  {
    path: '',
    component: CalendarPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
