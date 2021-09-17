import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CinemaModel } from 'src/app/_models';

@Component({
    selector: 'app-edit-cinema',
    templateUrl: './edit-cinema.component.html',
})
export class EditCinemaComponent implements OnInit {
    cinema: CinemaModel = {
        name: 'Yara',
    };
    constructor(
        private _router: Router,
        private _activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        console.log(this._activatedRoute.snapshot.paramMap.get('id'));
    }

    onSubmit(value: CinemaModel) {
        console.log(value);
        this._router.navigate(['/cinemas']);
    }
}
