import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './navigation-bar.component';
import {MaterialModule} from '../../lib/material';
import {RouterModule} from '@angular/router';
import {LinkComponent} from './link/link.component';
import {DirectivesModule} from '../directives';


@NgModule({
  declarations: [NavigationBarComponent, LinkComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    DirectivesModule
  ],
  exports: [
    NavigationBarComponent
  ]
})
export class NavigationBarModule { }
