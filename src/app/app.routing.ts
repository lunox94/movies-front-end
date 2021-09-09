import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: 'movies',
        loadChildren: () =>
            import('./movies/movies.module').then((m) => m.MoviesModule),
    },
    {
        path: 'actors',
        loadChildren: () =>
            import('./actors/actors.module').then((m) => m.ActorsModule),
    },
    {
        path: 'genres',
        loadChildren: () =>
            import('./genres/genres.module').then((m) => m.GenresModule),
    },
    {
        path: '**',
        redirectTo: 'movies',
    },
];
