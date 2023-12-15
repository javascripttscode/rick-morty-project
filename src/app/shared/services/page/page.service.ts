import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class PageService {
    constructor(private http: HttpClient) {}

    isLoading = signal(false);
}
