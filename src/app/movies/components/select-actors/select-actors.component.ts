import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';
import { Observable } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { fakeActors } from 'src/app/_fake-data/actors';
import { ActorModel } from 'src/app/_models';

type Performance = { character: string; actor: ActorModel };

@Component({
    selector: 'app-select-actors',
    templateUrl: './select-actors.component.html',
})
export class SelectActorsComponent implements OnInit {
    @Input() actors = fakeActors;
    @ViewChild(MatTable) table?: MatTable<any>;
    filteredActors: Observable<ActorModel[]>;
    actorAboutToAdd?: ActorModel;
    performances: Performance[] = [];
    displayedColumns = ['photo', 'name', 'character', 'remove'];
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
        this.performances.push({ character: '', actor: this.actorAboutToAdd! });
        this.control.patchValue('');

        this.table?.renderRows();
    }

    removeActor(performance: Performance): void {
        const index = this.performances.indexOf(performance);
        if (index !== -1) {
            this.performances.splice(index, 1);
        }
        this.table?.renderRows();
    }

    private _filter(value: string | ActorModel): ActorModel[] {
        const filterValue =
            typeof value === 'string' ? value.toLowerCase() : value.name;
        return this.actors.filter((actor) =>
            actor.name.toLowerCase().includes(filterValue)
        );
    }
}
