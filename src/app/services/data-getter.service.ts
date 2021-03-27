import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface City {
  cityName: string;
  population: string;
  country: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataGetterService {
  private cities: City[] = [
    {
      cityName: 'Nikolaev',
      country: 'Ukraine',
      population: '486267',
    },
    {
      cityName: 'Stockholm',
      country: 'Sweden',
      population: '975551',
    },
    {
      cityName: 'Melbourne',
      country: 'Australia',
      population: '486267',
    },
  ];

  private username = '';
  private users = ['Anastasiia', 'Alice', 'Alexander'];

  private sights = [
    { name: 'Yacht club', city: 'Nikolaev', foundationYear: '1889' },
    {
      name: 'Nikolaev Astronomical Observatory',
      city: 'Nikolaev',
      foundationYear: '1821',
    },
    {
      name: 'Stockholms stadsbibliotek',
      city: 'Stockholm',
      foundationYear: '1928',
    },
    { name: 'Vasamuseet', city: 'Stockholm', foundationYear: '1990' },
    {
      name: 'Royal Botanic Gardens',
      city: 'Melbourne',
      foundationYear: '1846',
    },
    {
      name: 'Federation Square',
      city: 'Melbourne',
      foundationYear: '2002',
    },
  ];

  getSights(cityName: string): Observable<any[]> {
    return of(
      this.sights.filter((item) => {
        return item.city === cityName;
      })
    );
  }

  getUser() {
    return this.username;
  }

  setUser(name: string) {
    this.username = name;
  }

  userExists(name: string): boolean {
    return this.users.indexOf(name) !== -1;
  }

  constructor() {}

  getCities(): Observable<City[]> {
    return of(this.cities);
  }

  addCity(city: City) {
    this.cities.push(city);
  }

  deleteCity(index) {
    this.cities.splice(index, 1);
  }
}
