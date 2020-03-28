import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuItemDetailPageRoutingModule } from './menu-item-detail-routing.module';

import { MenuItemDetailPage } from './menu-item-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuItemDetailPageRoutingModule
  ],
  declarations: [MenuItemDetailPage]
})
export class MenuItemDetailPageModule {}
