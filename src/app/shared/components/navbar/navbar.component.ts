import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PATH_ROUTES } from '../../../app.routes';

@Component({
    selector: 'navbar',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
    public router = inject(Router);
    public routes = PATH_ROUTES;
}
