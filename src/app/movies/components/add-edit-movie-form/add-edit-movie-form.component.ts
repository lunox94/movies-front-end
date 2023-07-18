import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { fakeGenres } from 'src/app/_fake-data/genres';

@Component({
    selector: 'app-add-edit-movie-form',
    templateUrl: './add-edit-movie-form.component.html',
})
export class AddEditMovieFormComponent implements OnInit {
    @Input() formMode: 'Add' | 'Edit' = 'Add';
    form: UntypedFormGroup;

    genreList = fakeGenres;

    constructor(private _formBuilder: UntypedFormBuilder) {
        this.form = this._formBuilder.group({
            dateOfRelease: ['', [Validators.required]],
            title: ['', [Validators.required]],
            onCinemas: [false],
            genres: [[], [Validators.required]]
        });
    }

    ngOnInit(): void {}

    submit(): void {
        console.log(this.form.value);
    }
}
