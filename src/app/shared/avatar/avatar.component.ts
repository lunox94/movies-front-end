import { Component, Input, OnInit } from '@angular/core';
import { AVATAR_PLACEHOLDER } from 'src/app/_const/images';

const ALT_PLACEHOLDER = 'Avatar';

@Component({
    selector: 'app-avatar',
    templateUrl: './avatar.component.html',
})
export class AvatarComponent implements OnInit {
    @Input() src?: string;
    @Input() alt: string = ALT_PLACEHOLDER;

    constructor() {}

    ngOnInit(): void {
      this.src = this.src ?? AVATAR_PLACEHOLDER;
    }
}
