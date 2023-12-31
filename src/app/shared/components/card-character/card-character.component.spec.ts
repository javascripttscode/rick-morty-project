import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardEpisodeComponent } from '../card-episode/card-episode.component';

describe('CardEpisodeComponent', () => {
    let component: CardEpisodeComponent;
    let fixture: ComponentFixture<CardEpisodeComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        fixture = TestBed.createComponent(CardEpisodeComponent);
        component = fixture.componentInstance;
    });

    it('createCompoennt', () => {
        expect(component).toBeTruthy();
    });

    describe('handleLargeNames()', () => {
        it('should format larges strings', () => {
            jest.spyOn(component, 'hadleLargeNames');
            const title =
                'titulo teste para formatar quando ter mais que 25 characters';
            const result = component.hadleLargeNames(title);
            expect(result.length).toEqual(13);
            expect(result).toEqual('titulo tes...');
        });

        it('should not format small strings', () => {
            jest.spyOn(component, 'hadleLargeNames');
            const title = 'titulo';
            const result = component.hadleLargeNames(title);
            expect(result).not.toEqual('titulo tes...');
        });

        it('should return the same string', () => {
            jest.spyOn(component, 'hadleLargeNames');
            const title = 'titulo';
            const result = component.hadleLargeNames(title);
            expect(result).toEqual('titulo');
        });
    });
});
