import { Component, Input } from '@angular/core';
import { Breed } from '../../interfaces/breed';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-most-popular-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './most-popular-card.component.html',
  styleUrl: './most-popular-card.component.scss'
})
export class MostPopularCardComponent { 
  @Input() itemData: Breed;  
}
