import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnouncementModifyPage } from './anouncement-modify.page';

const routes: Routes = [
  {
    path: ':id',
    component: AnouncementModifyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnouncementModifyPageRoutingModule {}
