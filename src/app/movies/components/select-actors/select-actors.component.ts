import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { fakeActors } from 'src/app/_fake-data/actors';
import { ActorModel } from 'src/app/_models';

@Component({
    selector: 'app-select-actors',
    templateUrl: './select-actors.component.html',
})
export class SelectActorsComponent implements OnInit {
    @Input() actors = fakeActors;
    filteredActors: Observable<ActorModel[]>;
    actorAboutToAdd?: ActorModel;
    selectedActors: ActorModel[] = [];
    control: FormControl;

    constructor() {
        this.control = new FormControl('');
        this.filteredActors = this.control.valueChanges.pipe(
            startWith(''),
            tap(() => (this.actorAboutToAdd = undefined)),
            map((value) => this._filter(value))
        );
    }

    ngOnInit(): void {}

    displayFn(actor: ActorModel): string {
        return actor && (actor.name ?? '');
    }

    onOptionSelected(event: MatAutocompleteSelectedEvent): void {
        this.actorAboutToAdd = event.option.value;
    }

    addActor(): void {
        this.selectedActors.push(this.actorAboutToAdd!);
        this.control.patchValue('');
    }

    private _filter(value: string | ActorModel): ActorModel[] {
        const filterValue =
            typeof value === 'string' ? value.toLowerCase() : value.name;
        return this.actors.filter((actor) =>
            actor.name.toLowerCase().includes(filterValue)
        );
    }
}
