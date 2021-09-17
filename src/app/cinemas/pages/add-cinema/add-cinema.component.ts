import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CinemaModel } from 'src/app/_models';

@Component({
    selector: 'app-add-cinema',
    templateUrl: './add-cinema.component.html',
})
export class AddCinemaComponent implements OnInit {
    constructor(private _router: Router) {}

    ngOnInit(): void {}

    onSubmit(value: CinemaModel): void {
        console.log(value);
        this._router.navigate(['/cinemas']);
    }
}
