import { Component, Input } from '@angular/core';
import { ICharacter } from '../../types/Character';

export const MAX_STRING_LENGTH = 10;

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
        if (name.length > MAX_STRING_LENGTH)
            return `${name.slice(0, MAX_STRING_LENGTH)}...`;
        return name;
    }
}
