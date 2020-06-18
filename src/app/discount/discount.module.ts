import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscountPageRoutingModule } from './discount-routing.module';

import { DiscountPage, DiscountStatusColorPipe } from './discount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscountPageRoutingModule
  ],
  declarations: [DiscountPage, DiscountStatusColorPipe]
})
export class DiscountPageModule {}
