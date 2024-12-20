import { Component } from '@angular/core';
import { SubscribeComponent } from "../subscribe/subscribe.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SubscribeComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
