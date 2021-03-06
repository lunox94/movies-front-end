import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListActorsComponent } from './pages/list-actors/list-actors.component';
import { AddEditActorFormComponent } from './components/add-edit-actor-form/add-edit-actor-form.component';
import { MaterialModule } from '../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { actorRoutes } from './actors.routing';
import { AddActorComponent } from './pages/add-actor/add-actor.component';
import { EditActorComponent } from './pages/edit-actor/edit-actor.component';
import { InputMarkdownModule } from '../shared/input-markdown/input-markdown.module';
import { ImageSelectorModule } from '../shared/image-selector/image-selector.module';

@NgModule({
    declarations: [
        ListActorsComponent,
        AddEditActorFormComponent,
        AddActorComponent,
        EditActorComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(actorRoutes),
        MaterialModule,
        InputMarkdownModule,
        ImageSelectorModule,
    ],
})
export class ActorsModule {}
