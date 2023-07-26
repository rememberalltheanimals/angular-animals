import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabAnimalsComponent } from '../lab-animals/lab-animals.component';
import { AnimalsLabs } from '../animals-labs';
import { AnimalsService } from '../animals.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    LabAnimalsComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by subject">
        <button type="button">Search existing data</button>
      </form>
    </section>
    <section>
      <app-lab-animals 
      *ngFor="let labAnimals of animalsLabsList"  
      [labAnimal]="labAnimals"></app-lab-animals>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  animalsLabsList: AnimalsLabs[] = [];
  animalsService: AnimalsService = inject(AnimalsService);

  constructor() {
    this.animalsLabsList = this.animalsService.getAllLabAnimals();
  }
}
