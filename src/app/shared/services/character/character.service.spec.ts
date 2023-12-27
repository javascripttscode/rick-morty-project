import { TestBed } from '@angular/core/testing';

import { of } from 'rxjs';
import { SingleCharacter } from '../../mocks/responses/SingleCharacters';
import { ResponseCharacters } from '../../mocks/responses/responseCharacters';
import { restServiceStub } from '../../mocks/services/restService.mock';
import { ICharacter } from '../../types/Character';
import { RestService } from '../rest/rest.service';
import { CharacterService } from './character.service';

describe('CharacterService', () => {
    let service: CharacterService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [{ provide: RestService, useValue: restServiceStub }],
        });
        service = TestBed.inject(CharacterService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('getAllCharacters()', () => {
        it('should return all characters', () => {
            jest.spyOn(service, 'getAllCharacters').mockReturnValue(
                of(ResponseCharacters)
            );
            service.getAllCharacters().subscribe(reponse => {
                expect(reponse).toEqual(ResponseCharacters);
            });
        });

        it('should call get function from restService', () => {
            jest.spyOn(service, 'getAllCharacters');
            const restServiceMock = TestBed.inject(RestService);
            const getAllFunction = jest.spyOn(restServiceMock, 'getAll');
            service.getAllCharacters();

            expect(getAllFunction).toHaveBeenCalledTimes(1);
        });
    });

    describe('getCharacter()', () => {
        it('should return signle character by ID', () => {
            const characterId = 32;
            jest.spyOn(service, 'getCharacter').mockReturnValue(
                of(SingleCharacter)
            );
            const result = service
                .getCharacter(characterId)
                .subscribe((reponse: ICharacter) => {
                    expect(reponse).toEqual(SingleCharacter);
                });
        });

        it('should make expected calls', () => {
            const characterId = 32;
            jest.spyOn(service, 'getCharacter');
            const getSingle = jest.spyOn(restServiceStub, 'getSingle');
            service.getCharacter(characterId);
            expect(getSingle).toHaveBeenCalledTimes(1);
        });
    });

    describe('getMultipleCharacters()', () => {
        it('should make expected calls', () => {
            const characterIds = ['1', '23'];
            jest.spyOn(service, 'getMultipleCharacters');
            const getSingle = jest.spyOn(restServiceStub, 'getMultiple');
            service.getMultipleCharacters(characterIds);
            expect(getSingle).toHaveBeenCalledTimes(1);
        });
    });
});
