import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Module1Component } from './module1.component';
import { InternalComponent } from './internal/internal.component';

const routes: Routes = [
  {
    path: '',
    component: Module1Component,
    children: [
      {
        path: 'internal',
        component: InternalComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
