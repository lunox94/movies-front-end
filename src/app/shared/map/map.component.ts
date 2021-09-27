import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { latLng, LeafletMouseEvent, marker, Marker, tileLayer } from 'leaflet';
import { LatLng } from 'src/app/_models';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
})
export class MapComponent implements OnInit {
    @Input() initialLocation?: LatLng;
    @Output() onLocationChanges = new EventEmitter<LatLng>();

    options: any;

    layers: Marker[] = [];

    constructor() {}

    ngOnInit(): void {
        this.configureMapOptions();
        this.initComponent();
    }

    onClick(event: LeafletMouseEvent): void {
        const { lat, lng } = event.latlng;
        this.layers = [marker([lat, lng])];
        this.onLocationChanges.emit({ lat, lng });
    }

    private configureMapOptions() {
        this.options = {
            layers: [
                tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 19,
                    attribution: '...',
                }),
            ],
            zoom: 17,
            center: latLng(22.40611876955261, -79.96596336364746),
        };
    }

    private initComponent() {
        if (this.initialLocation) {
            const { lat, lng } = this.initialLocation;
            this.layers = [marker([lat, lng])];

            this.options.center = latLng(lat, lng);
        }
    }
}
