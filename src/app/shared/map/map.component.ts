import { Component, OnInit } from '@angular/core';
import { latLng, LeafletMouseEvent, marker, Marker, tileLayer } from 'leaflet';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
    options = {
        layers: [
            tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 18,
                attribution: '...',
            }),
        ],
        zoom: 17,
        center: latLng(22.40611876955261, -79.96596336364746),
    };

    layers: Marker[] = [];

    constructor() {}

    ngOnInit(): void {}

    onClick(event: LeafletMouseEvent): void {
        const { lat, lng } = event.latlng;
        this.layers = [marker([lat, lng])];
    }
}
