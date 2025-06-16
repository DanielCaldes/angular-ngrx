import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChartDashboardComponent } from "./components/chart-dashboard/chart-dashboard.component";
import { CounterDisplayComponent } from "./components/counter-display/counter-display.component";
import { CounterIncrementFiveComponent } from "./components/counter-increment-five/counter-increment-five.component";
import { CounterDecrementFiveComponent } from "./components/counter-decrement-five/counter-decrement-five.component";
import { CounterResetComponent } from "./components/counter-reset/counter-reset.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChartDashboardComponent, CounterDisplayComponent, CounterIncrementFiveComponent, CounterDecrementFiveComponent, CounterResetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngrx';
}
