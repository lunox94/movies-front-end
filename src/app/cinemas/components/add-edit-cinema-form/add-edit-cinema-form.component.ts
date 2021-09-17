import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CinemaModel } from 'src/app/_models';

@Component({
    selector: 'app-add-edit-cinema-form',
    templateUrl: './add-edit-cinema-form.component.html',
})
export class AddEditCinemaFormComponent implements OnInit {
    @Input() formMode: 'Add' | 'Edit' = 'Add';
    @Output() onSubmit: EventEmitter<CinemaModel> = new EventEmitter();

    form: FormGroup;

    constructor(private _formBuilder: FormBuilder) {
        this.form = this._formBuilder.group({
            name: ['', [Validators.required]],
        });
    }

    ngOnInit(): void {}

    submit(): void {
        this.onSubmit.emit(this.form.value);
    }
}
