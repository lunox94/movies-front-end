import {Component, inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MaterialModule} from "../../../shared/material/material.module";
import {RxState} from "@rx-angular/state";
import {MoviesService} from "../../../_services/movies/movies.service";
import {MovieModel} from "../../../_models/movies/movie.model";
import {AsyncPipe} from "@angular/common";
import {filter} from "rxjs";

export interface ConfirmMovieDeletionDialogData {
    movie: MovieModel;
}

interface DialogState {
    status: DialogStatusEnum
}

enum DialogStatusEnum {
    inProgress,
    success,
}

@Component({
    selector: 'app-confirm-movie-deletion-dialog',
    templateUrl: './confirm-movie-deletion-dialog.component.html',
    standalone: true,
    imports: [MaterialModule, AsyncPipe],
    providers: [RxState],
})
export class ConfirmMovieDeletionDialogComponent {
    private _data: ConfirmMovieDeletionDialogData = inject(MAT_DIALOG_DATA);
    private _dialogRef = inject(MatDialogRef<ConfirmMovieDeletionDialogComponent>);
    private _state: RxState<DialogState> = inject(RxState);
    private _movieService = inject(MoviesService);

    loading$ = this._state.select('status',
            _ => _ === DialogStatusEnum.inProgress);

    success$ = this._state.select(
            filter((_) => _.status === DialogStatusEnum.success));

    constructor() {
        // closes the dialog when the operation is done
        this._state.hold(this.success$, () => this._dialogRef.close());
    }

    onCancelClick() {
        this._dialogRef.close();
    }

    onDeleteClick() {
        this._state.set('status', _ => DialogStatusEnum.inProgress);

        this._state.connect('status',
            this._movieService.deleteMovie(this._data.movie),
            (_) => DialogStatusEnum.success);
    }
}
