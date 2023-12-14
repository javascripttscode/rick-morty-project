import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEpisode, IEpisodeResponse } from '../../types/Episode';
import { PATH } from '../../types/path';
import { RestService } from '../rest/rest.service';

@Injectable({
    providedIn: 'root',
})
export class EpisodesService {
    constructor(private restService: RestService) {}

    public getAllEpisodes(): Observable<IEpisodeResponse> {
        return this.restService.getAll<IEpisodeResponse>(PATH.episode);
    }

    public getEpisode(id: number): Observable<IEpisode> {
        return this.restService.getSingle<IEpisode>(PATH.episode, id);
    }

    public getMultipleEpisodes(
        idList: Array<number | string>
    ): Observable<Array<IEpisode>> {
        return this.restService.getMultiple<Array<IEpisode>>(
            PATH.episode,
            idList
        );
    }
}
