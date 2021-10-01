import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenreModel } from 'src/app/_models';

@Component({
    selector: 'app-edit-genre',
    templateUrl: './edit-genre.component.html',
})
export class EditGenreComponent implements OnInit {
    genre: GenreModel = {
        id: 1,
        name: 'Drama',
    };

    constructor(private _router: Router, private _activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        console.log(this._activatedRoute.snapshot.paramMap.get('id'));
    }

    onSubmit(value: GenreModel): void {
        console.log(value);
        this._router.navigate(['/genres']);
    }
}
