import { NgModule } from '@angular/core';
import {MatButtonModule, MatSidenavModule, MatToolbarModule} from '@angular/material';


@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule
  ]
})
export class MaterialModule { }
