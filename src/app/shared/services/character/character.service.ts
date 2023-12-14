import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICharacter, ICharacterResponse } from '../../types/Character';
import { PATH } from '../../types/path';
import { RestService } from '../rest/rest.service';

@Injectable({
    providedIn: 'root',
})
export class CharacterService {
    constructor(private restService: RestService) {}

    public getAllCharacters(): Observable<ICharacterResponse> {
        return this.restService.getAll<ICharacterResponse>(PATH.character);
    }

    public getCharacter(id: number): Observable<ICharacter> {
        return this.restService.getSingle<ICharacter>(PATH.character, id);
    }

    public getMultipleCharacters(
        idList: Array<number | string>
    ): Observable<Array<ICharacter>> {
        return this.restService.getMultiple<Array<ICharacter>>(
            PATH.character,
            idList
        );
    }
}
