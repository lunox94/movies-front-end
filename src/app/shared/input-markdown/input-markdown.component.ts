import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-input-markdown',
    templateUrl: './input-markdown.component.html',
})
export class InputMarkdownComponent implements OnInit {
    @Input() label: string = 'Text';
    markdown?: string;
    constructor() {}

    ngOnInit(): void {}

    onChanges(event: Event): void {
        const target = event.target as HTMLInputElement;
        this.markdown = target.value;
    }
}
