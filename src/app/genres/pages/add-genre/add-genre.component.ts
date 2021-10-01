import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenreToCreateModel } from 'src/app/_models';

@Component({
    selector: 'app-add-genre',
    templateUrl: './add-genre.component.html',
})
export class AddGenreComponent implements OnInit {
    
    constructor(private _router: Router) {}

    ngOnInit(): void {}

    onSubmit(value: GenreToCreateModel): void {
        console.log(value);
        this._router.navigate(['/genres']);
    }
}
