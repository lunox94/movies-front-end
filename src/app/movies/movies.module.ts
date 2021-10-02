import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { GenericListModule } from '../shared/generic-list/generic-list.module';
import { MaterialModule } from '../shared/material/material.module';
import { RatingModule } from '../shared/rating/rating.module';
import { ListMoviesComponent } from './pages/list-movies/list-movies.component';
import { AddEditMovieFormComponent } from './components/add-edit-movie-form/add-edit-movie-form.component';
import { AddMovieComponent } from './pages/add-movie/add-movie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputMarkdownModule } from '../shared/input-markdown/input-markdown.module';
import { ImageSelectorModule } from '../shared/image-selector/image-selector.module';
import { SelectActorsComponent } from './components/select-actors/select-actors.component';
import { RouterModule } from '@angular/router';
import { moviesRoutes } from './movies.routing';
import { AvatarModule } from '../shared/avatar/avatar.module';

@NgModule({
    declarations: [
        MoviesListComponent,
        ListMoviesComponent,
        AddEditMovieFormComponent,
        AddMovieComponent,
        SelectActorsComponent,
    ],
    imports: [
        RouterModule.forChild(moviesRoutes),
        GenericListModule,
        RatingModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        InputMarkdownModule,
        ImageSelectorModule,
        AvatarModule,
        MaterialModule,
    ],
})
export class MoviesModule {}
