import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: 'actors',
        loadChildren: () =>
            import('./actors/actors.module').then((m) => m.ActorsModule),
    },
    {
        path: 'cinemas',
        loadChildren: () =>
            import('./cinemas/cinemas.module').then((m) => m.CinemasModule),
    },
    {
        path: 'genres',
        loadChildren: () =>
            import('./genres/genres.module').then((m) => m.GenresModule),
    },
    {
        path: 'movies',
        loadChildren: () =>
            import('./movies/movies.module').then((m) => m.MoviesModule),
    },
    {
        path: '**',
        redirectTo: 'movies',
    },
];
