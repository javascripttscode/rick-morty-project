import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILocation, ILocationResponse } from '../../types/Location';
import { PATH } from '../../types/path';
import { RestService } from '../rest/rest.service';

@Injectable({
    providedIn: 'root',
})
export class LocationService {
    constructor(private restService: RestService) {}

    public getAllLocations(): Observable<ILocationResponse> {
        return this.restService.getAll<ILocationResponse>(PATH.location);
    }

    public getLocation(id: number): Observable<ILocation> {
        return this.restService.getSingle<ILocation>(PATH.location, id);
    }

    public getMultipleLocations(
        idList: Array<number | string>
    ): Observable<Array<any>> {
        return this.restService.getMultiple<Array<any>>(PATH.location, idList);
    }
}
