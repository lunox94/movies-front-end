import { Routes } from '@angular/router';
import { AddCinemaComponent } from './pages/add-cinema/add-cinema.component';
import { EditCinemaComponent } from './pages/edit-cinema/edit-cinema.component';
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
    {
        path: 'edit/:id',
        component: EditCinemaComponent,
    },
];
