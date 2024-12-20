import { Component } from '@angular/core';
import { BreedsService } from '../../shared/services/breeds.service';
import { Breed } from '../../shared/interfaces/breed';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  public breedItems: Breed[] = [];
  public filtered_breedItems: Breed[] = [];
  public searchText: string = '';

  constructor(private breeds: BreedsService) {
    this.breedItems = this.breeds.getBreeds().sort(function (a, b) {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      return 0;
    });
    this.filtered_breedItems = this.breedItems;
  }

  ngOnInit(): void {
    this.search();
  }

  searchKey(data: string) {
    this.searchText = data.trim();
    this.search();
  }

  search():void {
    const lowerCaseSearch = this.searchText.toLowerCase();
    this.filtered_breedItems = lowerCaseSearch
      ? this.breedItems.filter((element) =>
          element.title.toLowerCase().includes(lowerCaseSearch)
        )
      : [...this.breedItems];
  }
}
