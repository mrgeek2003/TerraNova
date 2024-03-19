import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HousingServiceService } from '../../service/housing-service.service';
import { IProperty } from '../../iproperty.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrl: './app-list.component.css',
})
export class AppListComponent implements OnInit {
  properties: IProperty[];
  constructor(private route: ActivatedRoute,private housingService: HousingServiceService) {}
  ngOnInit(): void {
   
    this.housingService.getProperties().subscribe((data) => {
      this.properties = data;
      // console.log(data);
      // console.log(this.route.snapshot.url.toString())
    });
  }
}
