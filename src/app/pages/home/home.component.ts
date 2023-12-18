import { Component, OnInit } from '@angular/core';
import { CardCharacterComponent } from '../../shared/components/card-character/card-character.component';
import { DefaultFooterComponent } from '../../shared/components/footer/default-footer.component';

@Component({
    selector: 'home',
    standalone: true,
    imports: [CardCharacterComponent, DefaultFooterComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
