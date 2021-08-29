import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MaterialModule } from '../core/material/material.module';



@NgModule({
  declarations: [
    MenuBarComponent
  ],
  imports: [
    MaterialModule,
    CommonModule
  ],
  exports: [
    MenuBarComponent
  ]
})
export class LayoutModule { }
