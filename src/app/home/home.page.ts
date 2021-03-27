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

  ionViewDidEnter() {
    if (this.sharedData.getTextData().length != 0) {
      this.title = this.sharedData.getTextData();
    }
  }

  add() {
    this.showNew = true;
  }

  edit(city: City) {}

  delete(index: number) {
    this.dataGetter.deleteCity(index);
  }

  addCity(city) {
    this.dataGetter.addCity(city);
    this.showNew = false;
  }
}
