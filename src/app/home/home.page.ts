import { Component } from '@angular/core';
import {DataGetterService, City} from '../service/data-getter.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cities: City[];
  showNew = false;
  showEdit = -1;

  constructor(private dataGetter: DataGetterService) {
    this.dataGetter.getCities().subscribe(
      (data) => {
        this.cities = data;
      }
    );
  }

  add() {
    this.showNew = true;
  }

  edit(city: City) {}

  delete(index: number){
    this.dataGetter.deleteCity(index)
  }

  addCity(city){
    this.dataGetter.addCity(city);
    this.showNew = false;
  }

}
