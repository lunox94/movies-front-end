import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { GenericListModule } from '../core/generic-list/generic-list.module';
import { MaterialModule } from '../core/material/material.module';
import { RatingModule } from '../shared/rating/rating.module';
import { IndexMoviesComponent } from './pages/list-movies/index-movies.component';
import { MoviesRoutingModule } from './movies-routing.module';

@NgModule({
    declarations: [MoviesListComponent, IndexMoviesComponent],
    imports: [
        GenericListModule,
        RatingModule,
        CommonModule,
        MaterialModule,
        MoviesRoutingModule,
    ],
})
export class MoviesModule {}
