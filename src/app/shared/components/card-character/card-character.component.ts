import { Component, Input } from '@angular/core';
import { ICharacter } from '../../types/Character';

@Component({
    selector: 'card-character',
    standalone: true,
    imports: [],
    templateUrl: './card-character.component.html',
    styleUrl: './card-character.component.scss',
})
export class CardCharacterComponent {
    @Input() character!: ICharacter;

    public hadleLargeNames(name: string): string {
        if (name.length > 15) return `${name.slice(0, 15)}...`;
        return name;
    }
}
