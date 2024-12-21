import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MostPopularCardComponent } from '../../shared/components/most-popular-card/most-popular-card.component';
import { Partner } from '../../shared/interfaces/partner';
import { Breed } from '../../shared/interfaces/breed';
import { BreedsService } from '../../shared/services/breeds.service';
import { PartnersService } from '../../shared/services/partners.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, MostPopularCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public src: string = '../../../assets/images/partners/';
  public partners_img: Partner[];
  public popular_breeds: Breed[];

  constructor(private breeds: BreedsService, private partners: PartnersService) {}

  ngOnInit(): void {
    this.popular_breeds = this.breeds
      .getBreeds()
      .sort((a, b) => b.position - a.position)
      .slice(0, 3);
    this.partners_img = this.partners.getPartners();
  }
}
