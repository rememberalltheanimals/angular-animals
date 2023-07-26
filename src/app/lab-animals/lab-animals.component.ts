import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalsLabs } from '../animals-labs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lab-animals',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
    <section>
      <img [src]="labAnimal.photo">
      <h2>{{ labAnimal.breed }}</h2>
      <p>{{ labAnimal.characteristics }}</p>
      <a [routerLink]="['/details', labAnimal.id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./lab-animals.component.css']
})
export class LabAnimalsComponent {
  @Input() labAnimal!: AnimalsLabs;
}
