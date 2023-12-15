import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({
    selector: 'home',
    standalone: true,
    imports: [CardComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
