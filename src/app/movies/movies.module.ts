import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { GenericListModule } from '../shared/generic-list/generic-list.module';
import { MaterialModule } from '../shared/material/material.module';
import { RatingModule } from '../shared/rating/rating.module';
import { ListMoviesComponent } from './pages/list-movies/list-movies.component';
import { MoviesRoutingModule } from './movies-routing.module';

@NgModule({
    declarations: [MoviesListComponent, ListMoviesComponent],
    imports: [
        GenericListModule,
        RatingModule,
        CommonModule,
        MaterialModule,
        MoviesRoutingModule,
    ],
})
export class MoviesModule {}
