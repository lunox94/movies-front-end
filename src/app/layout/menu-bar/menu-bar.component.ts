import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
})
export class MenuBarComponent implements OnInit {

  @Output() nightMode: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleTheme(event: MatSlideToggleChange): void {
    this.nightMode.emit(event.checked);
  }

}
