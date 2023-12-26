import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
    let component: ModalComponent;
    let fixture: ComponentFixture<ModalComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        fixture = TestBed.createComponent(ModalComponent);
        component = fixture.componentInstance;
    });

    it('createCompoennt', () => {
        expect(component).toBeTruthy();
    });

    describe('handleEpisodeNumber()', () => {
        it('should format string for number', () => {
            jest.spyOn(component, 'handleEpisodeNumber');
            const episodeName = 'https://rickandmortyapi.com/api/episode/22';
            const result = component.handleEpisodeNumber(episodeName);
            expect(result).toEqual('22');
        });

        it('should add zeros on units values', () => {
            jest.spyOn(component, 'handleEpisodeNumber');
            const episodeName = 'https://rickandmortyapi.com/api/episode/2';
            const result = component.handleEpisodeNumber(episodeName);
            expect(result).toEqual('02');
        });

        it('should not return same number when has just one digits', () => {
            jest.spyOn(component, 'handleEpisodeNumber');
            const episodeName = 'https://rickandmortyapi.com/api/episode/2';
            const result = component.handleEpisodeNumber(episodeName);
            expect(result).not.toEqual('2');
        });
    });
});
