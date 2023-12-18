import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IEpisode } from '../../types/Episode';

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
        if (name.length > 15) return `${name.slice(0, 15)}...`;
        return name;
    }
}
