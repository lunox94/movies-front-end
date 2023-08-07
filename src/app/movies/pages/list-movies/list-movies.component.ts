import {Component, inject, OnInit} from '@angular/core';
import {MoviesService} from "../../../_services/movies/movies.service";
import {RxState} from "@rx-angular/state";
import {MovieModel} from "../../../_models/movies/movie.model";
import {MatDialog} from "@angular/material/dialog";
import {
    ConfirmMovieDeletionDialogComponent,
    ConfirmMovieDeletionDialogData
} from "../../dialogs/confirm-movie-deletion-dialog/confirm-movie-deletion-dialog.component";

interface ListMoviesState {
    movies: MovieModel[];
}

@Component({
    selector: 'app-list-movies',
    templateUrl: './list-movies.component.html',
    providers: [RxState],
})
export class ListMoviesComponent implements OnInit {
    private _dialog = inject(MatDialog);
    private _moviesService = inject(MoviesService);
    private _state: RxState<ListMoviesState> = inject(RxState);

    movies$ = this._state.select('movies');

    constructor() {
        this._state.connect('movies', this._moviesService.getAll());
    }

    ngOnInit(): void {
    }

    openDeleteMovieDialog(movie: MovieModel) {
        const dialogRef =
            this._dialog.open<ConfirmMovieDeletionDialogComponent, ConfirmMovieDeletionDialogData>(ConfirmMovieDeletionDialogComponent, {
                disableClose: true,
                data: {
                    movie,
                }
            });
    }

    deleteMovie(movie: MovieModel) {

        // this._state.connect('movies',
        //     this._moviesService.deleteMovie(movie),
        //     (state, _) => state.movies.filter(m => m != movie));
    }
}
