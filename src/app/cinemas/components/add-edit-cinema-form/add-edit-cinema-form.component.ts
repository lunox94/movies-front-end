import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { CinemaModel, LatLng } from 'src/app/_models';

@Component({
    selector: 'app-add-edit-cinema-form',
    templateUrl: './add-edit-cinema-form.component.html',
})
export class AddEditCinemaFormComponent implements OnInit {
    @Input() formMode: 'Add' | 'Edit' = 'Add';
    @Input() cinema?: CinemaModel;
    @Output() onSubmit: EventEmitter<CinemaModel> = new EventEmitter();

    form: UntypedFormGroup;

    constructor(private _formBuilder: UntypedFormBuilder) {
        this.form = this._formBuilder.group({
            name: ['', [Validators.required]],
            latLng: ['', [Validators.required]],
        });
    }

    ngOnInit(): void {
        if (this.formMode === 'Edit' && this.cinema !== undefined) {
            this.form.patchValue(this.cinema);
        }
    }

    submit(): void {
        this.onSubmit.emit(this.form.value);
    }

    onLocationChanges(latLng: LatLng): void {
        this.form.controls.latLng.setValue(latLng);
    }
}
