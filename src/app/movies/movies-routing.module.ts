import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { moviesRoutes } from "./movies.routing";

@NgModule({
    imports: [RouterModule.forChild(moviesRoutes)],
    exports: [RouterModule]
})
export class MoviesRoutingModule {}
