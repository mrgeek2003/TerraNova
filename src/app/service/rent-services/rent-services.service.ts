import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IProperty } from '../../iproperty.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentServicesService {
  constructor(private http: HttpClient) {}
  getProperties(sellRentFlag:number): Observable<IProperty[]> {
    return this.http.get('data/properties.json').pipe(
      map((data) => {
        const propertiesArray: Array<IProperty> = [];

        for (const id in data) {
          if (data.hasOwnProperty(id) && data[id].sellRentFlag===sellRentFlag) {
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );
  }  
}
