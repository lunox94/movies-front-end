import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MovieModel} from "../../../_models/movies/movie.model";
import {MaterialModule} from "../../../shared/material/material.module";
import {RatingModule} from "../../../shared/rating/rating.module";

@Component({
    imports: [MaterialModule, RatingModule],
    standalone: true,
    selector: 'app-movie-widget',
    templateUrl: './movie-widget.component.html',
})
export class MovieWidgetComponent {
    @Input() movie!: MovieModel;
    @Output() deleteMovie = new EventEmitter<MovieModel>();
}
