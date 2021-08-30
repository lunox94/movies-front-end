import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
})
export class RatingComponent implements OnInit {
    range: number[];

    @Input() starCount: number = 5;
    @Input() rate: number = 0;

    previewedRate: number = 0;

    constructor() {
        this.range = Array.from({ length: this.starCount }, () => 0);
    }

    ngOnInit(): void {
        this.previewedRate = this.rate;
    }

    onMouseEnters(index: number, event: any) {
        this.previewedRate = index + 1;
    }

    onMouseLeaves() {
        this.previewedRate = this.rate;
    }

    onClick(index: number) {
        this.rate = index + 1;
    }
}
