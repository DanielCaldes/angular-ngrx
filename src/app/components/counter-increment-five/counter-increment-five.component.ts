import { Component } from '@angular/core';
import { increment } from '../../store/counter.actions';
import { Store } from '@ngrx/store';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-counter-increment-five',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './counter-increment-five.component.html',
  styleUrl: './counter-increment-five.component.scss'
})
export class CounterIncrementFiveComponent {
  constructor(private store:Store){
  }

  incrementFive(){
    this.store.dispatch(increment({"amount":5}));
  }
}
