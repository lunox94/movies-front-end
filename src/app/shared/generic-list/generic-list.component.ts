import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
})
export class GenericListComponent implements OnInit {
  @Input() list: any[] | null = null;

  constructor() {}

  ngOnInit(): void {}
}
