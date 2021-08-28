import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
})
export class GenericListComponent implements OnInit {

  @Input() list: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
