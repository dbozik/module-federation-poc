import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Module1Module } from './content/module1.module';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    loadChildren: () => Module1Module,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
