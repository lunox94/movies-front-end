import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { GenericListModule } from '../core/generic-list/generic-list.module';
import { MaterialModule } from '../core/material/material.module';
import { RatingModule } from '../shared/rating/rating.module';



@NgModule({
  declarations: [
    MoviesListComponent
  ],
  imports: [
    GenericListModule,
    RatingModule,
    CommonModule,

    MaterialModule
  ],
  exports: [
    MoviesListComponent,
  ]
})
export class MoviesModule { }
