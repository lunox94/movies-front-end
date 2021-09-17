import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCinemaComponent } from './pages/add-cinema/add-cinema.component';
import { RouterModule } from '@angular/router';
import { cinemasRoutes } from './cinemas.routing';

@NgModule({
    declarations: [AddCinemaComponent],
    imports: [CommonModule, RouterModule.forChild(cinemasRoutes)],
})
export class CinemasModule {}
