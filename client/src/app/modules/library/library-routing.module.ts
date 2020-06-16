import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibraryPageComponent } from './pages/library-page.component';


const routes: Routes = [
  {
    path: '',
    component: LibraryPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
