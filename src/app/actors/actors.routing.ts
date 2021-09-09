import { Routes } from '@angular/router';
import { AddActorComponent } from './pages/add-actor/add-actor.component';
import { EditActorComponent } from './pages/edit-actor/edit-actor.component';
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
    {
        path: 'edit/:id',
        component: EditActorComponent,
    },
];
