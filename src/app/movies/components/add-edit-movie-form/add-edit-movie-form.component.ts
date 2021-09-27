import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-add-edit-movie-form',
    templateUrl: './add-edit-movie-form.component.html',
})
export class AddEditMovieFormComponent implements OnInit {
    @Input() formMode: 'Add' | 'Edit' = 'Add';
    form: FormGroup;

    constructor(private _formBuilder: FormBuilder) {
        this.form = this._formBuilder.group({
            title: ['', [Validators.required]],
            onCinemas: [false],
        });
    }

    ngOnInit(): void {}

    submit(): void {}
}
