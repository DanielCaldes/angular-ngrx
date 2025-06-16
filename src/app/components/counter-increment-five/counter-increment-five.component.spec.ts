import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterIncrementFiveComponent } from './counter-increment-five.component';

describe('CounterIncrementFiveComponent', () => {
  let component: CounterIncrementFiveComponent;
  let fixture: ComponentFixture<CounterIncrementFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterIncrementFiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterIncrementFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
