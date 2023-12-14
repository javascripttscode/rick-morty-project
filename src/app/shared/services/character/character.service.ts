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
        return this.restService.get<ICharacterResponse>(PATH.character);
    }

    public getCharacter(id: number): Observable<ICharacter> {
        return this.restService.get<ICharacter>(PATH.character, id);
    }

    public getMultipleCharacters(
        id: Array<number | string>
    ): Observable<Array<ICharacter>> {
        return this.restService.get<Array<ICharacter>>(
            PATH.character,
            `${id.join()}`
        );
    }
}
