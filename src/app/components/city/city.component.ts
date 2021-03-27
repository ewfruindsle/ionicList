import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { City } from 'src/app/services/data-getter.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent implements OnInit {
  @Input() city: City;
  @Input() isNew: boolean;
  @Output() addCity = new EventEmitter();
  @Output() cancelAddingCity = new EventEmitter();
  title: string;

  constructor() { }

  ngOnInit() {
    if(this.isNew){
      this.city = {
        cityName: '',
        population: '',
        country: ''
      };
      this.title = 'New city'
    }
  }

  addNew(){
    if(this.isNew){
      this.addCity.emit(this.city);
    }
  }

  cancelAdding(){
    if(this.isNew){
      this.cancelAddingCity.emit();
    }
  }

}
