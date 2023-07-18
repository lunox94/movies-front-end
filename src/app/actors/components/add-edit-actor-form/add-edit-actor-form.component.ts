import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActorModel } from 'src/app/_models';

@Component({
    selector: 'app-add-edit-actor-form',
    templateUrl: './add-edit-actor-form.component.html',
})
export class AddEditActorFormComponent implements OnInit {
    form: UntypedFormGroup;

    @Input() formMode: 'Add' | 'Edit' = 'Add';
    @Input() actor?: ActorModel;
    @Output() onSubmit: EventEmitter<ActorModel> = new EventEmitter();

    constructor(private _formBuilder: UntypedFormBuilder) {
        this.form = this._formBuilder.group({
            name: ['', [Validators.required]],
            dateOfBirth: ['', [Validators.required]],
            photo: [''],
        });
    }

    ngOnInit(): void {
        if (this.actor !== undefined) {
            this.form.patchValue(this.actor);
        }
    }

    submit() {
        this.onSubmit.emit(this.form.value);
    }
}
