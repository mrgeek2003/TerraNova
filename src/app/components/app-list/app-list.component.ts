import { Component, OnInit } from '@angular/core';
import { HousingServiceService } from '../../service/housing-services/housing-service.service';
import { IProperty } from '../../iproperty.interface';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrl: './app-list.component.css',
})
export class AppListComponent implements OnInit {
  sellRentFlag=0; 
  /* 
  Sell Rent flag depicts weather our property is for sale or for rent
        sellRentFlag=0 ==> Property is for sale (Default)
        sellRentFlag=1 ==> Property is for rent
   */
  properties: IProperty[];
  constructor(private housingService: HousingServiceService) {}
  ngOnInit(): void {   
    this.housingService.getProperties().subscribe((data) => {
      this.properties = data;
      // console.log(this.route.snapshot.url.toString())
    });
  }
}
