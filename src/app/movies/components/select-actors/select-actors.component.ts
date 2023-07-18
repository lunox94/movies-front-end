import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
    animate,
    state,
    style,
    transition,
    trigger,
} from '@angular/animations';
import { UntypedFormArray, UntypedFormBuilder, UntypedFormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';
import { Observable } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { fakeActors } from 'src/app/_fake-data/actors';
import { ActorModel } from 'src/app/_models';
import { moveItemInArray } from '@angular/cdk/drag-drop';

type ActorViewModel = {
    characters: UntypedFormArray;
    actor: ActorModel;
    collapsed: boolean;
};

@Component({
    selector: 'app-select-actors',
    templateUrl: './select-actors.component.html',
    styleUrls: ['./select-actors.component.css'],
    animations: [
        trigger('detailExpand', [
            state('collapsed', style({ height: '0px', minHeight: '0' })),
            state('expanded', style({ height: '*' })),
            transition(
                'expanded <=> collapsed',
                animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
            ),
        ]),
    ],
})
export class SelectActorsComponent implements OnInit {
    @Input() actors = fakeActors;
    @ViewChild(MatTable) table?: MatTable<any>;
    filteredActors: Observable<ActorModel[]>;
    actorAboutToAdd?: ActorModel;
    performances: ActorViewModel[] = [];
    displayedColumns = ['photo', 'name', 'remove'];
    control: UntypedFormControl;

    constructor(private _formBuilder: UntypedFormBuilder) {
        this.control = new UntypedFormControl('');
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
        this.performances.push({
            characters: this._formBuilder.array(['']),
            actor: this.actorAboutToAdd!,
            collapsed: false,
        });
        this.control.patchValue('');

        this.table?.renderRows();
    }

    removeActor(performance: ActorViewModel): void {
        const index = this.performances.indexOf(performance);
        if (index !== -1) {
            this.performances.splice(index, 1);
        }
        this.table?.renderRows();
    }

    addCharacter(performance: ActorViewModel): void {
        performance.characters.push(this._formBuilder.control(''));
    }

    removeCharacter(performance: ActorViewModel, index: number): void {
        performance.characters.removeAt(index);
    }

    moveActorUp(index: number): void {
        if (index !== -1 && index - 1 >= 0) {
            moveItemInArray(this.performances, index, index - 1);
        }
        this.table?.renderRows();
    }

    moveActorDown(index: number): void {
        if (index !== -1 && index + 1 < this.performances.length) {
            moveItemInArray(this.performances, index, index + 1);
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
