import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InternalComponent } from './internal/internal.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'internal',
    component: InternalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
