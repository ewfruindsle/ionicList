import { SharedDataService } from './../services/shared-data.service';
import { Component } from '@angular/core';
import { DataGetterService, City } from '../services/data-getter.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title = 'Cities';
  cities: City[];
  showNew = false;
  showEdit = -1;
  username: string;

  constructor(
    private dataGetter: DataGetterService,
    private sharedData: SharedDataService
  ) {
    this.dataGetter.getCities().subscribe((data) => {
      this.cities = data;
    });
    this.username = this.dataGetter.getUser();
  }

  add() {
    this.showNew = true;
  }

  delete(city) {
    this.dataGetter.deleteCity(city).subscribe((res) => {
      this.dataGetter.getCities().subscribe((data) => {
        this.cities = data;
      });
    });
  }

  addCity(city) {
    this.dataGetter.addCity(city).subscribe((res) => {
      this.dataGetter.getCities().subscribe((data) => {
       
        this.cities = data;
      });
    });
    this.showNew = false;
  }
}
