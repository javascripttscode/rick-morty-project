import { Component, Input } from '@angular/core';
import { ICharacter } from '../../types/Character';

@Component({
    selector: 'card',
    standalone: true,
    imports: [],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss',
})
export class CardComponent {
    @Input() character!: ICharacter;
}
