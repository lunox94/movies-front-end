import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './rating.component';
import { MaterialModule } from 'src/app/core/material/material.module';



@NgModule({
  declarations: [
    RatingComponent
  ],
  imports: [
    CommonModule,

    MaterialModule
  ],
  exports: [
    RatingComponent
  ]
})
export class RatingModule { }
