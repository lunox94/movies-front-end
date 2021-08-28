import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { GenericListModule } from '../core/generic-list/generic-list.module';



@NgModule({
  declarations: [
    MoviesListComponent
  ],
  imports: [
    GenericListModule,
    CommonModule
  ],
  exports: [
    MoviesListComponent,
  ]
})
export class MoviesModule { }
