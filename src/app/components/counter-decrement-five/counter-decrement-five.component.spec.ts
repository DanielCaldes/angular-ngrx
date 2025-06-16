import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterDecrementFiveComponent } from './counter-decrement-five.component';

describe('CounterDecrementFiveComponent', () => {
  let component: CounterDecrementFiveComponent;
  let fixture: ComponentFixture<CounterDecrementFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterDecrementFiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterDecrementFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
