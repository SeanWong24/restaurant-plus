import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuCategoryDetailPageRoutingModule } from './menu-category-detail-routing.module';

import { MenuCategoryDetailPage } from './menu-category-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuCategoryDetailPageRoutingModule
  ],
  declarations: [MenuCategoryDetailPage]
})
export class MenuCategoryDetailPageModule {}
