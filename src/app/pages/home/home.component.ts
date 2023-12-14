import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../shared/components/card/card.component';
import { CharacterService } from '../../shared/services/character/character.service';

@Component({
    selector: 'home',
    standalone: true,
    imports: [CardComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
    constructor(private CharacterService: CharacterService) {}

    ngOnInit(): void {
        // this.CharacterService.getAllCharacters().subscribe(response => {
        //     console.log(response);
        // });

        this.CharacterService.getMultipleCharacters([2, 1]).subscribe(
            response => {
                console.log(response);
                console.log(response[1].gender);
            }
        );
    }
}
