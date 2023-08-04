import {MovieModel} from "../_models/movies/movie.model";

export const fakeMovies: MovieModel[] = [
    {
        title: 'Spider-Man',
        dateOfRelease: new Date(),
        price: 144,
        rating: 5,
        onCinemas: true,
        genres: ['Action', 'Drama', 'Fantasy'],
        cover: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UY720_.jpg',
    },
    {
        title: 'Moana',
        dateOfRelease: new Date(),
        price: 100,
        rating: 4,
        onCinemas: true,
        genres: ['Action', 'Drama', 'Fantasy'],
        cover: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_FMjpg_UX1086_.jpg',
    },
];
