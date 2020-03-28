import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuCategoryPage } from './menu-category.page';

const routes: Routes = [
  {
    path: '',
    component: MenuCategoryPage
  },
  {
    path: ':id',
    loadChildren: () => import('./menu-category-detail/menu-category-detail.module').then( m => m.MenuCategoryDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuCategoryPageRoutingModule {}
