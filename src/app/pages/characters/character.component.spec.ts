import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharactersComponent } from './characters.component';

describe('LoadingComponent', () => {
    let component: CharactersComponent;
    let fixture: ComponentFixture<CharactersComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        fixture = TestBed.createComponent(CharactersComponent);
        component = fixture.componentInstance;
    });

    it('createCompoennt', () => {
        expect(component).toBeTruthy();
    });

    describe('openModal', () => {
        it('should open modal', () => {});
    });
});
