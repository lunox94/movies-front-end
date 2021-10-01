import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AVATAR_PLACEHOLDER } from 'src/app/_const/images';

@Component({
    selector: 'app-image-selector',
    templateUrl: './image-selector.component.html',
    styleUrls: ['./image-selector.component.css'],
})
export class ImageSelectorComponent implements OnInit {
    @Input() size: 'Small' | 'Normal' = 'Small';
    @Input() rounded = true;
    @Input() image: string = AVATAR_PLACEHOLDER;
    @Output() onImageSelected: EventEmitter<string> = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}

    onImageChange(event: Event): void {
        const fReader = new FileReader();
        const element = event?.target as HTMLInputElement;
        if (element?.files && element.files.length) {
            const file = element.files.item(0) as File;

            fReader.onload = () => {
                this.image = fReader.result as string;

                this.onImageSelected.emit(this.image);
            };

            fReader.readAsDataURL(file);
        }
    }

    getDynamicClasses(): any {
        return {
            'rounded-full': this.rounded,
            'rounded-md': !this.rounded,
            'w-32': this.size === 'Small',
            'h-32': this.size === 'Small',
            'w-56': this.size === 'Normal',
            'h-72': this.size === 'Normal',
        };
    }
}
