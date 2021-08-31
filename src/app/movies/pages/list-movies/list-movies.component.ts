import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-list-movies',
    templateUrl: './list-movies.component.html',
})
export class ListMoviesComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    movies = [
        {
            name: 'Spider-Man',
            date: Date.now(),
            price: 144,
            rating: 5,
            cover: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UY720_.jpg',
        },
        {
            name: 'Moana',
            date: Date.now(),
            price: 100,
            rating: 4,
            cover: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_FMjpg_UX1086_.jpg',
        },
    ];
}
