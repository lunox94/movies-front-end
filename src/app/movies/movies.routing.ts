import { Routes } from '@angular/router';
import { AddMovieComponent } from './pages/add-movie/add-movie.component';
import { ListMoviesComponent } from './pages/list-movies/list-movies.component';

export const moviesRoutes: Routes = [
    {
        path: '',
        component: ListMoviesComponent,
    },
    {
        path: 'add',
        component: AddMovieComponent,
    },
];
