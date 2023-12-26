import { Injectable, signal } from '@angular/core';
import { ICharacter } from '../../../types/Character';

@Injectable({
    providedIn: 'root',
})
export class ModalService {
    public modalStatus = signal(false);
    public characterData = signal<Partial<ICharacter>>({});

    constructor() {}
}
