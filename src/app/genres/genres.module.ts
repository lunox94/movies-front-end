import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddGenreComponent } from './pages/add-genre/add-genre.component';
import { RouterModule } from '@angular/router';
import { genresRoutes } from './genre.routing';
import { ListGenresComponent } from './pages/list-genres/list-genres.component';
import { MaterialModule } from '../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEditGenreFormComponent } from './components/add-edit-form/add-edit-genre-form.component';
import { EditGenreComponent } from './pages/edit-genre/edit-genre.component';

@NgModule({
    declarations: [AddGenreComponent, ListGenresComponent, AddEditGenreFormComponent, EditGenreComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(genresRoutes),
        ReactiveFormsModule,

        MaterialModule,
    ],
})
export class GenresModule {}
