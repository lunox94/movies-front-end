import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenreModel } from 'src/app/_models';

@Component({
    selector: 'app-add-edit-genre-form',
    templateUrl: './add-edit-genre-form.component.html',
})
export class AddEditGenreFormComponent implements OnInit {
    form: FormGroup;

    @Input() formMode: 'Add' | 'Edit' = 'Add';
    @Input() genre?: GenreModel;
    @Output() onSubmit = new EventEmitter<GenreModel>();

    constructor(private _formBuilder: FormBuilder) {
        this.form = this._formBuilder.group({
            name: ['', Validators.required],
        });
    }

    ngOnInit(): void {
        if (this.formMode === 'Edit' && this.genre !== undefined) {
            this.form.patchValue(this.genre);
        }
    }

    submit(): void {
        this.onSubmit.emit(this.form.value);
    }
}
