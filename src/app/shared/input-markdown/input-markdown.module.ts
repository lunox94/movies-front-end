import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputMarkdownComponent } from './input-markdown.component';
import { MaterialModule } from '../material/material.module';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
    declarations: [InputMarkdownComponent],
    imports: [CommonModule, MaterialModule, MarkdownModule.forRoot()],
    exports: [InputMarkdownComponent],
})
export class InputMarkdownModule {}
