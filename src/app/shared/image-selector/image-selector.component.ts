import { Component, EventEmitter, OnInit, Output } from '@angular/core';

const AVATAR_PLACEHOLDER =
    'https://th.bing.com/th/id/OIP.ZT-Tw8tYy38htqch69vsGQAAAA?pid=ImgDet&rs=1';

@Component({
    selector: 'app-image-selector',
    templateUrl: './image-selector.component.html',
    styleUrls: ['./image-selector.component.css'],
})
export class ImageSelectorComponent implements OnInit {
    @Output() onImageSelected: EventEmitter<string> = new EventEmitter();
    image?: string = AVATAR_PLACEHOLDER;

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
}
