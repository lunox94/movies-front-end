import { Component, Input, OnInit } from '@angular/core';
import { fakeActors } from 'src/app/_fake-data/actors';
import { ActorModel } from 'src/app/_models';

@Component({
    selector: 'app-select-actors',
    templateUrl: './select-actors.component.html',
})
export class SelectActorsComponent implements OnInit {
    @Input() actors = fakeActors;
    constructor() {}

    ngOnInit(): void {}
}
