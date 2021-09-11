import { Component, OnInit } from '@angular/core';

const PREVIEW_PLACEHOLDER = 'Biography preview';

@Component({
    selector: 'app-input-markdown',
    templateUrl: './input-markdown.component.html',
})
export class InputMarkdownComponent implements OnInit {
    markdown: string = PREVIEW_PLACEHOLDER;
    constructor() {}

    ngOnInit(): void {}

    onChanges(event: Event): void {
        const target = event.target as HTMLInputElement;
        this.markdown = target.value ? target.value : PREVIEW_PLACEHOLDER;
    }
}
