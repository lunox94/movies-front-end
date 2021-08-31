import { Routes } from "@angular/router";
import { IndexMoviesComponent } from "./pages/list-movies/index-movies.component";

export const moviesRoutes: Routes = [
    {
        path: '',
        component: IndexMoviesComponent
    }
]