import {Injectable} from '@angular/core';
import {delay, Observable, of} from "rxjs";
import {MovieModel} from "../../_models/movies/movie.model";
import {fakeMovies} from "../../_fake-data/movies";

@Injectable({
    providedIn: 'root'
})
export class MoviesService {

    constructor() {
    }

    getAll(): Observable<MovieModel[]> {
        return of(fakeMovies).pipe(delay(1000));
    }
}
