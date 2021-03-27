import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SightsPageRoutingModule } from './sights-routing.module';

import { SightsPage } from './sights.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SightsPageRoutingModule
  ],
  declarations: [SightsPage]
})
export class SightsPageModule {}
