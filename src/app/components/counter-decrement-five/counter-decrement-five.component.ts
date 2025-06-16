import { Component } from '@angular/core';
import { decrement } from '../../store/counter.actions';
import { Store } from '@ngrx/store';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-counter-decrement-five',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './counter-decrement-five.component.html',
  styleUrl: './counter-decrement-five.component.scss'
})
export class CounterDecrementFiveComponent {
  constructor(private store : Store){
  }

  decrementFive(){
    this.store.dispatch(decrement({"amount":5}));
  }

}
