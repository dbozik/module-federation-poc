import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MfSharedModule } from 'mf-shared';
import { InternalComponent } from './internal/internal.component';
import { Module1RoutingModule } from './module1-routing.module';
import { Module1Component } from './module1.component';

@NgModule({
  declarations: [
    Module1Component,
    InternalComponent
  ],
  imports: [
    CommonModule,
    Module1RoutingModule,
    MfSharedModule
  ],
})
export class Module1Module {
}
