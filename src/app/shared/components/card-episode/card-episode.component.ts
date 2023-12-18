import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IEpisode } from '../../types/Episode';

export const MAX_STRING_LENGTH = 10;

@Component({
    selector: 'card-episode',
    standalone: true,
    imports: [DatePipe],
    templateUrl: './card-episode.component.html',
    styleUrl: './card-episode.component.scss',
})
export class CardEpisodeComponent {
    @Input() episode!: IEpisode;

    public hadleLargeNames(name: string): string {
        if (name.length > MAX_STRING_LENGTH)
            return `${name.slice(0, MAX_STRING_LENGTH)}...`;
        return name;
    }
}
