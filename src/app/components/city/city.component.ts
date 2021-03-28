import { DataGetterService } from './../../services/data-getter.service';
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

  constructor(private dataGetter: DataGetterService) {}

  ngOnInit() {
    if (this.isNew) {
      this.city = {
        id: null,
        cityName: '',
        country: '',
        population: ''
      };
      this.title = 'New city';
    }
  }

  addNew() {
    if (this.isNew) {
      this.addCity.emit(this.city);
    }
  }

  cancelAdding() {
    if (this.isNew) {
      this.cancelAddingCity.emit();
    }
  }

  saveCity() {
    this.dataGetter.editCity(this.city).subscribe((data) => console.log(data));
  }
}
