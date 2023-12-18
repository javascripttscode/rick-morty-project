import { Component, OnInit } from '@angular/core';
import { CardCharacterComponent } from '../../shared/components/card-character/card-character.component';

@Component({
    selector: 'home',
    standalone: true,
    imports: [CardCharacterComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
