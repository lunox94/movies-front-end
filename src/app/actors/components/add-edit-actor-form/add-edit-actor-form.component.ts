import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActorModel } from 'src/app/_models/actors/actor.model';

@Component({
    selector: 'app-add-edit-actor-form',
    templateUrl: './add-edit-actor-form.component.html',
})
export class AddEditActorFormComponent implements OnInit {
    form: FormGroup;

    @Input() formMode: 'Add' | 'Edit' = 'Add';
    @Input() actor?: ActorModel;
    @Output() onSubmit: EventEmitter<ActorModel> = new EventEmitter();

    constructor(private formBuilder: FormBuilder) {
        this.form = this.formBuilder.group({
            name: ['', [Validators.required]],
            dateOfBirth: ['', [Validators.required]],
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
