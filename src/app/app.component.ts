import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { ModalService } from './shared/components/modal/service/modal.service';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PageService } from './shared/services/page/page.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        NavbarComponent,
        LoadingComponent,
        RouterModule,
        ModalComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
    title = 'rick-morty-project';
    constructor(
        public pageService: PageService,
        public modalSerivce: ModalService
    ) {}

    ngOnInit(): void {
        // this.pageService.getLoadingStatus()
    }
}
