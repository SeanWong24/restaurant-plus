import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnouncementPage } from './anouncement.page';

const routes: Routes = [
  {
    path: '',
    component: AnouncementPage
  },
  {
    path: 'modify',
    loadChildren: () => import('./anouncement-modify/anouncement-modify.module').then( m => m.AnouncementModifyPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./anouncement-view/anouncement-view.module').then( m => m.AnouncementViewPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnouncementPageRoutingModule {}
