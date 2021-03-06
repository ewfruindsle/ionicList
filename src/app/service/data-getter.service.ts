import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface City {
  cityName: string;
  population: string;
  country: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataGetterService {
  private cities: City[] = [
    {
      cityName: 'Nikolaev',
      country: 'Ukraine',
      population: '486267'
    },
    {
      cityName: 'Stockholm',
      country: 'Sweden',
      population: '975551'
    },
    {
      cityName: 'Melbourne',
      country: 'Australia',
      population: '486267'
    }
  ]

  constructor() { }

  getCities(): Observable<City[]>{
    return of(this.cities);
  }

  addCity(city: City){
    this.cities.push(city);
  }

  deleteCity(index){
    this.cities.splice(index, 1);
  }
}
