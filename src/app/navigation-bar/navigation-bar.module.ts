import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './navigation-bar.component';
import {MaterialModule} from '../../lib/material';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [NavigationBarComponent],
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavigationBarComponent
  ]
})
export class NavigationBarModule { }
