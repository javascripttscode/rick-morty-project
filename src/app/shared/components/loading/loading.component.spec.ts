import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadingComponent } from './loading.component';

describe('LoadingComponent', () => {
    let component: LoadingComponent;
    let fixture: ComponentFixture<LoadingComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        fixture = TestBed.createComponent(LoadingComponent);
        component = fixture.componentInstance;
    });

    it('createCompoennt', () => {
        expect(component).toBeTruthy();
    });
});
