import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AnimalsService } from '../animals.service';
import { AnimalsLabs } from '../animals-labs';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule  
  ],
  template: `
    <article>
      <img [src]="labAnimals?.photo"/>
      <section>
        <h2>{{labAnimals?.breed}}</h2>
        <p>{{labAnimals?.characteristics}}</p>
      </section>
      <section>
        <h2>Alternatives available:</h2>
        <ul>
          <li><strong>Use the existing data</strong>instead of another test on {{labAnimals?.breed}}</li>
          <li><strong>Use the donated human cells</strong>instead of {{labAnimals?.breed}}</li>
          <li><strong>Use computer chips and simulator</strong>instead of {{labAnimals?.breed}}</li>
        </ul>
      </section>
      <section>
        <h2>Share the research data here</h2>
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label for="fullName">Full Name</label>
          <input type="text" formControlName="fullName">

          <label for="email">email</label>
          <input type="text" fromControlName="email">

          <label for="file">file</label>
          <input type="text" formControlName="file">

          <button type="submit">Share</button>
        </form>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  animalsService = inject(AnimalsService);
  labAnimals: AnimalsLabs | undefined;

  applyForm = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    file: new FormControl('')
  });

  constructor() {
   const labAnimalId = Number(this.route.snapshot.params['id']);
   this.labAnimals = this.animalsService.getAnimalsDataById(labAnimalId);
  }

  submitApplication() {
    this.animalsService.submitApplication(
      this.applyForm.value.fullName ?? '',
      this.applyForm.value.email ?? '',
      this.applyForm.value.file ?? ''
    );
  }
}
