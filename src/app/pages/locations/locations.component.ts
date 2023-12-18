import { Component, OnInit } from '@angular/core';
import { CardLocationComponent } from '../../shared/components/card-location/card-location.component';
import { LocationService } from '../../shared/services/location/location.service';
import { PageService } from '../../shared/services/page/page.service';
import { ILocation } from '../../shared/types/Location';

@Component({
    selector: 'locations',
    standalone: true,
    imports: [CardLocationComponent],
    templateUrl: './locations.component.html',
    styleUrl: './locations.component.scss',
})
export class LocationComponent implements OnInit {
    public LocationList: Array<ILocation> = [];

    constructor(
        private locationService: LocationService,
        private pageService: PageService
    ) {}

    ngOnInit(): void {
        this.getCurrentData();
    }

    getCurrentData() {
        this.pageService.isLoading.set(true);
        this.locationService.getAllLocations().subscribe(response => {
            this.LocationList = response.results;
            console.log(response);
            this.pageService.isLoading.set(false);
        });
    }
}
