import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'movies-front-end';

  movies = [
    {
      name: 'Spider Man - Far from home',
      date: Date.now(),
      price: 144,
    },
    {
      name: 'Mohana',
      date: Date.now(),
      price: 100,
    }
  ];
}
