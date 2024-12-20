import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreedsService } from '../../shared/services/breeds.service';
import { Breed } from '../../shared/interfaces/breed';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-breed',
  standalone: true,
  imports: [NgClass],
  templateUrl: './breed.component.html',
  styleUrl: './breed.component.scss',
})
export class BreedComponent implements OnInit {
  public breed: Breed | null;
  public rates: number[] = [1, 2, 3, 4, 5];

  constructor(private route: ActivatedRoute, private breeds: BreedsService,) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {        
        this.breed = this.breeds.getBreed(id);
      }
    });
  }
}
