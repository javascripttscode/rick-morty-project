import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ILocation } from '../../types/Location';

export const MAX_STRING_LENGTH = 10;

@Component({
    selector: 'card-location',
    standalone: true,
    imports: [DatePipe],
    templateUrl: './card-location.component.html',
    styleUrl: './card-location.component.scss',
})
export class CardLocationComponent {
    @Input() location!: ILocation;

    public hadleLargeNames(name: string): string {
        if (name.length > MAX_STRING_LENGTH)
            return `${name.slice(0, MAX_STRING_LENGTH)}...`;
        return name;
    }
}
