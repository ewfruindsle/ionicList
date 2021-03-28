import { SharedDataService } from './../services/shared-data.service';
import { DataGetterService } from './../services/data-getter.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sights',
  templateUrl: './sights.page.html',
  styleUrls: ['./sights.page.scss'],
})
export class SightsPage implements OnInit {
  city_id: number;
  cityNm: string;
  sights: any[];
  textData: string;

  constructor(
    private dataGetter: DataGetterService,
    private route: ActivatedRoute,
    private sharedData: SharedDataService
  ) {
    this.city_id = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.cityNm = this.route.snapshot.paramMap.get('cityNm');
    this.dataGetter.getSights(this.city_id).subscribe((data) => {
      this.sights = data;
    });
  }

  passData() {
    this.sharedData.setTextData(this.textData);
  }
}
