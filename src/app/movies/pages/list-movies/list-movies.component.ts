import {Component, inject, OnInit} from '@angular/core';
import {MoviesService} from "../../../_services/movies/movies.service";
import {RxState} from "@rx-angular/state";
import {MovieModel} from "../../../_models/movies/movie.model";

interface ListMoviesState {
    movies: MovieModel[];
}

@Component({
    selector: 'app-list-movies',
    templateUrl: './list-movies.component.html',
    providers: [RxState],
})
export class ListMoviesComponent implements OnInit {
    private _moviesService = inject(MoviesService);
    private _state: RxState<ListMoviesState> = inject(RxState);

    movies$ = this._state.select('movies');

    constructor() {
        this._state.connect('movies', this._moviesService.getAll());
    }

    ngOnInit(): void {}
}
