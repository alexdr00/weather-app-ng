import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './navigation-bar.component';
import {MaterialModule} from '../../lib/material';


@NgModule({
  declarations: [NavigationBarComponent],
  imports: [
    MaterialModule,
    CommonModule,
  ],
  exports: [
    NavigationBarComponent
  ]
})
export class NavigationBarModule { }
