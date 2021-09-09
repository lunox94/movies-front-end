import { Routes } from '@angular/router';
import { AddActorComponent } from './pages/add-actor/add-actor.component';
import { ListActorsComponent } from './pages/list-actors/list-actors.component';

export const actorRoutes: Routes = [
    {
        path: '',
        component: ListActorsComponent,
    },
    {
        path: 'add',
        component: AddActorComponent,
    },
];
