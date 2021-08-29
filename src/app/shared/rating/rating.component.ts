import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
})
export class RatingComponent implements OnInit {
  range: number[];
  
  @Input() starCount: number = 5;


  constructor() {
    this.range = Array.from({length: this.starCount}, (_, index: number) => index);
    console.log(this.range)
  }

  ngOnInit(): void {
  }

}
