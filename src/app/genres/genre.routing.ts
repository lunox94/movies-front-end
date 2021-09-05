import { Routes } from "@angular/router";
import { AddGenreComponent } from "./pages/add-genre/add-genre.component";

export const genresRoutes: Routes = [
    {
        path: 'add',
        component: AddGenreComponent
    }
];