import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: 'movies',
        loadChildren: () =>
            import('./movies/movies.module').then((m) => m.MoviesModule),
    },
];
