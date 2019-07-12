import { NgModule } from '@angular/core';
import {MatButtonModule, MatSidenavModule, MatToolbarModule, MatInputModule} from '@angular/material';


@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class MaterialModule { }
