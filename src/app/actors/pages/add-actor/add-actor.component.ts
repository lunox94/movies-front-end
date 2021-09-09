import { Component, OnInit } from '@angular/core';
import { ActorModel } from 'src/app/_models/actors/actor.model';

@Component({
    selector: 'app-add-actor',
    templateUrl: './add-actor.component.html',
})
export class AddActorComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    onSubmit(value: ActorModel): void {
        console.log(value);
    }
}
