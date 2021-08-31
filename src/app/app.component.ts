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
}
