import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSelectorComponent } from './image-selector.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
    declarations: [ImageSelectorComponent],
    imports: [CommonModule, MaterialModule],
    exports: [ImageSelectorComponent],
})
export class ImageSelectorModule {}
