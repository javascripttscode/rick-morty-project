import { Component, OnInit } from '@angular/core';
import { CardCharacterComponent } from '../../shared/components/card-character/card-character.component';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { ModalService } from '../../shared/components/modal/service/modal.service';
import { CharacterService } from '../../shared/services/character/character.service';
import { PageService } from '../../shared/services/page/page.service';
import { ICharacter } from '../../shared/types/Character';

@Component({
    selector: 'characters',
    standalone: true,
    imports: [CardCharacterComponent, ModalComponent],
    templateUrl: './characters.component.html',
    styleUrl: './characters.component.scss',
})
export class CharactersComponent implements OnInit {
    public charactersList: Array<ICharacter> = [];

    constructor(
        private characterService: CharacterService,
        private pageService: PageService,
        private modalService: ModalService
    ) {}

    ngOnInit(): void {
        this.getCurrentData();
    }

    public getCurrentData() {
        this.pageService.isLoading.set(true);
        this.characterService.getAllCharacters().subscribe(response => {
            this.charactersList = response.results;
            this.pageService.isLoading.set(false);
        });
    }

    public openModal(character: ICharacter) {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
        this.modalService.characterData.set(character);
        this.modalService.modalStatus.set(true);
        return;
    }
}
