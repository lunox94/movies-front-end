import { Routes } from "@angular/router";
import { ListMoviesComponent } from "./pages/list-movies/list-movies.component";

export const moviesRoutes: Routes = [
    {
        path: '',
        component: ListMoviesComponent
    }
]