import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IProperty } from '../../iproperty.interface';
import { Observable } from 'rxjs';
import { Property } from '../../model/property';

@Injectable({
  providedIn: 'root',
})
export class HousingServiceService {
  constructor(private http: HttpClient) {}
  fetchProperty(id: number): Observable<IProperty | undefined> {
    return this.getProperties().pipe(
      map(propertiesArray => {
        return propertiesArray.find(p => p.propertyID === id);
      })
    );
  }
  //data/properties.json
  getProperties(): Observable<IProperty[]> {
    return this.http.get('http://localhost:3000/api/properties/').pipe(
      map((data) => {
        const propertiesArray: Array<IProperty> = [];

        for (const id in data) {
          if (data.hasOwnProperty(id)) {
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );
  }
}
