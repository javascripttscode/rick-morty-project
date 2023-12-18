import { Component, OnInit } from '@angular/core';
import { CardCharacterComponent } from '../../shared/components/card-character/card-character.component';
import { CharacterService } from '../../shared/services/character/character.service';
import { PageService } from '../../shared/services/page/page.service';
import { ICharacter } from '../../shared/types/Character';

@Component({
    selector: 'characters',
    standalone: true,
    imports: [CardCharacterComponent],
    templateUrl: './characters.component.html',
    styleUrl: './characters.component.scss',
})
export class CharactersComponent implements OnInit {
    public charactersList: Array<ICharacter> = [];

    constructor(
        private characterService: CharacterService,
        private pageService: PageService
    ) {}

    ngOnInit(): void {
        this.getCurrentData();
    }

    getCurrentData() {
        this.pageService.isLoading.set(true);
        this.characterService.getAllCharacters().subscribe(response => {
            this.charactersList = response.results;
            this.pageService.isLoading.set(false);
        });
    }
}
