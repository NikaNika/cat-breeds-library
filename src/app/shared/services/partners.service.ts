import { Injectable } from '@angular/core';
import { Partner } from '../interfaces/partner';

@Injectable({
  providedIn: 'root'
})
export class PartnersService {
  public partners: Partner[] = [
      {
        id: 1,
        alt: 'lams',
        img: 'cat-food-brands-1.png',
      },
      {
        id: 3,
        alt: 'catty',
        img: 'cat-food-brands-3.png',
      },
      {
        id: 4,
        alt: 'royal',
        img: 'cat-food-brands-4.png',
      },
      {
        id: 5,
        alt: 'bosch',
        img: 'cat-food-brands-5.png',
      },
      {
        id: 6,
        alt: 'whiskas',
        img: 'cat-food-brands-6.png',
      },
      {
        id: 7,
        alt: 'KitKat',
        img: 'cat-food-brands-7.png',
      },
      {
        id: 8,
        alt: 'purina',
        img: 'cat-food-brands-8.png',
      },
  ];
  
  constructor() { }

  public getPartners() {
    return this.partners;
  }
}
