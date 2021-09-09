import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListActorsComponent } from './pages/list-actors/list-actors.component';
import { AddEditActorFormComponent } from './components/add-edit-actor-form/add-edit-actor-form.component';



@NgModule({
  declarations: [
    ListActorsComponent,
    AddEditActorFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ActorsModule { }
