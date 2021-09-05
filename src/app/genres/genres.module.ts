import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddGenreComponent } from './pages/add-genre/add-genre.component';
import { RouterModule } from '@angular/router';
import { genresRoutes } from './genre.routing';
import { ListGenresComponent } from './pages/list-genres/list-genres.component';



@NgModule({
  declarations: [
    AddGenreComponent,
    ListGenresComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(genresRoutes)
  ]
})
export class GenresModule { }
