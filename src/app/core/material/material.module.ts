import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    exports: [
        MatProgressSpinnerModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
    ],
})
export class MaterialModule {}
