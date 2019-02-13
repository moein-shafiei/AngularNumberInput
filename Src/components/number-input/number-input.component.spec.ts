import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { NumberInputComponent } from './number-input.component';

let component: NumberInputComponent;
let fixture: ComponentFixture<NumberInputComponent>;

describe('number-input component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ NumberInputComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(NumberInputComponent);
      component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
