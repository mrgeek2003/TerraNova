import { Component, OnInit } from '@angular/core';
import { BuyServicesService } from '../../service/buy-services/buy-services.service';
import { IProperty } from '../../iproperty.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.css'
})
export class BuyComponent implements OnInit{
  sellRentFlag=1; 
  /* 
  Sell Rent flag depicts weather our property is for sale or for rent
        sellRentFlag=0 ==> Property is for sale (Default)
        sellRentFlag=1 ==> Property is for rent
   */
  properties: IProperty[];
  constructor(private route: ActivatedRoute,private buyServices:BuyServicesService) {}
  
  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
       this.sellRentFlag=0
    }
      this.buyServices.getProperties(this.sellRentFlag).subscribe((data) => {
      this.properties = data;
      // console.log(this.route.snapshot.url.toString())
    });
  }
}
