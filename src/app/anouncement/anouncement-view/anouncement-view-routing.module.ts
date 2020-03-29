import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnouncementViewPage } from './anouncement-view.page';

const routes: Routes = [
  {
    path: '',
    component: AnouncementViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnouncementViewPageRoutingModule {}
