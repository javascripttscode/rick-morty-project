import { TestBed } from '@angular/core/testing';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PATH } from '../../types/path';
import { RestService } from '../rest/rest.service';

describe('RestService', () => {
    let service: RestService;
    let httpService: HttpClient;

    const httpClientStub = () => ({
        get: () => ({}),
    });

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, HttpClientTestingModule],
            providers: [{ provide: HttpClient, useFactory: httpClientStub }],
        });
        service = TestBed.inject(RestService);
        httpService = TestBed.inject(HttpClient);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('get()', () => {
        it('should make expected calls', () => {
            jest.spyOn(service, 'getAll');
            jest.spyOn(httpService, 'get');
            const getfunction = jest.spyOn(service, 'get');
            service.getAll(PATH.character);
            expect(getfunction).toHaveBeenCalledTimes(1);
        });
    });

    describe('getSingle()', () => {
        it('should make expected calls', () => {
            jest.spyOn(service, 'getSingle');
            jest.spyOn(httpService, 'get');
            const getfunction = jest.spyOn(service, 'get');
            service.getSingle(PATH.character, 32);
            expect(getfunction).toHaveBeenCalledTimes(1);
        });
    });

    describe('getMultiple()', () => {
        it('should make expected calls', () => {
            jest.spyOn(service, 'getMultiple');
            jest.spyOn(httpService, 'get');
            const getfunction = jest.spyOn(service, 'get');
            service.getMultiple(PATH.character, ['2', '32']);
            expect(getfunction).toHaveBeenCalledTimes(1);
        });
    });
});
