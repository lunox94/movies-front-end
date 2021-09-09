import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListActorsComponent } from './pages/list-actors/list-actors.component';
import { AddEditActorFormComponent } from './components/add-edit-actor-form/add-edit-actor-form.component';
import { MaterialModule } from '../core/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { actorRoutes } from './actors.routing';
import { AddActorComponent } from './pages/add-actor/add-actor.component';

@NgModule({
    declarations: [ListActorsComponent, AddEditActorFormComponent, AddActorComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(actorRoutes),
        MaterialModule,
    ],
})
export class ActorsModule {}
