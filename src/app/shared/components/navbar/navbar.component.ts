import { Component, HostListener, inject } from '@angular/core';
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
    public isMobile = false;

    constructor() {
        this.isMobile = this.handleSize();
    }

    handleRouterActived(currentRouter: string) {
        if (this.router.url.replace('/', '') == currentRouter) return true;
        return false;
    }

    @HostListener('window:resize', ['event'])
    verifyWindowSize(event: any) {
        this.isMobile = this.handleSize();
        console.log(event);
    }

    handleSize() {
        return window.innerWidth < 720;
    }
}
