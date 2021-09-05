import { Routes } from "@angular/router";
import { AddGenreComponent } from "./pages/add-genre/add-genre.component";
import { ListGenresComponent } from "./pages/list-genres/list-genres.component";

export const genresRoutes: Routes = [
    {
        path: '',
        component: ListGenresComponent
    },
    {
        path: 'add',
        component: AddGenreComponent
    }
];