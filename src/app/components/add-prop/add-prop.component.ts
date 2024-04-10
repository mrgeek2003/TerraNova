// Import necessary modules and components from Angular core and ngx-bootstrap
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { BsDatepickerConfig, BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import { IProperty } from '../../iproperty.interface';
import { Property } from '../../model/property';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from '../../service/alertyfy/alertify.service';

@Component({
  // Component metadata
  selector: 'app-add-prop', // Selector used to embed this component in HTML
  templateUrl: './add-prop.component.html', // Template file path
  styleUrl: './add-prop.component.css' // Stylesheet file path
})
export class AddPropComponent implements OnInit {
  // ViewChild decorator to access child components
  @ViewChild('form') addPropertyForm: NgForm; // Reference to form element
  @ViewChild('formTabs') formTabs: TabsetComponent; // Reference to tabset component
  propertyTypes:Array<string>=['Apartment','Condo','Deteched','Semi-Deteched','Townhouses','Bungalow']
  furnishTypes:Array<string>=['Fully-Furnished','Semi-Furnished','Unfurnished']
  bsInlineValue = new Date();
  bsInlineRangeValue: Date[];
  maxDate = new Date();
  property=new Property()
  // Constructor to inject dependencies
  constructor(private router: Router,private http:HttpClient,private alert:AlertifyService) {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
  }
  
  propertyView: IProperty={
    "propertyID": 13,
    "sellRentFlag": 0,
    "propertyName": "",   
    "propertyLocation": "",
    "propertyCity": "",
    "propertyImage": "",
    "propertyPrice": 0,
    "propertyPriceA": "0",
    "propertyStatus": "Sale/Rent",
    "propertyLocationURL":"location",
    "propertyType":"House",
    "propertyBHK":0,
    "propertyFurnishType":"Fully-Furnished",
    "propertySecurity":0,
    "builtArea":0,
    "lotArea":0,
    "floors":0,
    "propertyLandMark":"",
    "readyToMoveFlag":"YES",
    "propertyAGE":0,
    "gatedCommunity":"",
    "mainEnterance":"",
    "possessionDate":"02/06/2024",
    "discription":""
  }
  // Lifecycle hook called after component initialization
  ngOnInit(): void {
    // Initialization logic can go here if needed
  }
  colorTheme = 'theme-red';
 
  bsConfig?: Partial<BsDatepickerConfig>;
 
  applyTheme(pop: BsDatepickerDirective) {
    // create new object on each property change
    // so Angular can catch object reference change
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });
    setTimeout(() => {
      pop.show();
    });
  }
  // Method to navigate back to home page
  onBack() {
    this.router.navigate(['/']); // Navigate to home page
  }

  // Method to select a tab in the tabset
  selectTab(tabId: number) {
    // Check if formTabs and formTabs.tabs[tabId] are properly initialized
    if (this.formTabs && this.formTabs.tabs && this.formTabs.tabs[tabId]) {
      // Set the active property of the specified tab to true
      this.formTabs.tabs[tabId].active = true;
    } else {
      // Log an error if the tabId is invalid or formTabs is not properly initialized
      if (!this.formTabs || !this.formTabs.tabs || tabId < 0 || tabId >= this.formTabs.tabs.length) {
        console.error("Invalid tabId or formTabs not properly initialized.");
        return; // Exit the function to prevent further execution
      }
    }
    /* 
    This tab function will navigate us to next tabs using buttons
    and activate that tab according to passed argument.
    Tab1 =>0
    Tab2 =>1
    Tab3 =>2 etc..
    */
  }
//  For Storing Data to Database
storeProperty(property:NgForm){
  try {       
    this.http.post<JSON>("http://localhost:3000/api/properties/",property)
    this.alert.success("Data is Successfully Submitted to Database :)")
  } catch (error) {
    this.alert.error("Failed :( ")    
  }
}
  // Method to handle form submission
  onSubmit() {
    console.log('Congrats, form Submitted'); // Log success message to console
    // console.log(this.addPropertyForm); // Log form data to console
    this.storeProperty(this.addPropertyForm)
    this.router.navigate(['/']) // Navigate to home page (if needed)
  }
  
}
