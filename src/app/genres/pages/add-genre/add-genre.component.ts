import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-genre',
    templateUrl: './add-genre.component.html',
})
export class AddGenreComponent implements OnInit {
    form: FormGroup;

    constructor(private _formBuilder: FormBuilder, private _router: Router) {
        this.form = this._formBuilder.group({
            name: ['', Validators.required],
        });
    }

    ngOnInit(): void {}

    onSubmit(): void {
        console.log(this.form.value);
        this._router.navigate(['/genres']);
    }
}
