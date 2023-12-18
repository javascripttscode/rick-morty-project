import { Component, OnInit } from '@angular/core';
import { CardEpisodeComponent } from '../../shared/components/card-episode/card-episode.component';
import { EpisodesService } from '../../shared/services/episodes/episodes.service';
import { PageService } from '../../shared/services/page/page.service';
import { IEpisode } from '../../shared/types/Episode';

@Component({
    selector: 'characters',
    standalone: true,
    imports: [CardEpisodeComponent],
    templateUrl: './episodes.component.html',
    styleUrl: './episodes.component.scss',
})
export class EpisodesComponent implements OnInit {
    public episodesList: Array<IEpisode> = [];

    constructor(
        private episodesService: EpisodesService,
        private pageService: PageService
    ) {}

    ngOnInit(): void {
        this.getCurrentData();
    }

    getCurrentData() {
        this.pageService.isLoading.set(true);
        this.episodesService.getAllEpisodes().subscribe(response => {
            this.episodesList = response.results;
            this.pageService.isLoading.set(false);
        });
    }
}
