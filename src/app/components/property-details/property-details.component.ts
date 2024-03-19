import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrl: './property-details.component.css'
})
export class PropertyDetailsComponent implements OnInit {
public propertyID:number
constructor(private route:ActivatedRoute,private router:Router){}
ngOnInit(): void {
    this.propertyID=+this.route.snapshot.params['propertyID']

    this.route.params.subscribe(
      (params)=>{
        this.propertyID=+params['propertyID']
      }
    )
}
onSelectNext(){
  this.propertyID+=1
  this.router.navigate(['property-details',this.propertyID])
}
}
