import { Component, signal } from '@angular/core';

@Component({
    selector: 'loading',
    standalone: true,
    imports: [],
    templateUrl: './loading.component.html',
    styleUrl: './loading.component.scss',
})
export class LoadingComponent {
    dots = signal<string>('');

    constructor() {
        this.handleDots();
    }

    private handleDots() {
        let teste = 0;
        setInterval((): any => {
            if (this.dots().length >= 3) this.dots.set('');
            this.dots.update(value => value + '.');
        }, 1000);
    }
}
