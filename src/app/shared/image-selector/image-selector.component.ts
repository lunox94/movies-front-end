import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

const AVATAR_PLACEHOLDER =
    'https://th.bing.com/th/id/OIP.ZT-Tw8tYy38htqch69vsGQAAAA?pid=ImgDet&rs=1';

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
