import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { selectCounterValue } from '../../store/counter.selector';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-display.component.html',
  styleUrl: './counter-display.component.scss'
})
export class CounterDisplayComponent {
  counter$: Observable<number>;

  constructor(private store:Store){
    this.counter$ = this.store.select(selectCounterValue);
  }
}
