import { Routes } from '@angular/router';
import { AddCinemaComponent } from './pages/add-cinema/add-cinema.component';
import { ListCinemasComponent } from './pages/list-cinemas/list-cinemas.component';

export const cinemasRoutes: Routes = [
    {
        path: '',
        component: ListCinemasComponent,
    },
    {
        path: 'add',
        component: AddCinemaComponent,
    },
];
