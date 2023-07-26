import { Injectable } from '@angular/core';
import { AnimalsLabs } from './animals-labs';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  animalsLabsList: AnimalsLabs[] = [
    {
    id: 1,
    breed: 'rat',
    photo: './assets/rat.png',
    characteristics: 'individual'
    },
    {
    id: 2,
    breed: 'dog',
    photo: './assets/dog.png',
    characteristics: 'pack'
    },
    {
    id: 3,
    breed: 'monkey',
    photo: './assets/monkey.png',
    characteristics: 'family-oriented'
    }
  ];

  getAllLabAnimals(): AnimalsLabs[] {
    return this.animalsLabsList;
  }

  getAnimalsDataById(id: number): AnimalsLabs | undefined {
    return this.animalsLabsList.find(animalsLabs => animalsLabs.id === id);
  }

submitApplication(fullName: string, email: string, file: string) {
  console.log(`Data submission received: fullName: ${fullName}, email: ${email}, file: ${file}`);
}

  constructor() { }
}
