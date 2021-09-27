import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { GenericListModule } from '../shared/generic-list/generic-list.module';
import { MaterialModule } from '../shared/material/material.module';
import { RatingModule } from '../shared/rating/rating.module';
import { ListMoviesComponent } from './pages/list-movies/list-movies.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { AddEditMovieFormComponent } from './components/add-edit-movie-form/add-edit-movie-form.component';
import { AddMovieComponent } from './pages/add-movie/add-movie.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputMarkdownModule } from '../shared/input-markdown/input-markdown.module';

@NgModule({
    declarations: [
        MoviesListComponent,
        ListMoviesComponent,
        AddEditMovieFormComponent,
        AddMovieComponent,
    ],
    imports: [
        GenericListModule,
        RatingModule,
        CommonModule,
        ReactiveFormsModule,
        MaterialModule,
        MoviesRoutingModule,
        InputMarkdownModule,
    ],
})
export class MoviesModule {}
