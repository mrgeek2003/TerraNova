import { Component} from '@angular/core';
import { RentServicesService } from '../../service/rent-services/rent-services.service';
import { IProperty } from '../../iproperty.interface';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrl: './rent.component.css'
})
export class RentComponent {
  sellRentFlag=0; 
  /* 
  Sell Rent flag depicts weather our property is for sale or for rent
        sellRentFlag=0 ==> Property is for sale (Default)
        sellRentFlag=1 ==> Property is for rent
   */
  properties: IProperty[];
  constructor(private route: ActivatedRoute,private rentServices:RentServicesService) {}
  
  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
       this.sellRentFlag=1
    }
      this.rentServices.getProperties(this.sellRentFlag).subscribe((data) => {
      this.properties = data;
      // console.log(this.route.snapshot.url.toString())
    });
  }
}
