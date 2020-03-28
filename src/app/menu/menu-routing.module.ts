import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage
  },
  {
    path: 'category',
    loadChildren: () => import('./menu-category/menu-category.module').then( m => m.MenuCategoryPageModule)
  },
  {
    path: 'item',
    loadChildren: () => import('./menu-item-detail/menu-item-detail.module').then( m => m.MenuItemDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
