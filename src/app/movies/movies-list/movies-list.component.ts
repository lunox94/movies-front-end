import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html'
})
export class MoviesListComponent implements OnInit {

  @Input() movies: any;

  constructor() { }

  ngOnInit(): void {
  }

}
