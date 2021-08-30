import { Component, HostBinding, OnInit, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'movies-front-end';
    @HostBinding('class') className = '';

    constructor(private renderer: Renderer2) {}

    ngOnInit() {
        // this.className = 'darkMode';
        // this.renderer.addClass(document.body, 'darkMode');
    }

    toggleTheme(isDarkMode: boolean) {
        this.className = isDarkMode ? 'darkMode' : '';

        if (isDarkMode) {
            this.renderer.addClass(document.body, 'darkMode');
        } else {
            this.renderer.removeClass(document.body, 'darkMode');
        }
    }

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
