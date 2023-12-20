import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalService } from './service/modal.service';

@Component({
    selector: 'modal',
    standalone: true,
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
    @Input() title: string = '';
    @Input() subtitle: string = '';
    @Input() open: boolean = false;

    @Output() handleModalStatus = new EventEmitter<boolean>(false);

    constructor(public modalService: ModalService) {}

    public closeModal() {
        this.modalService.modalStatus.set(false);
    }

    public handleEpisodeNumber(episode: string) {
        const stringReplace = 'https://rickandmortyapi.com/api/episode/';
        const number = episode.replace(stringReplace, '');

        if (number.length === 1) return `0${number}`;
        return number;
    }
}
