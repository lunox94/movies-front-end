import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCinemaComponent } from './pages/add-cinema/add-cinema.component';
import { RouterModule } from '@angular/router';
import { cinemasRoutes } from './cinemas.routing';
import { MaterialModule } from '../shared/material/material.module';
import { AddEditCinemaFormComponent } from './components/add-edit-cinema-form/add-edit-cinema-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListCinemasComponent } from './pages/list-cinemas/list-cinemas.component';

@NgModule({
    declarations: [AddCinemaComponent, AddEditCinemaFormComponent, ListCinemasComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(cinemasRoutes),
        ReactiveFormsModule,
        MaterialModule,
    ],
})
export class CinemasModule {}
