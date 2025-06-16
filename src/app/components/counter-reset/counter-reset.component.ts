import { Component } from '@angular/core';
import { reset } from '../../store/counter.actions';
import { Store } from '@ngrx/store';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-counter-reset',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './counter-reset.component.html',
  styleUrl: './counter-reset.component.scss'
})
export class CounterResetComponent {
  constructor(private store:Store){}

  resetNumber(){
    this.store.dispatch(reset());
  }
}
