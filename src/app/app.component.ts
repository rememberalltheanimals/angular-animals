import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterLink,
    RouterOutlet
  ],
  styleUrls: ['./app.component.css'],
  template: `
  <h1>Collect data to research for the alternatives to animal testing</h1>
  <main>
    <a [routerLink]="['/']">
      <header>
        <img src="/assets/lab-equipment.png" width=300px height=300px>
      </header>
    </a>
    <section>
      <router-outlet></router-outlet>
    </section>
  </main>
  `
})
export class AppComponent {
  title = 'humane science';
}
