import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SightsPage } from './sights.page';

const routes: Routes = [
  {
    path: '',
    component: SightsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SightsPageRoutingModule {}
