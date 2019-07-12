import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnClickAwayDirective } from './on-click-away/on-click-away.directive';


@NgModule({
  declarations: [OnClickAwayDirective],
  imports: [
    CommonModule
  ],
  exports: [
    OnClickAwayDirective
  ]
})
export class DirectivesModule { }
