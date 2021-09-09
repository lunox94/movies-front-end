import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActorModel } from 'src/app/_models/actors/actor.model';

@Component({
    selector: 'app-edit-actor',
    templateUrl: './edit-actor.component.html',
})
export class EditActorComponent implements OnInit {
    actor: ActorModel = {
        name: 'Tom Cruise',
        dateOfBirth: new Date(Date.now()),
    };

    constructor(
        private _router: Router,
        private _activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        const actorId = this._activatedRoute.snapshot.paramMap.get('id');
        console.log(actorId);
    }

    onSubmit(value: ActorModel): void {
        console.log(value);
        this._router.navigate(['/actors']);
    }
}
