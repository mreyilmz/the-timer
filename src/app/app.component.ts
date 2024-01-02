import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'remaining-time';

  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number | string;
  seconds: number | string;

  calculate(input: HTMLInputElement) {
    const timeout = setInterval(() => {
      let today = new Date().getTime();
      let userDate = new Date(input.value).getTime();

      let diffTime = userDate - today;
      this.years = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
      this.months = Math.floor(
        (diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
      );

      this.days = Math.floor(
        (diffTime % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
      );
      this.hours = Math.floor(
        (diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      let minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
      if (minutes < 10) this.minutes = '0' + minutes;
      else this.minutes = minutes;

      let seconds = Math.floor((diffTime % (1000 * 60)) / 1000);
      if (seconds < 10) this.seconds = '0' + seconds;
      else this.seconds = seconds;

      if (diffTime < 1000) {
        clearInterval(timeout);
      }
    }, 1000);
  }
}
