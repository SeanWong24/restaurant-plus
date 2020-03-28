import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuCategoryDetailPage } from './menu-category-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MenuCategoryDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuCategoryDetailPageRoutingModule {}
