import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import './icons-loader';
@NgModule({
    declarations: [MapComponent],
    imports: [CommonModule, LeafletModule],
    exports: [MapComponent],
})
export class MapModule {}
