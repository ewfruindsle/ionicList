import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface City {
  id: number;
  cityName: string;
  population: string;
  country: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataGetterService {
  baseUrl = 'http://localhost/api/';
  private cities: [];
  private users = [];
  private sights = [];

  constructor(private http: HttpClient) {}

  private username = '';
  private token = '';

  checkUser(user) {
    return this.http.post<any>(this.baseUrl + '?action=login', user);
  }

  getUser() {
    return this.username;
  }

  setUser(name: string) {
    this.username = name;
  }

  setToken(token: string) {
    this.token = token;
  }

  getCities() {
    return this.http.get<any>(
      this.baseUrl + '?action=get-cities&token=' + this.token
    );
  }

  editCity(city) {
    return this.http.post<any>(
      this.baseUrl + '?action=edit-city&token=' + this.token,
      city
    );
  }

  addCity(city) {
    return this.http.post<any>(
      this.baseUrl + '?action=add-city&token=' + this.token,
      city
    );
  }

  deleteCity(city) {
    return this.http.post<any>(
      this.baseUrl + '?action=delete-city&token=' + this.token,
      city
    );
  }

  getSights(id: number) {
    return this.http.get<any>(
      this.baseUrl + `?action=get-sights&city_id=${id}&token=${this.token}`
    );
  }
}
