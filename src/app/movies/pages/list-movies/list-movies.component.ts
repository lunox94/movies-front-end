import { Component, OnInit } from '@angular/core';
import {fakeMovies} from "../../../_fake-data/movies";

@Component({
    selector: 'app-list-movies',
    templateUrl: './list-movies.component.html',
})
export class ListMoviesComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    movies = fakeMovies;
}
