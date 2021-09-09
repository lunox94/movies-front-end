import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActorModel } from 'src/app/_models/actors/actor.model';

@Component({
    selector: 'app-add-actor',
    templateUrl: './add-actor.component.html',
})
export class AddActorComponent implements OnInit {
    constructor(private _router: Router) {}

    ngOnInit(): void {}

    onSubmit(value: ActorModel): void {
        console.log(value);
        this._router.navigate(['/actors']);
    }
}
