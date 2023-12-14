import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environments';
import { PATH } from '../../types/path';

@Injectable({
    providedIn: 'root',
})
export class RestService {
    constructor(private http: HttpClient) {}

    public get<T>(path: PATH, id?: number | string) {
        return this.http.get<T>(this.mountUrl(path, id));
    }

    private mountUrl(path: PATH, id?: number | string) {
        return id
            ? `${environment.baseApi}/${path}/${id}`
            : `${environment.baseApi}/${path}`;
    }
}
