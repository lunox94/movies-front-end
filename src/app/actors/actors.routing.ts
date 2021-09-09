import { Routes } from '@angular/router';
import { ListActorsComponent } from './pages/list-actors/list-actors.component';

export const actorRoutes: Routes = [
    {
        path: '',
        component: ListActorsComponent,
    },
];
