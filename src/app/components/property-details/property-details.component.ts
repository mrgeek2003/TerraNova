import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HousingServiceService } from '../../service/housing-services/housing-service.service';
import { Property } from '../../model/property';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IProperty } from '../../iproperty.interface';
@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css'], // Use styleUrls instead of styleUrl
})
export class PropertyDetailsComponent implements OnInit {
  public propertyID: number;
  public Property: IProperty;
  property: Property | undefined = new Property();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private housingService: HousingServiceService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.propertyID = +this.route.snapshot.params['propertyID'];

    this.route.params.subscribe(
      (params: Params) => { // Specify type Params for params
        this.propertyID = +params['propertyID'];
        this.housingService.fetchProperty(this.propertyID).subscribe(
          (data?: Property) => {
            this.property = data;
          }
        );
      }
    );
    this.http
      .get('http://localhost:3000/api/properties/')
      .subscribe((response) => {
        try {
          console.log(response);
          this.Property = response as IProperty;
        } catch (error) {
          console.error('HTTP Server is not responding...');
        }
      });
  }
  // getProperties(){
  //   this.http.get('http://localhost:3000/api/properties/').subscribe(
  //     response=>{
  //       console.log(response)
  //       this.Property=response
  //     }
  //   )
  // }
  onSelectNext() {
    this.propertyID += 1;
    this.router.navigate(['property-details', this.propertyID]);
  }
}
