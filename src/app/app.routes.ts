import { Routes } from '@angular/router';

export const PATH_ROUTES = {
    home: 'home',
    characters: 'characters',
    location: 'location',
    epsodes: 'epsodes',
};

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: PATH_ROUTES.home,
    },
    {
        path: PATH_ROUTES.home,
        loadComponent: () =>
            import('./pages/home/home.component').then(
                comp => comp.HomeComponent
            ),
    },
    {
        path: PATH_ROUTES.characters,
        loadComponent: () =>
            import('./pages/characters/characters.component').then(
                comp => comp.CharactersComponent
            ),
    },
    {
        path: PATH_ROUTES.location,
        loadComponent: () =>
            import('./pages/locations/locations.component').then(
                comp => comp.LocationComponent
            ),
    },
    {
        path: PATH_ROUTES.epsodes,
        loadComponent: () =>
            import('./pages/episodes/episodes.component').then(
                comp => comp.EpisodesComponent
            ),
    },
];
