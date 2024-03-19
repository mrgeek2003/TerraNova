import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
property:any={
  "propertyID": 1,
  "propertyName": "1196 Voyager Street Sudbury Ontario",
  "propertyImage":"/assets/photos/property1.png",
  "propertyPrice": 465000,
  "propertyPriceA": "4,65,000"
}
}
