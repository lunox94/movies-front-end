import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActorModel } from 'src/app/_models/actors/actor.model';

@Component({
    selector: 'app-add-edit-actor-form',
    templateUrl: './add-edit-actor-form.component.html',
})
export class AddEditActorFormComponent implements OnInit {
    form: FormGroup;
    preview?: string;

    @Input() formMode: 'Add' | 'Edit' = 'Add';
    @Input() actor?: ActorModel;
    @Output() onSubmit: EventEmitter<ActorModel> = new EventEmitter();

    constructor(private _formBuilder: FormBuilder) {
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

    onImageChange(event: Event): void {
        const fReader = new FileReader();
        const element = event?.target as HTMLInputElement;
        if (element?.files && element.files.length) {
            const file = element.files.item(0) as File;

            fReader.onload = () => {
                this.preview = fReader.result as string;

                this.form.patchValue({
                    photo: this.preview,
                });
            };

            fReader.readAsDataURL(file);
        }
    }
}
