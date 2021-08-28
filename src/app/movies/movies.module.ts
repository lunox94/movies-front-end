import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { GenericListModule } from '../core/generic-list/generic-list.module';
import { MaterialModule } from '../core/material/material.module';



@NgModule({
  declarations: [
    MoviesListComponent
  ],
  imports: [
    GenericListModule,
    CommonModule,

    MaterialModule
  ],
  exports: [
    MoviesListComponent,
  ]
})
export class MoviesModule { }
